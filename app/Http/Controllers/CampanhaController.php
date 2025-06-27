<?php

namespace App\Http\Controllers;

use App\Helpers\EvolutionDisparoApi;
use App\Helpers\Helper;
use App\Jobs\ProcessarDisparo;
use App\Jobs\ProcessCampaignJob;
use App\Jobs\ValidaNumerosJob;
use App\Models\Campanha;
use App\Models\Contato;
use App\Models\DisparoContato;
use App\Models\Instancia;
use App\Models\ListaContato;
use App\Service\InstanciaService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Queue;
use Inertia\Inertia;

class CampanhaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $ordem = $request->ordem ?? 'id';
        $status = $request->status ? [$request->status] : ['Aguardando', 'Pausada', 'Iniciada'];
        $quantPag = $request->quantpag ?? 15;
        $pesquisar = $request->pesquisar ?? '';

        if ($request->status == 'todas'){
            $status = ['Aguardando', 'Iniciada', 'Pausada', 'Concluida'];
        }

        // Filtra as campanhas de forma eficiente
        $campanhas = Campanha::query()
            ->when($pesquisar, function ($query, $pesquisar) {
                $query->where('nome', 'like', '%' . $pesquisar . '%')
                    ->orWhere('id', $pesquisar);
            })
            ->whereIn('status', $status)
            ->orderBy($ordem, 'desc')
            ->paginate($quantPag);

        // Formata a data usando map na coleção de itens da paginação
        $campanhas->getCollection()->transform(function ($campanha) {
            $campanha->dt_criacao = Helper::dataParaBrasil($campanha->created_at);
            return $campanha;
        });

        // Evita carregar todas as listas de contatos se não forem realmente necessárias
        $listas = ListaContato::select('id', 'nome')->get();

        return Inertia::render('Campanha/Index', [
            'campanhas' => $campanhas,
            'ordem' => $ordem,
            'status' => $status,
            'listas' => $listas,
            'pesquisar' => $pesquisar,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function envios($id, Request $request)
    {
        $pesquisar = $request->pesquisar ?? '';
        $status = $request->status ? ($request->status == 'all' ? '' : $request->status) : 'Enviada';
        $ordem = $request->ordem ?? 'updated_at';
        $ordemASC = $ordem == 'updated_at' ? 'desc' : 'asc';

        $campanha = Campanha::with('lista.contatos')->where('id', $id)->first();

        $envios = DB::table('disparo_contatos')
            ->select(
                'disparo_contatos.id',
                'disparo_contatos.contato_id',
                'disparo_contatos.updated_at',
                'status',
                'campanha_id',
                'contatos.name',
                'contatos.numero',
                'instancias.nome',
            )
            ->leftJoin('contatos','contatos.id','=','disparo_contatos.contato_id')
            ->leftJoin('instancias','instancias.id','=','disparo_contatos.instancia_id')
            ->where('campanha_id', $id)
            ->where('contatos.name', 'like', '%'.$pesquisar.'%')
            ->where('status', 'like', '%'.$status.'%')
            ->orderBy($ordem, $ordemASC)
            ->paginate();
        $envios->each(function ($lista) {
            $lista->dt_envio = Helper::dataTimeParaBrasil($lista->updated_at);
        });

        $total = DisparoContato::where('campanha_id', $id)
            ->selectRaw("
                COUNT(id) as contatos,
                COUNT(CASE WHEN status = 'Fila' THEN 1 END) as fila,
                COUNT(CASE WHEN status = 'Enviada' THEN 1 END) as enviada,
                COUNT(CASE WHEN status = 'Inválido' THEN 1 END) as invalido,
                COUNT(CASE WHEN status = 'Erro' THEN 1 END) as erro,
                COUNT(CASE WHEN status IN ('Erro', 'Inválido') THEN 1 END) as erro_invalido
            ")->first();

        // Busca todas as instâncias ativas no banco
        $instancias = Instancia::select('id', 'nome')
            ->where('empresa_id',1)
            ->where('conection','open')
            ->where('campanha','S')
            ->whereNull('cam_id')
            ->get();

        //dd($envios);
        return Inertia::render('Campanha/Envios', [
            'campanha' => $campanha,
            'envios' => $envios,
            'ordem' => $ordem,
            'total' => $total,
            'instancias' => $instancias,
            'status' => $request->status ?? 'all',
            'pesquisar' => $pesquisar
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $regras = [
            'nome' => 'required',
            'lista_contato_id' => 'required',
            't_inicial' => 'required',
            't_final' => 'required',
            'tempo_pausa' => 'required',
            'quat_pausa' => 'required',
        ];

        $feedback = [
            'required' => ':attribute é obrigatório!',
            'lista_contato_id.required' => 'É necessário selecionar uma lista!',
        ];

        $request->validate($regras, $feedback);

        $campanha = Campanha::create([
            'user_id' => auth()->user()->id,
            'nome' => $request->nome,
            'descricao' => $request->descricao,
            'lista_contato_id' => $request->lista_contato_id,
            't_inicial' => $request->t_inicial,
            't_final' => $request->t_final,
            'tempo_pausa' => $request->tempo_pausa,
            'quat_pausa' => $request->quat_pausa,
        ]);

        return redirect()->route('campanha.show', $campanha->id);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $campanha = Campanha::with('lista')->where('id', $id)->first();

        $total = DisparoContato::where('campanha_id', $id)
            ->selectRaw("
                COUNT(id) as contatos,
                COUNT(CASE WHEN status = 'Fila' THEN 1 END) as fila,
                COUNT(CASE WHEN status = 'Enviada' THEN 1 END) as enviada,
                COUNT(CASE WHEN status = 'Inválido' THEN 1 END) as invalido,
                COUNT(CASE WHEN status = 'Erro' THEN 1 END) as erro,
                COUNT(CASE WHEN status IN ('Erro', 'Inválido') THEN 1 END) as erro_invalido
            ")->first();

        return Inertia::render('Campanha/Show', [
            'campanha' => $campanha,
            'total' => $total,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Campanha $campanha)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function alterar(Request $request)
    {
        $regras = [
            'id' => 'required',
            'nome' => 'required',
            't_inicial' => 'required',
            't_final' => 'required',
            'tempo_pausa' => 'required',
            'quat_pausa' => 'required',
        ];

        $feedback = [
            'required' => ':attribute é obrigatório!',
            'lista_contato_id.required' => 'É necessário selecionar uma lista!',
        ];

        $request->validate($regras, $feedback);

        $campanha = Campanha::where('id', $request->id)->first();

        $campanha->update($request->all());

        return redirect()->route('campanha.show', $campanha->id);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Campanha $campanha)
    {
        // Validação dos dados
        $regras = [
            'content' => 'required',
        ];

        $feedback = [
            'required' => 'Por favor preencha o texto da mensagem!',
        ];

        $request->validate($regras, $feedback);

        $campanha->update([
            'content' => $request->input(['content']),
        ]);

        return redirect()->route('campanha.show', $campanha->id);
    }

    /**
     * Update the specified resource in storage.
     */
    public function import(Request $request)
    {
        // Validação dos dados
        $regras = [
            'file' => 'required|mimes:webp,jpeg,jpg,png,mp4|max:40240',
        ];

        $feedback = [
            'required' => 'Selecione um arquivo!',
            'mimes' => 'São permitido enviar arquivo nos formatos: jpeg, jpg, png, webp e mp4',
        ];

        $request->validate($regras, $feedback);

        $arquivo = $request->file('file');
        $path = 'messages/campanha';
        $filePath = Storage::disk('public')->put($path, $arquivo);

        $campanha = Campanha::where('id', $request->campanha_id)->first();

        if ($campanha->file_path){
            if(Storage::disk('public')->exists($campanha->file_path)){
                Storage::disk('public')->delete($campanha->file_path);
            }
        }

        $campanha->update([
            'type' => explode('/', $arquivo->getMimeType())[0] ?? null,
            'mimetype' => $arquivo->getMimeType() ?? null,
            'file_path' => $filePath,
        ]);

        return redirect()->route('campanha.show', $campanha->id);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $campanha = Campanha::where('id', $id)->first();
        $campanha->delete();

        return redirect()->route('campanha.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function removerMidia($id)
    {
        $campanha = Campanha::where('id', $id)->first();

        if ($campanha->file_path){
            if(Storage::disk('public')->exists($campanha->file_path)){
                Storage::disk('public')->delete($campanha->file_path);
            }
        }

        $campanha->update([
            'type' => null,
            'mimetype' => null,
            'file_path' => null,
        ]);

        return redirect()->route('campanha.show', $campanha->id);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function startDirect($id)
    {
        $campanha = Campanha::with('lista.contatos.contato')->findOrFail($id);

        $disparos = DisparoContato::where('campanha_id', $id)
            ->where('status', 'Válido')
            ->get();

        $delayTotal = 0;
        $counter = 0;

        foreach ($disparos as $disparo) {

            $delay = rand($disparo->campanha->t_inicial, $disparo->campanha->t_final);
            $counter++;

            if ($counter % $disparo->campanha->quat_pausa === 0) {
                $delayTotal += Helper::minutosParaSegundos($disparo->campanha->tempo_pausa);
            } else {
                $delayTotal += $delay;
            }
            $disparo->update(['status' => 'Fila']);

            $mediaUrl = null;
            $image = null;

            if ($disparo->campanha->file_path) {
                if (Storage::disk('public')->exists($disparo->campanha->file_path)) {
                    // Obtém o caminho físico correto do arquivo
                    $filePath = Storage::disk('public')->path($disparo->campanha->file_path);

                    // Lê o arquivo corretamente
                    $fileContent = file_get_contents($filePath);

                    // Converte para Base64 puro (sem prefixo)
                    $image = base64_encode($fileContent);

                    // Gera a URL pública do arquivo
                    $mediaUrl = Storage::disk('public')->url($disparo->campanha->file_path);
                } else {
                    Log::warning("Arquivo de mídia não encontrado: {$disparo->campanha->file_path}");
                }
            }

            if ($mediaUrl) {
                $dados = [
                    'number' => '55' . $disparo->contato->numero,
                    'caption' => $disparo->campanha->content,
                    'mediatype' => $disparo->campanha->type,
                    'mimetype' => $disparo->campanha->mimetype,
                    'media' => $image, // Agora com Base64 puro
                    'fileName' => "Imagem.png",
                ];
                $resposta = EvolutionDisparoApi::sendImage($dados, $id);
            } else {
                $dados = [
                    'number' => '55' . $disparo->contato->numero,
                    'text' => $disparo->campanha->content,
                ];
                $resposta = EvolutionDisparoApi::sendText($dados, $id);
            }

            $responseData = json_decode($resposta->getContent(), true);// Converte JSON para array

            if (isset($responseData['status']) && $responseData['status'] === 'PENDING') {
                $disparo->update([
                    'instancia_id' => $responseData['instancia_id'],
                    'status' => 'Enviada'
                ]);
            } else {
                Log::error('Erro no disparo:', ['dados' => $dados, 'resposta' => $responseData]);
                $disparo->update(['status' => 'Erro']);
            }

        }

        $campanha->update(['status' => 'Iniciada']);

        return redirect()->route('campanha.envios', $id);
    }
    public function start(Request $request)
    {
        // Validação dos dados
        $regras = [
            'instancias' => 'required',
        ];

        $feedback = [
            'required' => 'Selecione uma Instância!',
        ];

        $request->validate($regras, $feedback);

        $id = $request->campanha_id;

        // Define quais instâncias vão usar no disparo
        foreach ($request->instancias as $key => $instancia) {
            $i = Instancia::where('id', $key)->first();
            $i->update([
                'cam_id' => $id
            ]);
        }

        $numeros = [];
        $campanha = Campanha::with('lista.contatos.contato')->findOrFail($id);

        // Busca IDs de contatos já registrados em `DisparoContato` para a campanha
        $contatosExistentes = DisparoContato::where('campanha_id', $id)
            ->pluck('contato_id')
            ->toArray();

        // Processa contatos em chunks para evitar sobrecarregar a memória
        $contatosQuery = $campanha->lista->contatos()->with('contato');

        $contatosQuery->chunk(500, function ($contatos) use (&$numeros, $contatosExistentes) {
            foreach ($contatos as $contato) {
                if (!in_array($contato->contato->id, $contatosExistentes)) {
                    $numeroFormatado = '55' . preg_replace('/\D/', '', $contato->contato->numero);
                    if (strlen($numeroFormatado) === 13) { // Formato correto: 55 + DDD + Número
                        $numeros[] = $numeroFormatado;
                    }
                }
            }
        });

        // Divide os números em blocos de 500 e valida cada bloco
        $chunks = array_chunk($numeros, 500);
        foreach ($chunks as $chunk) {
            ValidaNumerosJob::dispatch($chunk, $id)
                ->onQueue('fila_valida_numeros')
                ->chain([
                    new ProcessCampaignJob($id),
                ]);
        }

        // Se não houver números para validar, processa diretamente
        if (empty($numeros)) {
            Log::info("Nenhum número foi enviado para validação");
            ProcessCampaignJob::dispatch($id)->onQueue('fila_campanha_' . $id);
        }

        $campanha->update(['status' => 'Iniciada']);

        return redirect()->route('campanha.envios', $id);
    }

    /**
     * Remove the specified resource from storage.
     */
    protected function validaNumeros($numeros, $campanhaId)
    {
        $dados = [
            'numbers' => $numeros,
        ];

        if (count($numeros) > 0 ){
            $api = EvolutionDisparoApi::validateWhatsApp($dados, $campanhaId);

            foreach ($api->getData() as $res){
                // trata status
                if ($res->exists){
                    $status = 'Fila';
                }else{
                    $status = 'Inválido';
                }

                // trata numero recebido
                $numero = substr($res->number, 2);

                // procura o contato
                $contato = Contato::where('numero', $numero)->first();

                DisparoContato::create([
                    'campanha_id' => $campanhaId,
                    'contato_id' => $contato->id,
                    'status' => $status
                ]);
            }
        }
    }

    /**
     * Processamento da Campanha.
     */
    protected function processCampaign($campanhaId)
    {
        // Busca os disparos com status 'Fila' para a campanha
        $disparos = DisparoContato::where('campanha_id', $campanhaId)
            ->where('status', 'Fila')
            ->get();

        $delayTotal = 0;
        $counter = 0;

        foreach ($disparos as $disparo) {
            // Define o delay individual entre t_inicial e t_final
            $delay = rand($disparo->campanha->t_inicial, $disparo->campanha->t_final);

            // Incrementa o contador de envios
            $counter++;

            // Adiciona um delay extra a cada 500 envios
            if ($counter % $disparo->campanha->quat_pausa === 0) {
                $delayTotal += Helper::minutosParaSegundos($disparo->campanha->tempo_pausa); // Adiciona 300 segundos (5 minutos)
            }else{
                // Incrementa o delay total
                $delayTotal += $delay;
            }

            ProcessarDisparo::dispatch($disparo, $delay)->onQueue('fila_campanha_'. $campanhaId)->delay(now()->addSeconds($delayTotal));
        }

        $campanha = Campanha::where('id', $campanhaId)->first();

        $campanha->update([
            'status' => 'Iniciada'
        ]);
    }

    /**
     * Para a Campanha.
     */
    public function stopCampaign($id)
    {
        // Atualiza o status da campanha para "Pausada"
        $campanha = Campanha::find($id);
        if (!$campanha) {
            return redirect()->route('campanha.index');
        }
        $campanha->status = 'Pausada';
        $campanha->save();

        $disparos = DisparoContato::where('campanha_id', $id)
            ->where('status', 'Fila')
            ->get();

        foreach ($disparos as $disparo){
            $disparo->update([
                'status' => 'Válido'
            ]);
        }

        $instancias = Instancia::where('cam_id', $id)->get();
        foreach ($instancias as $instancia) {
            $instancia->update([
                'cam_id' => null
            ]);
        }

        // Limpa todas as filas relacionadas à campanha
        Queue::clear('fila_campanha_' . $id); // Esta função remove todas as tarefas da fila

        // Remover a sessão.
        InstanciaService::limparFilaInstancias($id);

        return redirect()->route('campanha.envios', $id);
    }

    /**
     * Reenvia Erros.
     */
    public function errosRecall($id)
    {
        // Atualiza o status da campanha para "Pausada"
        $campanha = Campanha::find($id);
        if (!$campanha) {
            return redirect()->route('campanha.index');
        }

        $disparos = DisparoContato::where('campanha_id', $id)
            ->where('status', 'Erro')
            ->get();

        foreach ($disparos as $disparo){
            $disparo->update([
                'status' => 'Válido'
            ]);
        }

        // Coloca os disparos na fila
        // $this->processCampaign($id);
        // ProcessCampaignJob::dispatch($id)->onQueue('fila_campanha_' . $id);

        if ($campanha->status != 'Iniciada'){
            $campanha->update(['status' => 'Pausada']);
        }

        return redirect()->route('campanha.envios', $id);
    }

    /**
     * Verifica status da Campanha.
     */
    public function getStatus($id)
    {
        $status = DisparoContato::where('campanha_id', $id)
            ->select('contato_id', 'status', 'updated_at')
            ->get();

        return response()->json($status);
    }

    /**
     * Duplica a Campanha.
     */
    public function duplicar($id)
    {
        $campanha = Campanha::find($id);
        $campanha->nome = "Cópia - " . $campanha->nome;
        $campanha->status = "Aguardando";

        $newCampanha = Campanha::create($campanha->getAttributes());

        return redirect()->route('campanha.show', $newCampanha->id);
    }

    /**
     * Duplica a Campanha.
     */
    public function reenviar($id)
    {
        $campanha = Campanha::find($id);
        $campanha->nome = "Reenvio - " . $campanha->nome;
        $campanha->status = "Aguardando";

        $newCampanha = Campanha::create($campanha->getAttributes());

        return redirect()->route('campanha.envios', $newCampanha->id);
    }

}
