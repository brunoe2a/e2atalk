<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class Message extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'contato_id',
        'user_id',
        'fluxo',
        'content',
        'caption',
        'from',
        'to',
        'type',
        'mimetype',
        'file_path',
        'whatsapp_id',
        'sessao_atendimento_id',
        'status',
        'created_at',
        'updated_at'
    ];

    /**
     * Relação com a tabela canal.
     */
    public function contato(): BelongsTo
    {
        return $this->belongsTo(Contato::class);
    }
}
