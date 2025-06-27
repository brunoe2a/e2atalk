<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class Contato extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'name',
        'numero',
        'numero_api',
        'email',
        'conversation_id',
        'descadastrado',
        'whatsapp',
        'bot_ativo',
        'lista_contato_id',
        'user_id',
        'empresa_id',
        'modulo_id'
    ];

    /**
     * Relação com a tabela lista.
     */
    public function lista(): BelongsTo
    {
        return $this->belongsTo(ListaContato::class);
    }

    /**
     * Relação com a tabela lista.
     */
    public function listas(): HasMany
    {
        return $this->hasMany(ListaContato::class);
    }
}
