<?php

namespace App\Helpers;

use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Session;

class EvolutionApi
{
    /**
     * Retorna o Token de Autenticação.
     * @return string
     */
    protected static function token():string
    {
        return 'A6D81468DAAA-4DEB-8EAD-A09491D4C3B6';
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
            'apikey' => self::token(),
        ])->post('https://evolution.e2atalk.com/message/sendText/e2a-solucoes-digitais', $dados);

        return response()->json($response->json());
    }

    /**
     * Converts the mysql database datetime to Brazilian format.
     * @param $dados
     * @return object
     */
    public static function sendAlert($instancia, $erro):object
    {
        $dados = [
            'number' => '556596449987@s.whatsapp.net',
            'text' => "🚨⚠️ Alerta na instancia: *".$instancia."*\n❌ Erro: *".$erro.".*",
            'time_typing' => 0,
        ];
        $response = Http::withHeaders([
            'Content-Type' => 'application/json',
            'apikey' => 'A6D81468DAAA-4DEB-8EAD-A09491D4C3B6',
        ])->post('https://evolution.e2atalk.com/message/sendText/e2a-solucoes-digitais', $dados);

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
            'apikey' => self::token(),
        ])->post('https://evolution.e2atalk.com/message/sendWhatsAppAudio/e2a-solucoes-digitais', $dados);

        return response()->json($response->json());
    }

    /**
     * Converts the mysql database datetime to Brazilian format.
     * @param $dados
     * @return object
     */
    public static function sendImage($dados):object
    {
        $response = Http::withHeaders([
            'Content-Type' => 'application/json',
            'apikey' => self::token(),
        ])->post('https://evolution.e2atalk.com/message/sendMedia/e2a-solucoes-digitais', $dados);

        return response()->json($response->json());
    }

    /**
     * Converts the mysql database datetime to Brazilian format.
     * @param $dados
     * @return object
     */
    public static function sendFile($dados):object
    {
        $response = Http::withHeaders([
            'Content-Type' => 'application/json',
            'apikey' => self::token(),
        ])->post('https://evolution.e2atalk.com/message/sendMedia/e2a-solucoes-digitais', $dados);

        return response()->json($response->json());
    }

    /**
     * Verifica se o número tem Whatsapp.
     * @param $dados
     * @return object
     */
    public static function validateWhatsApp($dados): object
    {
        $response = Http::withHeaders([
            'Content-Type' => 'application/json',
            'apikey' => self::token(),
        ])->post('https://evolution.e2atalk.com/chat/whatsappNumbers/e2a-solucoes-digitais', $dados);

        return response()->json($response->json());
    }

    /**
     * Verifica status instância.
     * @param $instancia
     * @return object
     */
    public static function deleteInstance($instancia): object
    {
        $response = Http::withHeaders([
            'Content-Type' => 'application/json',
            'apikey' => '6435128649139HJKBITKJKJGHD2158',
        ])->delete('https://evolution.e2atalk.com/instance/delete/'.$instancia);

        return response()->json($response->json());
    }

    /**
     * Verifica status instância.
     * @param $instancia
     * @return object
     */
    public static function logoutInstance($instancia): object
    {
        $response = Http::withHeaders([
            'Content-Type' => 'application/json',
            'apikey' => '6435128649139HJKBITKJKJGHD2158',
        ])->delete('https://evolution.e2atalk.com/instance/logout/'.$instancia);

        return response()->json($response->json());
    }

    /**
     * Verifica status instância.
     * @param $instancia
     * @param $apiKey
     * @return object
     */
    public static function connectionState($instancia, $apiKey): object
    {
        $response = Http::withHeaders([
            'Content-Type' => 'application/json',
            'apikey' => $apiKey,
        ])->get('https://evolution.e2atalk.com/instance/connectionState/'.$instancia);

        return response()->json($response->json());
    }

    /**
     * Busca dados da instância.
     * @param $instancia
     * @param $apiKey
     * @return object
     */
    public static function fetchInstances($instancia, $apiKey): object
    {
        $response = Http::withHeaders([
            'Content-Type' => 'application/json',
            'apikey' => $apiKey,
        ])->get('https://evolution.e2atalk.com/instance/fetchInstances');

        return response()->json($response->json());
    }

    /**
     * Verifica status instância.
     * @param $dados
     * @return object
     */
    public static function createInstances($dados): object
    {
        $response = Http::withHeaders([
            'Content-Type' => 'application/json',
            'apikey' => '6435128649139HJKBITKJKJGHD2158',
        ])->post('https://evolution.e2atalk.com/instance/create', $dados);

        return response()->json($response->json());
    }

    /**
     * Verifica status instância.
     * @param $instancia
     * @param $apiKey
     * @return object
     */
    public static function connect($instancia, $apiKey): object
    {
        $response = Http::withHeaders([
            'Content-Type' => 'application/json',
            'apikey' => $apiKey,
        ])->get('https://evolution.e2atalk.com/instance/connect/'.$instancia);

        return response()->json($response->json());
    }

}
