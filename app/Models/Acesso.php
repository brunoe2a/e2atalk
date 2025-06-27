<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\SoftDeletes;

class Acesso extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'user_id',
        'modulo_id',
        'index',
        'create',
        'edit',
        'delete'
    ];

    /**
     * Relacionamento com a tabela módulo.
     */
    public function modulo(): HasOne
    {
        return $this->hasOne(Modulo::class);
    }
}
