<?php

namespace App\Models;

use App\Helpers\Helper;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Carbon;

class ListaContato extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'nome',
        'descricao',
        'user_id',
        'modulo_id'
    ];

    protected $appends = ['dt_criacao'];

    /**
     * Relação com a tabela contato.
     */
    public function contatos(): HasMany
    {
        return $this->hasMany(ContatosLista::class);
    }

    /**
     * Relação com a tabela contato.
     */
    public function campanhas(): HasMany
    {
        return $this->hasMany(Campanha::class);
    }

    /**
     * Adicona o dt_criacao.
     */
    public function getDtCriacaoAttribute()
    {
        // return $this->created_at ? Carbon::parse($this->created_at)->format('d/m/Y H:i') : null;
        return Helper::dataParaBrasil($this->created_at);
    }

}
