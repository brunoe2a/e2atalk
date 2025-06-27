<?php

namespace App\Service;

use Illuminate\Support\Facades\Session;
use App\Models\Instancia;

class InstanciaServiceOld
{
    protected static $sessionKey = 'fila_instancias';
    protected static $indiceSessionKey = 'indice_instancia';

    public static function obterProximaInstancia($cam_id): ?array
    {
        // Recupera a lista da sessão ou carrega do banco caso não exista
        $instancias = Session::get(self::$sessionKey);

        if (!$instancias) {
            $instancias = self::carregarInstanciasNaSession($cam_id);
        }

        // Se não houver instâncias, retorna null
        if (empty($instancias)) {
            return null;
        }

        // Obtém o índice atual da sessão ou define como 0
        $indiceAtual = Session::get(self::$indiceSessionKey, 0);

        // Obtém a instância atual baseada no índice
        $instanciaAtual = $instancias[$indiceAtual];

        // Calcula o próximo índice e atualiza na sessão
        $proximoIndice = ($indiceAtual + 1) % count($instancias);
        Session::put(self::$indiceSessionKey, $proximoIndice);

        return $instanciaAtual;
    }

    public static function carregarInstanciasNaSession($cam_id): array
    {
        // Busca todas as instâncias ativas no banco
        $instancias = Instancia::select('id', 'instancia', 'apikey')
            ->where('empresa_id',1)
            ->where('conection','open')
            ->where('campanha','S')
            ->where('cam_id', $cam_id)
            ->get()
            ->toArray();

        // Salva na sessão apenas se houver instâncias
        if (!empty($instancias)) {
            Session::put(self::$sessionKey, $instancias);
            Session::put(self::$indiceSessionKey, 0);
        }

        return $instancias;
    }

    public static function atualizaConectionInstancia($id, $status)
    {
        $instancia = Instancia::select('id', 'conection')->where('id',$id)->first();
        $instancia->update([
            'conection' => $status
        ]);
    }

}
