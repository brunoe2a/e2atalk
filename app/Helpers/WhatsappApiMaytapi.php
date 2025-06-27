<?php

namespace App\Helpers;

use App\Models\Contato;
use App\Models\Message;
use App\Models\SessaoAtendimento;
use Illuminate\Support\Facades\Http;

class WhatsappApiMaytapi
{
    /**
     * Retorna o Token de Autenticação.
     * @return string
     */
    protected static function token():string
    {
        return '4b053974-92da-4f9f-b748-be360d7a0a71';
    }

    /**
     * Retorna o Device Token de Autenticação.
     * @return string
     */
    protected static function productID():string
    {
        return 'b5490cd8-111c-4724-877b-4deb1efe2e59';
    }

    /**
     * Converts the mysql database datetime to Brazilian format.
     * @param $dados
     * @return object
     */
    public static function sendText($dados):object
    {
        $message = [
            'to_number' => '55'.$dados['number'],
            'type' => 'text',
            'message' => $dados['text'],
        ];
        $response = Http::withHeaders([
            'Content-Type' => 'application/json',
            'x-maytapi-key' => self::token(),
        ])->post('https://api.maytapi.com/api/'.self::productID().'/58810/sendMessage', $message);

        return response()->json($response->json());
    }


}
