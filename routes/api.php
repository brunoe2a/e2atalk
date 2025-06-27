<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

/**
 * Rotas Webhooks.
 */
Route::post('/webhook/messages', [\App\Http\Controllers\WebHookController::class, 'handleMessages'])->name('webhook.messages');
Route::post('/webhook/messages/maytapi', [\App\Http\Controllers\WebHookController::class, 'handleMessagesMaytapi'])->name('webhook.messages.maytapi');
Route::post('/webhook/messages/evolution', [\App\Http\Controllers\WebHookController::class, 'handleMessagesEvolutioApi'])->name('webhook.messages.evolution');
Route::post('/webhook/status/conexao', [\App\Http\Controllers\WebHookController::class, 'handleStatusConexao'])->name('webhook.status.conexao');
Route::post('/webhook/status/dispositivo', [\App\Http\Controllers\WebHookController::class, 'handleStatusDispositivo'])->name('webhook.status.dispositivo');
