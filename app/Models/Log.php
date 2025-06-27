<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Log extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'user_id',
        'modulo_id',
        'acao',
        'section_app',
        'antes',
        'depois'
    ];
}
