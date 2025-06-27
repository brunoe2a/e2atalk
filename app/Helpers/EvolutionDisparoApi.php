<?php

namespace App\Helpers;

use App\Service\InstanciaService;
use Illuminate\Support\Facades\Http;

class EvolutionDisparoApi
{
    /**
     * Converts the mysql database datetime to Brazilian format.
     * @param $dados
     * @return object
     */
    public static function sendText($dados, $campanha_id):object
    {
        $instancia = InstanciaService::obterProximaInstancia($campanha_id);

        $response = Http::withHeaders([
            'Content-Type' => 'application/json',
            'apikey' => $instancia['apikey'],
        ])->post('https://evolution.e2atalk.com/message/sendText/'.$instancia['instancia'] , $dados);

        // Adicionando informações ao retorno
        $responseData = $response->json(); // Obtém o JSON original da resposta
        $additionalData = [
            'status_code' => $response->status(),
            'instancia_id' => $instancia['id'],
            'instancia_nome' => $instancia['nome']
        ];

        return response()->json(array_merge($responseData, $additionalData));
    }

    /**
     * Converts the mysql database datetime to Brazilian format.
     * @param $dados
     * @return object
     */
    public static function sendAudio($dados, $campanha_id):object
    {
        $instancia = InstanciaService::obterProximaInstancia($campanha_id);

        $response = Http::withHeaders([
            'Content-Type' => 'application/json',
            'apikey' => $instancia['apikey'],
        ])->post('https://evolution.e2atalk.com/message/sendWhatsAppAudio/'.$instancia['instancia'], $dados);

        // Adicionando informações ao retorno
        $responseData = $response->json(); // Obtém o JSON original da resposta
        $additionalData = [
            'status_code' => $response->status(),
            'instancia_id' => $instancia['id']
        ];

        return response()->json(array_merge($responseData, $additionalData));
    }

    /**
     * Converts the mysql database datetime to Brazilian format.
     * @param $dados
     * @return object
     */
    public static function sendImage($dados, $campanha_id):object
    {
        $instancia = InstanciaService::obterProximaInstancia($campanha_id);

        if (!$instancia) {
            return response()->json([
                'error' => 'Nenhuma instância disponível',
                'status_code' => 500
            ], 500);
        }

        $response = Http::withHeaders([
            'Content-Type' => 'application/json',
            'apikey' => $instancia['apikey'],
        ])->post('https://evolution.e2atalk.com/message/sendMedia/'.$instancia['instancia'], $dados);

        // Adicionando informações ao retorno
        $responseData = $response->json(); // Obtém o JSON original da resposta
        $additionalData = [
            'status_code' => $response->status(),
            'instancia_id' => $instancia['id']
        ];

        return response()->json(array_merge($responseData, $additionalData));
    }

    /**
     * Converts the mysql database datetime to Brazilian format.
     * @param $dados
     * @return object
     */
    public static function sendFile($dados, $campanha_id):object
    {
        $instancia = InstanciaService::obterProximaInstancia($campanha_id);

        $response = Http::withHeaders([
            'Content-Type' => 'application/json',
            'apikey' => $instancia['apikey'],
        ])->post('https://evolution.e2atalk.com/message/sendMedia/'.$instancia['instancia'], $dados);

        // Adicionando informações ao retorno
        $responseData = $response->json(); // Obtém o JSON original da resposta
        $additionalData = [
            'status_code' => $response->status(),
            'instancia_id' => $instancia['id']
        ];

        return response()->json(array_merge($responseData, $additionalData));
    }

    /**
     * Verifica se o número tem Whatsapp.
     * @param $dados
     * @return object
     */
    public static function validateWhatsApp($dados, $campanha_id): object
    {
        $instancia = InstanciaService::obterProximaInstancia($campanha_id);

        $response = Http::withHeaders([
            'Content-Type' => 'application/json',
            'apikey' => $instancia['apikey'],
        ])->timeout(60)->post('https://evolution.e2atalk.com/chat/whatsappNumbers/'.$instancia['instancia'], $dados);

        return response()->json($response->json());
    }

}
