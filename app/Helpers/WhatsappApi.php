<?php

namespace App\Helpers;

use App\Models\Contato;
use App\Models\Message;
use App\Models\SessaoAtendimento;
use Illuminate\Support\Facades\Http;

class WhatsappApi
{
    /**
     * Retorna o Token de Autenticação.
     * @return string
     */
    protected static function token():string
    {
        return 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2dhdGV3YXkuYXBpYnJhc2lsLmlvL2FwaS92Mi9sb2dpbiIsImlhdCI6MTcyNzQ5NDk3NywiZXhwIjoxNzU5MDMwOTc3LCJuYmYiOjE3Mjc0OTQ5NzcsImp0aSI6IlBOV3VQcFdhVEpMNzNnZW0iLCJzdWIiOiIxMTUxMyIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.K9ai9lJyo5RZQxRGGrSQJ0YlUIVbskJtF-N933Ao-M8';
    }

    /**
     * Retorna o Device Token de Autenticação.
     * @return string
     */
    protected static function deviceToken():string
    {
        return '35adc35d-094c-4faa-ac3f-e1e13dc6a066';
    }

    /**
     * Converts the mysql database datetime to Brazilian format.
     * @return object
     */
    public static function getAllNewMessages():object
    {
        $response = Http::withHeaders([
            'Content-Type' => 'application/json',
            'DeviceToken' => self::deviceToken(),
            'Authorization' => 'Bearer ' . self::token(),
        ])->post('https://gateway.apibrasil.io/api/v2/whatsapp/getAllNewMessages');

        return response()->json($response->json());
    }

    /**
     * Converts the mysql database datetime to Brazilian format.
     * @param $dados
     * @return object
     */
    public static function sendText($dados):object
    {
        $response = Http::withHeaders([
            'Content-Type' => 'application/json',
            'DeviceToken' => self::deviceToken(),
            'Authorization' => 'Bearer ' . self::token(),
        ])->post('https://gateway.apibrasil.io/api/v2/whatsapp/sendText', $dados);

        return response()->json($response->json());
    }

    /**
     * Converts the mysql database datetime to Brazilian format.
     * @param $dados
     * @return object
     */
    public static function sendFile64($dados):object
    {
        $response = Http::withHeaders([
            'Content-Type' => 'application/json',
            'DeviceToken' => self::deviceToken(),
            'Authorization' => 'Bearer ' . self::token(),
        ])->post('https://gateway.apibrasil.io/api/v2/whatsapp/sendFile64', $dados);

        return response()->json($response->json());
    }

    /**
     * Converts the mysql database datetime to Brazilian format.
     * @param $dados
     * @return object
     */
    public static function sendAudio($dados):object
    {
        $response = Http::withHeaders([
            'Content-Type' => 'application/json',
            'DeviceToken' => self::deviceToken(),
            'Authorization' => 'Bearer ' . self::token(),
        ])->post('https://gateway.apibrasil.io/api/v2/whatsapp/sendAudio', $dados);

        return response()->json($response->json());
    }

    /**
     * Converts the mysql database datetime to Brazilian format.
     * @param $numero
     * @param $count
     * @return object
     */
    public static function getMessagesChat($numero, $count):object
    {
        $dados = [
            'number' => '55'.$numero,
            'direction' => 'before',
            'count' => $count,
        ];

        $response = Http::withHeaders([
            'Content-Type' => 'application/json',
            'DeviceToken' => self::deviceToken(),
            'Authorization' => 'Bearer ' . self::token(),
        ])->post('https://gateway.apibrasil.io/api/v2/whatsapp/getMessagesChat', $dados);

        return response()->json($response->json());
    }

    /**
     * Abre a sessão de novos atendimentos.
     */
    public static function getNewServices()
    {
        $new = self::getAllNewMessages();

        // dd($new->getData()->response->contacts[0]);
        Foreach($new->getData()->response->contacts as $m){
            /** Verifica se a mensagem ja esta registrada no sistema */
            $msg = Message::where('whatsapp_id', $m->id)->first();

            if (!$m->fromMe){
                /** Trata o numero Recebido */
                $from = explode("@", $m->from);
                $ddd = substr($from[0], 2, 2);
                $numero = $ddd.'9'.substr($from[0], 4);

                /** Verifica se tem registro do contato */
                $contato = Contato::where('numero', $numero)->first();
                if (!$contato){
                    $contato = Contato::create([
                        'name' => $m->sender->name ?? $m->notifyName,
                        'numero' => $numero,
                        'user_id' => auth()->id(),
                    ]);
                }

                /** Registra as novas mensagens no sistema */
                if (!$msg){

                    $sessao = SessaoAtendimento::create([
                        'contato_id' => $contato->id,
                        'user_id' => auth()->id(),
                        'protocolo' => Helper::protocolo('WA'),
                        'status' => 'Aguardando',
                    ]);

                    if (isset($m->body) || isset($m->content)){
                        Message::create([
                            'user_id' => auth()->id(),
                            'content' => $m->body ?? $m->content,
                            'contato_id' => $contato->id,
                            'whatsapp_id' => $m->id,
                            'sessao_atendimento_id' => $sessao->id,
                            'fluxo' => 'Entrada',
                        ]);
                    }
                }
            }
        }
    }
}
