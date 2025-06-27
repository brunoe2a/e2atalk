<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Carbon;

class DisparoContato extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'campanha_id',
        'contato_id',
        'instancia_id',
        'status'
    ];

    protected $appends = ['dt_envio'];

    /**
     * Relação com a tabela contato.
     */
    public function contato() {
        return $this->belongsTo(Contato::class, 'contato_id');
    }

    /**
     * Relação com a tabela campanha.
     */
    public function campanha() {
        return $this->belongsTo(Campanha::class, 'campanha_id');
    }

    /**
     * Relação com a tabela instância.
     */
    public function instancia() {
        return $this->belongsTo(Instancia::class, 'instancia_id');
    }

    /**
     * Adicona o dt_criacao.
     */
    public function getDtEnvioAttribute()
    {
        return $this->updated_at ? Carbon::parse($this->updated_at)->format('d/m/Y H:i') : null;
    }
}
