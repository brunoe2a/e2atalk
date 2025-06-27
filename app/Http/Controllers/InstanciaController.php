<?php

namespace App\Http\Controllers;

use App\Helpers\EvolutionApi;
use App\Helpers\Helper;
use App\Models\Empresa;
use App\Models\Instancia;
use App\Service\InstanciaService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class InstanciaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $checkAtendimento = false;

        $instancias = Instancia::with('empresa')->get();
        $instancias->each(function ($instancia) use (&$checkAtendimento) {
            $instancia->dt_criacao = Helper::dataParaBrasil($instancia->created_at);

            // Se encontrar pelo menos um 'S', define como true
            if ($instancia->atendimento == 'S') {
                $checkAtendimento = true;
            }

            $response = EvolutionApi::fetchInstances($instancia->instancia, $instancia->apikey);
            $instancia->conection = $response->getData()[0];
            InstanciaService::atualizaConectionInstancia($instancia->id, $instancia->conection->connectionStatus);
        });

        /*$instancia = Instancia::where('id', 3)->first();
        $response = EvolutionApi::fetchInstances($instancia->instancia, $instancia->apikey);

        dd($response->getData()[0]);*/

        $empresas = Empresa::all();
        return Inertia::render('Instancia/Index', [
            'instancias' => $instancias,
            'checkAtendimento' => $checkAtendimento,
            'empresas' => $empresas
        ]);
    }

    /**
     * Abre qrcode para conexão.
     */
    public function connect($id)
    {
        $instancia = Instancia::where('id', $id)->first();
        $response = EvolutionApi::connect($instancia->instancia, $instancia->apikey);

        return response()->json([
            'qrcode' => $response->getData()->base64 ?? asset('assets/imagens/conectado.png')
        ]);
    }

    /**
     * Abre qrcode para conexão.
     */
    public function conection($id)
    {
        $instancia = Instancia::where('id', $id)->first();
        $response = EvolutionApi::connect($instancia->instancia, $instancia->apikey);

        return Inertia::render('Instancia/Conection', [
            'instancia' => $instancia,
            'qrcode' => $response->getData()->base64 ?? asset('assets/imagens/conectado.png')
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
        // VALIDAÇÃO DO FORMULÁRIO
        $regras = [
            'instancia' => 'required',
            'empresa_id' => 'required',
        ];

        $feedback = [
            'unique' => ':attribute cadastrado!',
            'required' => ':attribute é obrigatório!',
        ];

        $request->validate($regras, $feedback);

        $instacia_name = $request['empresa_id'].'-'.uniqid();

        if ($request['atendimento']){
            $dados = [
                'instanceName' => $instacia_name,
                'integration' => 'WHATSAPP-BAILEYS',
                "webhook" => [
                    "url" => "https://ia-n8n.1bcgyp.easypanel.host/webhook/65b3e698-fe16-450b-827d-de96751ae30e",
                    "byEvents" => false,
                    "base64" => true,
                    "headers" => [
                        "autorization" => "Bearer 6435128649139HJKBITKJKJGHD2158",
                        "Content-Type" => "application/json"
                    ],
                    "events" => [
                        // "APPLICATION_STARTUP",
                        // "QRCODE_UPDATED",
                        // "MESSAGES_SET",
                        "MESSAGES_UPSERT",
                        // "MESSAGES_UPDATE",
                        // "MESSAGES_DELETE",
                        // "SEND_MESSAGE",
                        // "CONTACTS_SET",
                        // "CONTACTS_UPSERT",
                        // "CONTACTS_UPDATE",
                        // "PRESENCE_UPDATE",
                        // "CHATS_SET",
                        // "CHATS_UPSERT",
                        // "CHATS_UPDATE",
                        // "CHATS_DELETE",
                        // "GROUPS_UPSERT",
                        // "GROUP_UPDATE",
                        // "GROUP_PARTICIPANTS_UPDATE",
                        // "CONNECTION_UPDATE",
                        // "LABELS_EDIT",
                        // "LABELS_ASSOCIATION",
                        // "CALL",
                        // "TYPEBOT_START",
                        // "TYPEBOT_CHANGE_STATUS"
                    ]
                ]
            ];
        }else{
            $dados = [
                'instanceName' => $instacia_name,
                'integration' => 'WHATSAPP-BAILEYS'
            ];
        }
        $response = EvolutionApi::createInstances($dados);

        if ($response->getData()->instance->instanceId){
            $i = Instancia::onlyTrashed()->where('instancia', $instacia_name)->first();
            if ($i){
                $i->restore();
                $i->update([
                    'instancia' => $response->getData()->instance->instanceName,
                    'apikey' => $response->getData()->hash,
                    'nome' => mb_strtoupper($request['instancia']),
                    'campanha' => $request['campanha'] ? 'S' :'N',
                    'atendimento' => $request['atendimento'] ? 'S' :'N'
                ]);
            }else{
                Instancia::create([
                    'instancia' => $response->getData()->instance->instanceName,
                    'apikey' => $response->getData()->hash,
                    'nome' => mb_strtoupper($request['instancia']),
                    'empresa_id' => $request['empresa_id'],
                    'campanha' => $request['campanha'] ? 'S' :'N',
                    'atendimento' => $request['atendimento'] ? 'S' :'N'
                ]);
            }
        }

        return redirect()->route('instancia.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Instancia $instancia)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Instancia $instancia)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Instancia $instancia)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $instancia = Instancia::where('id', $id)->first();
        $response = EvolutionApi::deleteInstance($instancia->instancia);

        if ($response->getData()->status === 'SUCCESS'){
            $instancia->delete();

            $message = [
                'tipo' => 'success',
                'texto' => 'Instância '.$instancia->instancia.' foi deletada com sucesso!',
            ];
        }else{
            $message = [
                'tipo' => 'warning',
                'texto' => 'Não foi possivel excluir instância! Tente novamente, se o problema persistir entre em contato com o suporte técnico.',
            ];
        }

        return redirect()->route('instancia.index')->with('message', $message);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function logout($id)
    {
        $instancia = Instancia::where('id', $id)->first();
        EvolutionApi::logoutInstance($instancia->instancia);

        return redirect()->route('instancia.index');
    }
}
