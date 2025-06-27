<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class SessaoAtendimento extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'contato_id',
        'user_id',
        'protocolo',
        'status',
        'new_chat'
    ];

    /**
     * Relação com a tabela canal.
     */
    public function contato(): BelongsTo
    {
        return $this->belongsTo(Contato::class);
    }
}
