<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class IntegranteCanal extends Model
{
    use SoftDeletes;

    protected $table = 'integrantes_canal';

    protected $fillable = [
        'user_id',
        'canal_id',
        'funcao_id',
        'modulo_id'
    ];

    /**
     * Relação com a tabela canal.
     */
    public function canal(): BelongsTo
    {
        return $this->belongsTo(Canal::class);
    }

    /**
     * Relação com a tabela canal.
     */
    public function funcao(): BelongsTo
    {
        return $this->belongsTo(Funcao::class);
    }
}
