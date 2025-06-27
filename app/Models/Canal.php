<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class Canal extends Model
{
    use SoftDeletes;

    protected $table = 'canais';

    protected $fillable = [
        'nome',
        'descricao',
        'modulo_id'
    ];

    /**
     * Relação com a tabela função.
     */
    public function funcoes(): HasMany
    {
        return $this->hasMany(Funcao::class);
    }

    /**
     * Relação com a tabela Integrantes.
     */
    public function integrantes(): HasMany
    {
        return $this->hasMany(IntegranteCanal::class);
    }
}
