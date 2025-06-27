<?php

namespace App\Service;

use App\Models\Instancia;
use Illuminate\Support\Facades\Cache;

class InstanciaService
{
    public static function obterProximaInstancia($cam_id): ?array
    {
        $cacheKey = "fila_instancias_{$cam_id}";
        $indiceKey = "indice_instancia_{$cam_id}";

        $instancias = Cache::get($cacheKey);

        if (!$instancias) {
            $instancias = self::carregarInstanciasNoCache($cam_id);
        }

        if (empty($instancias)) {
            return null;
        }

        $indiceAtual = Cache::get($indiceKey, 0);

        $instanciaAtual = $instancias[$indiceAtual];

        $proximoIndice = ($indiceAtual + 1) % count($instancias);
        Cache::put($indiceKey, $proximoIndice);

        return $instanciaAtual;
    }

    public static function carregarInstanciasNoCache($cam_id): array
    {
        $instancias = Instancia::select('id', 'nome' ,'instancia', 'apikey')
            ->where('empresa_id',1)
            ->where('conection','open')
            ->where('campanha','S')
            ->where('cam_id', $cam_id)
            ->get()
            ->toArray();

        if (!empty($instancias)) {
            Cache::put("fila_instancias_{$cam_id}", $instancias, now()->addMinutes(60));
            Cache::put("indice_instancia_{$cam_id}", 0, now()->addMinutes(60));
        }

        return $instancias;
    }

    public static function limparFilaInstancias($cam_id)
    {
        Cache::forget("fila_instancias_{$cam_id}");
        Cache::forget("indice_instancia_{$cam_id}");
    }

    public static function atualizaConectionInstancia($id, $status)
    {
        $instancia = Instancia::find($id);
        if ($instancia) {
            $instancia->update(['conection' => $status]);
        }
    }
}
