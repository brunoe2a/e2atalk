<?php

namespace App\Http\Controllers;

use App\Events\MessageSent;
use App\Events\NewAtendimentoEvent;
use App\Helpers\Helper;
use App\Models\Contato;
use App\Models\Message;
use App\Models\SessaoAtendimento;
use App\Models\WebHook;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class WebHookController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function handleMessages(Request $request)
    {
        /** Armazenar json do webhook
        WebHook::create([
            'content' => json_encode($request->all()),
            'endpoint' => 'webhook.messages'
        ]);*/

        /** Verifica se a mensagem ja esta registrada no sistema */
        $msg = Message::where('whatsapp_id', $request['data']['id'])->first();

        if (!$request['data']['fromMe']){
            /** Trata o numero Recebido */
            if (strlen($request['data']['from']) == 12){
                $ddd = substr($request['data']['from'], 2, 2);
                $numero = $ddd.'9'.substr($request['data']['from'], 4);
            }else{
                $numero = $request['data']['from'];
            }

            /** Verifica se tem registro do contato */
            $contato = Contato::where('numero', $numero)->first();
            if (!$contato){
                $contato = Contato::create([
                    'name' => $request['data']['name'] ?? ($request['data']['data']['notifyName'] ?? null) ,
                    'numero' => $numero
                ]);
            }

            /** Armazenar a mensagem no banco de dados */
            if (!$msg){
                $sessao = SessaoAtendimento::where('status', '!=', 'Concluido')
                    ->where('contato_id', $contato->id)
                    ->first();

                if (!$sessao){
                    $sessao = SessaoAtendimento::create([
                        'contato_id' => $contato->id,
                        'protocolo' => Helper::protocolo('WA'),
                        'status' => 'Aguardando',
                    ]);
                }

                if (!empty($request['data']['base64'])){
                    // Decodificar o conteúdo base64
                    $fileData = explode(';base64,', $request['data']['base64']);
                    $fileContents = base64_decode($fileData[1]);

                    if ($request['data']['type'] == 'image'){
                        $fileExtension = explode('/', $fileData[0])[1]; // Extrair a extensão (ex: png, jpeg)
                        $path = 'messages/received/images/';
                    }
                    if ($request['data']['type'] == 'ptt' || $request['data']['type'] == 'audio'){
                        $preFileExtension = explode('/', $request['data']['mimetype'])[1];
                        $fileExtension = explode(';', $preFileExtension)[0];
                        $path = 'messages/received/audio/';
                    }
                    if ($request['data']['type'] == 'document'){
                        $fileExtension = explode('/', $request['data']['mimetype'])[1];
                        $path = 'messages/received/documento/';
                    }

                    // Definir o nome do arquivo único com a extensão correta
                    $fileName = uniqid() . '.' . $fileExtension;

                    // Salvar no storage
                    Storage::disk('public')->put($path . $fileName, $fileContents);

                    // Caminho do arquivo salvo
                    $filePath = $path . $fileName;
                }

                $message = Message::create([
                    'content' => $request['data']['content'] ?? '',
                    'caption' => $request['data']['caption'] ?? null,
                    'contato_id' => $contato->id,
                    'from' => $request['data']['from'],
                    'to' => $request['data']['to'],
                    'type' => $request['data']['type'],
                    'mimetype' => $request['data']['mimetype'] ?? null,
                    'file_path' => $filePath ?? null,
                    'whatsapp_id' => $request['data']['id'],
                    'sessao_atendimento_id' => $sessao->id,
                    'fluxo' => 'Entrada',
                    'status' => 'Recebida',
                    'created_at' => Helper::agoraMySQL(),
                    'updated_at' => Helper::agoraMySQL()
                ]);

                MessageSent::dispatch($message);
            }
        }

        return response()->json(['status' => 'success']);
    }

    /**
     * Display a listing of the resource.
     */
    public function handleMessagesMaytapi(Request $request)
    {
        /** Armazenar json do webhook */
        WebHook::create([
            'content' => json_encode($request->all()),
            'endpoint' => 'webhook.maytapi'
        ]);

        /** Verifica se a mensagem ja esta registrada no sistema */
        $msg = Message::where('whatsapp_id', $request['message']['id'])->first();

        if (!$request['message']['fromMe']){
            /** Trata o numero Recebido */
            if (strlen($request['user']['phone']) == 12){
                $ddd = substr($request['user']['phone'], 2, 2);
                $numero = $ddd.'9'.substr($request['user']['phone'], 4);
            }else{
                $numero = $request['user']['phone'];
            }

            /** Verifica se tem registro do contato */
            $contato = Contato::where('numero', $numero)->first();
            if (!$contato){
                $contato = Contato::create([
                    'name' => $request['user']['name'] ?? ($request['conversation_name'] ?? null) ,
                    'numero' => $numero
                ]);
            }

            /** Armazenar a mensagem no banco de dados */
            if (!$msg) {
                $sessao = SessaoAtendimento::where('status', '!=', 'Concluido')
                    ->where('contato_id', $contato->id)
                    ->first();

                if (!$sessao) {
                    $sessao = SessaoAtendimento::create([
                        'contato_id' => $contato->id,
                        'protocolo' => Helper::protocolo('WA'),
                        'status' => 'Aguardando',
                    ]);
                }

                if (!empty($request['message']['url'])){
                    $url = explode('?', $request['message']['url'])[0];

                    // Obtém o conteúdo da imagem
                    $fileContents = file_get_contents($url);

                    if ($request['message']['type'] == 'image'){
                        $path = 'messages/images/';
                    }else{
                        $path = 'messages/documento/';
                    }

                    // Definir uma extensão baseada no tipo da imagem (opcional, pode ser ajustado conforme necessário)
                    $fileExtension = pathinfo($url, PATHINFO_EXTENSION);

                    // Definir o nome do arquivo único com a extensão correta
                    $fileName = uniqid() . '.' . $fileExtension;

                    // Salvar no storage
                    Storage::disk('public')->put($path . $fileName, $fileContents);

                    // Caminho do arquivo salvo
                    $filePath = $path . $fileName;
                }

                $message = Message::create([
                    "content" => $request["message"]["content"] ?? "",
                    "caption" => $request["message"]["caption"] ?? null,
                    'contato_id' => $contato->id,
                    'from' => $request['user']['phone'],
                    'to' => $request['receiver'],
                    'type' => $request['message']['type'],
                    'mimetype' => $request['message']['mime'] ?? null,
                    'file_path' => $filePath ?? null,
                    'whatsapp_id' => $request['message']['id'],
                    'sessao_atendimento_id' => $sessao->id,
                    'fluxo' => 'Entrada',
                    'status' => 'Recebida',
                    'created_at' => date('Y-m-d H:i:s', $request['timestamp']),
                    'updated_at' => date('Y-m-d H:i:s', $request['timestamp'])
                ]);

                MessageSent::dispatch($message);
            }
        }

        return response()->json(['status' => 'success']);
    }

    /**
     * Display a listing of the resource.
     */
    public function handleMessagesEvolutioApi(Request $request)
    {
        /** Armazenar json do webhook */
        WebHook::create([
            'content' => json_encode($request->all()),
            'endpoint' => 'webhook.evolution'
        ]);

        $grupo = empty($request['data']['key']['participant']);

        if ($request['event'] === 'messages.upsert' && $grupo){
            /** Verifica se a mensagem ja esta registrada no sistema */
            $msg = Message::where('whatsapp_id', $request['data']['key']['id'])->first();

            if (!$request['data']['key']['fromMe']){
                /** Trata o número de origem */
                $remoteJid = explode('@', $request['data']['key']['remoteJid'])[0];
                if (strlen($remoteJid) == 12){
                    $ddd = substr($remoteJid, 2, 2);
                    $numero = $ddd.'9'.substr($remoteJid, 4);
                }else{
                    $numero = $remoteJid;
                }

                /** Verifica se tem registro do contato */
                $contato = Contato::where('numero', $numero)->first();
                if (!$contato){
                    $contato = Contato::create([
                        'name' => $numero,
                        'numero' => $numero
                    ]);
                }

                /** Armazenar a mensagem no banco de dados */
                if (!$msg) {
                    $sessao = SessaoAtendimento::where('status', '!=', 'Concluido')
                        ->where('contato_id', $contato->id)
                        ->first();

                    if (!$sessao) {
                        $sessao = SessaoAtendimento::create([
                            'contato_id' => $contato->id,
                            'protocolo' => Helper::protocolo('WA'),
                            'status' => 'Aguardando',
                        ]);

                        $sessoes = SessaoAtendimento::with('contato')->where('id', $sessao->id)->where('status', '!=', 'Concluido')->first();
                        NewAtendimentoEvent::dispatch($sessoes);
                    }

                    if ($sessao->new_chat == 'N'){
                        $sessao->update([
                            'new_chat' => 'S'
                        ]);
                    }

                    if (!empty($request['data']['message']['base64'])){
                        // Decodificar o conteúdo base64
                        $fileContents = base64_decode($request['data']['message']['base64']);

                        if ($request["data"]["messageType"] == 'imageMessage'){
                            $mimetype = $request["data"]["message"]['imageMessage']['mimetype'];
                            $fileExtension = explode('/', $mimetype)[1]; // Extrair a extensão (ex: png, jpeg)
                            $path = 'messages/received/images/';
                            $caption = $request["data"]["message"]['imageMessage']['caption'];
                        }
                        if ($request["data"]["messageType"] == 'audioMessage'){
                            $mimetype = $request["data"]["message"]['audioMessage']['mimetype'];
                            $preFileExtension = explode('/', $mimetype)[1];
                            $fileExtension = explode(';', $preFileExtension)[0];
                            $path = 'messages/received/audio/';
                        }
                        if ($request["data"]["messageType"] == 'videoMessage'){
                            $mimetype = $request["data"]["message"]['videoMessage']['mimetype'];
                            $fileExtension = explode('/', $mimetype)[1];
                            $path = 'messages/received/video/';
                            $caption = $request["data"]["message"]['videoMessage']['caption'];
                        }
                        if (!empty($request['data']['message']['documentWithCaptionMessage'])){
                            $mimetype = $request["data"]["message"]['documentWithCaptionMessage']['message']['documentMessage']['mimetype'];
                            $fileExtension = explode('/', $mimetype)[1];
                            $path = 'messages/received/documento/';
                            $caption = $request["data"]["message"]['documentWithCaptionMessage']['message']['documentMessage']['caption'];
                        }

                        // Definir o nome do arquivo único com a extensão correta
                        $fileName = uniqid() . '.' . $fileExtension;

                        // Salvar no storage
                        Storage::disk('public')->put($path . $fileName, $fileContents);

                        // Caminho do arquivo salvo
                        $filePath = $path . $fileName;
                    }

                    /** Trata o numero Recebido */
                    $sender = explode('@', $request['sender'])[0];

                    $message = Message::create([
                        "content" => $request["data"]["message"]['conversation'] ?? "",
                        "caption" => $caption ?? null,
                        'contato_id' => $contato->id,
                        'from' => $remoteJid,
                        'to' => $sender,
                        'type' => $request["data"]["messageType"],
                        'mimetype' => $mimetype ?? null,
                        'file_path' => $filePath ?? null,
                        'whatsapp_id' => $request['data']['key']['id'],
                        'sessao_atendimento_id' => $sessao->id,
                        'fluxo' => 'Entrada',
                        'status' => 'Recebida'
                    ]);

                    MessageSent::dispatch($message);

                }
            }
        }

        return response()->json(['status' => 'success']);
    }

    /**
     * Display a listing of the resource.
     */
    public function handleStatusConexao(Request $request)
    {
        /** Armazenar json do webhook */
        WebHook::create([
            'content' => json_encode($request->all()),
            'endpoint' => 'webhook.status.conexao'
        ]);

        return response()->json(['status' => 'success']);
    }

    /**
     * Display a listing of the resource.
     */
    public function handleStatusDispositivo(Request $request)
    {
        /** Armazenar json do webhook */
        WebHook::create([
            'content' => json_encode($request->all()),
            'endpoint' => 'webhook.status.dispositivo'
        ]);

        return response()->json(['status' => 'success']);
    }
}
