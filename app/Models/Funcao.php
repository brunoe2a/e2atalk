<?php

namespace App\Models;

use App\Models\Canal;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Funcao extends Model
{
    use SoftDeletes;

    protected $table = 'funcoes';

    protected $fillable = [
        'nome',
        'descricao',
        'canal_id',
        'modulo_id'
    ];

    /**
     * Relação com a tabela canal.
     */
    public function canal(): BelongsTo
    {
        return $this->belongsTo(Canal::class);
    }
}
