<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class Instancia extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'instancia',
        'apikey',
        'instanceId',
        'nome',
        'conection',
        'campanha',
        'atendimento',
        'empresa_id',
        'cam_id',
        'modulo_id'
    ];

    /**
     * Relação com a tabela empresa.
     */
    public function empresa(): BelongsTo
    {
        return $this->belongsTo(Empresa::class);
    }
}
