<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class Campanha extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'nome',
        'descricao',
        'lista_contato_id',
        'user_id',
        'modulo_id',
        'status',
        't_inicial',
        't_final',
        'tempo_pausa',
        'quat_pausa',
        'content',
        'type',
        'mimetype',
        'file_path'
    ];

    /**
     * Relação com a tabela contato.
     */
    public function contatos(): HasMany
    {
        return $this->hasMany(DisparoContato::class);
    }

    /**
     * Relação com a tabela Lista.
     */
    public function lista() {
        return $this->hasOne('App\Models\ListaContato', 'id', 'lista_contato_id');
    }

    /**
     * Relação com a tabela Condatos de Disparo.
     */
    public function disparos() {
        return $this->hasMany('App\Models\DisparoContato', 'campanha_id', 'id');
    }
}
