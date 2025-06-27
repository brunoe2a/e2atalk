<?php

namespace App\Http\Controllers;

use App\Helpers\EvolutionApi;
use App\Helpers\Helper;
use App\Jobs\SendWhatsappAudioJob;
use App\Jobs\SendWhatsappFile64Job;
use App\Jobs\SendWhatsappFileJob;
use App\Jobs\SendWhatsappMessageJob;
use App\Models\Contato;
use App\Models\Message;
use App\Models\SessaoAtendimento;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use FFMpeg;

class MessageController extends Controller
{
    public function index(Request $request)
    {
        // Retorna todas as mensagens para exibir na interface
        if ($request->contato){
            $sessao = SessaoAtendimento::where('protocolo', $request->protocolo)->first();
            $contato = Contato::where('id', $request->contato)->first();

            $messages = Message::where('contato_id', $request->contato)
                ->where('sessao_atendimento_id', $sessao->id)
                ->orderBy('created_at')
                ->get();
            $messages->each(function ($message) {
                $message->time = Helper::dataTimeParaBrasil($message->created_at);
            });
        }else{
            $messages = [];
            $sessao = [];
            $contato = null;
        }
        $sessoes = SessaoAtendimento::with('contato')->where('status', '!=', 'Concluido')->get();
        $sessoes->each(function ($s) {
            $s->latest_message = Message::where('contato_id', $s->contato_id)->where('sessao_atendimento_id', $s->id)->where('fluxo', 'Entrada')->latest()->first();
        });
        return Inertia::render('Service/Index', [
            'messagesChat' => $messagesChat ?? [],
            "messages" => $messages,
            'contato' => $contato,
            'sessao' => $sessao,
            'sessoes' => $sessoes
        ]);
    }

    public function sendText(Request $request)
    {
        // Validação dos dados
        $request->validate([
            'message' => 'required|string|max:1000',
            'contato_id' => 'required',
        ]);

        if ($request->sessao_id){
            $sessao = SessaoAtendimento::where('id', $request->sessao_id)->first();
        }elseif ($request->protocolo){
            $sessao = SessaoAtendimento::where('protocolo', $request->protocolo)->first();
        }else{
            $sessao = SessaoAtendimento::create([
                'contato_id' => $request->contato_id,
                'user_id' => auth()->id(),
                'protocolo' => Helper::protocolo('AT'),
                'status' => 'Atendimento',
            ]);
        }

        $contato = Contato::where('id', $request->contato_id)->first();

        $message = Message::create([
            'user_id' => auth()->id(),  // Captura o ID do usuário autenticado (se aplicável)
            'content' => $request->message,
            'contato_id' => $request->contato_id,
            'sessao_atendimento_id' => $sessao->id,
            'from' => '556599038988',
            'to' => '55'.$contato->numero,
            'type' => 'text',
            'fluxo' => 'Saida',
            'created_at' => Helper::agoraMySQL(),
            'updated_at' => Helper::agoraMySQL(),
        ]);

        $dados = [
            'number' => '55'.$contato->numero,
            'text' => "*".auth()->user()->name.":*\n".$request->message,
            'time_typing' => 0,
            'options' => [
                'createChat' => true,
                'delay' => 0,
                'detectMentioned' => false,
                'markIsRead' => false,
                'waitForAck' => false
            ],
            'message_id' => $message->id
        ];

        SendWhatsappMessageJob::dispatch($message, $dados)->onQueue('fila_atendimento_demo');

        if ($sessao->new_chat == 'S'){
            $sessao->update([
                'new_chat' => 'N'
            ]);
        }

        // $response = EvolutionApi::sendText($dados);

        // dd($response->getData());

        // Resposta com sucesso
        return redirect()->route('service.messages.contato', [$request->contato_id, $sessao->protocolo])->with('success', 'Mensagem enviada com sucesso!');
    }

    public function sendFile(Request $request)
    {
        // Validação dos dados
        $regras = [
            'caption' => 'nullable|string|max:1000',
            'contato_id' => 'required|numeric',
            'sessao_id' => 'required|numeric',
            'arquivo' => 'required|mimes:webp,mp4,jpeg,jpg,png,pdf,doc,docx,xls,xlsx,csv|max:20120',
        ];

        $feedback = [
            'required' => 'Selecione um arquivo!',
            'mimes' => 'São permitido enviar arquivo nos formatos: jpeg, jpg, png, webp, mp4, pdf, doc, docx, xls, xlsx, csv',
            'caption.max' => 'Sua legenda deve conter no maximo 1000 caractéres.',
            'arquivo.max' => 'O arquivo deve ter no maximo 5mb!',
        ];

        $request->validate($regras, $feedback);

        $arquivo = $request->file('arquivo');
        $path = 'messages/send/documents';
        $filePath = Storage::disk('public')->put($path, $arquivo);

        /** Define qual o tipo do arquivo */
        $fileType = explode('/', $arquivo->getMimeType())[0];
        if ($fileType === 'application'){
            $fileType = 'document';
        }

        $contato = Contato::where('id', $request->contato_id)->first();

        $message = Message::create([
            'user_id' => auth()->id(),  // Captura o ID do usuário autenticado (se aplicável)
            'content' => $arquivo->getClientOriginalName() ?? '',
            'caption' => $request->caption ?? null,
            'contato_id' => $request->contato_id,
            'sessao_atendimento_id' => $request->sessao_id,
            'from' => '556599038988',
            'to' => '55'.$contato->numero,
            'type' => $fileType,
            'mimetype' => $arquivo->getMimeType() ?? null,
            'file_path' => $filePath,
            'fluxo' => 'Saida',
            'created_at' => Helper::agoraMySQL(),
            'updated_at' => Helper::agoraMySQL(),
        ]);

        // $documento = 'data:'.$arquivo->getMimeType().';base64,'.base64_encode(file_get_contents($arquivo->path()));

        $dados = [
            'number' => '55'.$contato->numero,
            'mediatype' => $fileType,
            'mimetype' => $arquivo->getMimeType(),
            'caption' => $request->caption ? "*".auth()->user()->name.":*\n".$request->caption : '',
            'media' => 'https://atendimento.e2adigital.com/storage/'.$filePath,
            'fileName' => $arquivo->getClientOriginalName(),
            'message_id' => $message->id
        ];

        SendWhatsappFileJob::dispatch($message, $dados)->onQueue('fila_atendimento_demo');

        // $api = EvolutionApi::sendFile($dados);

        $sessao = SessaoAtendimento::where('id', $request->sessao_id)->first();
        if ($sessao->new_chat == 'S'){
            $sessao->update([
                'new_chat' => 'N'
            ]);
        }

        return redirect()->route('service.messages.contato', [$request->contato_id, $sessao->protocolo])->with('success', 'Mensagem enviada com sucesso!');
    }

    public function sendImage(Request $request)
    {
        // Validação dos dados
        $regras = [
            'caption' => 'nullable|string|max:1000',
            'contato_id' => 'required|numeric',
            'sessao_id' => 'required|numeric',
            'arquivo' => 'required|mimes:png,jpeg,jpg,webp|max:5120',
        ];

        $feedback = [
            'required' => 'Selecione um arquivo!',
            'mimes' => 'É permitido somente imagem em PNG, JPG, JPEG, WEBP',
            'caption.max' => 'Sua legenda deve conter no maximo 1000 caractéres.',
            'arquivo.max' => 'O arquivo deve ter no maximo 5mb!',
        ];

        $request->validate($regras, $feedback);

        $arquivo = $request->file('arquivo');
        $path = 'messages/send/images';
        $filePath = Storage::disk('public')->put($path, $arquivo);

        $contato = Contato::where('id', $request->contato_id)->first();

        $message = Message::create([
            'user_id' => auth()->id(),  // Captura o ID do usuário autenticado (se aplicável)
            'content' => $request->caption ?? '',
            'contato_id' => $request->contato_id,
            'sessao_atendimento_id' => $request->sessao_id,
            'from' => '556599038988',
            'to' => '55'.$contato->numero,
            'type' => 'image',
            'mimetype' => $arquivo->getMimeType() ?? null,
            'file_path' => $filePath,
            'fluxo' => 'Saida',
            'created_at' => Helper::agoraMySQL(),
            'updated_at' => Helper::agoraMySQL(),
        ]);

        // $image = 'data:'.$arquivo->getMimeType().';base64,'.base64_encode(file_get_contents($arquivo->path()));

        $dados = [
            'number' => '55'.$contato->numero,
            'mediatype' => 'image',
            'mimetype' => $arquivo->getMimeType(),
            'caption' => "*".auth()->user()->name.":*\n".$request->caption ?? '',
            'media' => 'https://atendimento.e2adigital.com/storage/'.$filePath,
            'fileName' => $arquivo->getClientOriginalName(),
            'message_id' => $message->id
        ];

        SendWhatsappFile64Job::dispatch($message, $dados)->onQueue('fila_atendimento_demo');

        // $api = EvolutionApi::sendImage($dados);

        /*if (!$api->getData()->error){
            $message->update([
                'whatsapp_id' => $api->getData()->response->data->id,
                'status' => 'Enviada'
            ]);
        }*/

        $sessao = SessaoAtendimento::where('id', $request->sessao_id)->first();
        if ($sessao->new_chat == 'S'){
            $sessao->update([
                'new_chat' => 'N'
            ]);
        }

        return redirect()->route('service.messages.contato', [$request->contato_id, $sessao->protocolo])->with('success', 'Mensagem enviada com sucesso!');

    }



    public function sendAudio(Request $request)
    {
        if ($request->arquivo){
            $regras = [
                'contato_id' => 'required|numeric',
                'sessao_id' => 'required|numeric',
                'arquivo' => 'required|mimes:mp3,mpeg,webm|max:5120',
                'audio' => 'nullable|max:5120',
            ];
        }else{
            $regras = [
                'contato_id' => 'required|numeric',
                'sessao_id' => 'required|numeric',
                'arquivo' => 'nullable|mimes:mp3,mpeg,webm|max:5120',
                'audio' => 'required|max:5120',
            ];
        }

        $feedback = [
            'required' => 'Selecione um arquivo ou grave um audio!',
            'mimes' => 'É permitido somente audio em mp3',
            'max' => 'O audio deve ter no maximo 5mb!',
        ];

        $request->validate($regras, $feedback);

        if ($request->audio){
            $arquivo = $request->file('audio');
            $path = 'messages/send/audios';
            $filePath = Storage::disk('public')->put($path, $arquivo);
        }else{
            $arquivo = $request->file('arquivo');
            $path = 'messages/send/audios';
            $filePath = Storage::disk('public')->put($path, $arquivo);
        }

        $contato = Contato::where('id', $request->contato_id)->first();

        $message = Message::create([
            'user_id' => auth()->id(),  // Captura o ID do usuário autenticado (se aplicável)
            'content' => '',
            'contato_id' => $request->contato_id,
            'sessao_atendimento_id' => $request->sessao_id,
            'from' => '556599038988',
            'to' => '55'.$contato->numero,
            'type' => 'audio',
            'mimetype' => $arquivo->getMimeType() ?? null,
            'file_path' => $filePath,
            'fluxo' => 'Saida',
            'created_at' => Helper::agoraMySQL(),
            'updated_at' => Helper::agoraMySQL(),
        ]);

        $dados = [
            'number' => '55'.$contato->numero,
            'audio' => 'https://atendimento.e2adigital.com/storage/'.$filePath,
            'message_id' => $message->id
        ];

        SendWhatsappAudioJob::dispatch($message, $dados)->onQueue('fila_atendimento_demo');

        /* $api = EvolutionApi::sendAudio($dados);

        if (!$api->getData()->error){
            $message->update([
                'whatsapp_id' => $api->getData()->response->id,
                'status' => 'Enviada'
            ]);
        }*/

        $sessao = SessaoAtendimento::where('id', $request->sessao_id)->first();
        if ($sessao->new_chat == 'S'){
            $sessao->update([
                'new_chat' => 'N'
            ]);
        }

        return redirect()->route('service.messages.contato', [$request->contato_id, $sessao->protocolo])->with('success', 'Mensagem enviada com sucesso!');

    }
}
