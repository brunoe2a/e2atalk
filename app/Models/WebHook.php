<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class WebHook extends Model
{
    protected $fillable = [
        'content',
        'endpoint',
        'created_at',
        'updated_at'
    ];
}
