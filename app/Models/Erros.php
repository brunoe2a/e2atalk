<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Carbon;

class Erros extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'erro',
        'user_id',
        'modulo_id',
        'message_id',
        'campanha_id',
        'instancia_id',
        'contato_id',
        'fluxo',
    ];

    protected $appends = ['dt_criacao'];

    /**
     * Relação com a tabela campanha.
     */
    public function campanha() {
        return $this->belongsTo(Campanha::class, 'campanha_id');
    }

    /**
     * Relação com a tabela contato.
     */
    public function contato() {
        return $this->belongsTo(Contato::class, 'contato_id');
    }

    /**
     * Relação com a tabela instância.
     */
    public function instancia() {
        return $this->belongsTo(Instancia::class, 'instancia_id');
    }

    /**
     * Relação com a tabela message.
     */
    public function message() {
        return $this->belongsTo(Message::class, 'message_id');
    }

    /**
     * Adicona o dt_criacao.
     */
    public function getDtCriacaoAttribute()
    {
        return $this->created_at ? Carbon::parse($this->created_at)->format('d/m/Y H:i') : null;
    }
}
