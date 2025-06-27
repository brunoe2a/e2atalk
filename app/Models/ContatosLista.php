<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class ContatosLista extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'lista_contato_id',
        'contato_id'
    ];



    /**
     * Relação com a tabela canal.
     */
    public function contato(): BelongsTo
    {
        return $this->belongsTo(Contato::class);
    }
}
