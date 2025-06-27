<?php

use App\Service\InstanciaService;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Redis;
use Inertia\Inertia;

Route::get('/', function () {
    /*return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);*/
    return redirect()->route('dashboard');
});

/** Rota publica de conexão do whatsapp. */
Route::get('/conectar/whatsapp/{id}', [\App\Http\Controllers\InstanciaController::class, 'conection'])->name('instancia.conection');

Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    /**
     * Rotas sessão de dashboard.
     */
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');

    /**
     * Testando fila instancias.
     */
    Route::get('/teste-fila-instancia', function () {
        for ($i = 0; $i < 5; $i++) {
            $instancia = InstanciaService::obterProximaInstancia();
            print_r($instancia);
            echo "\n";
        }
    });
    /**
     * Ver fila instancias.
     */
    Route::get('/ver-fila-instancia', function () {
        $instancias = \Illuminate\Support\Facades\Session::get('fila_instancias');
        return response()->json($instancias);
    });
    /**
     * Deletar fila instancias.
     */
    Route::get('/del-fila-instancia', function () {
        Redis::del('fila_instancias');
        $instancias = Redis::lrange('fila_instancias', 0, -1);
        return response()->json(array_map(fn($instancia) => json_decode($instancia, true), $instancias));
    });

    /**
     * Rotas das páginas de usuário.
     */
    Route::resource('usuario', 'App\Http\Controllers\UserController');
    Route::get('/usuario/ordem:{ordem?}/quantidade:{quantpag?}/{pesquisar?}', [\App\Http\Controllers\UserController::class, 'index'])->name('usuario.filtrar');
    Route::post('/usuario/edit-password', [\App\Http\Controllers\UserController::class, 'editPassword'])->name('usuario.edit.password');

    /**
     * Rotas das páginas de instância.
     */
    Route::resource('instancia', 'App\Http\Controllers\InstanciaController');
    Route::get('/instancia/connect/{id}', [\App\Http\Controllers\InstanciaController::class, 'connect'])->name('instancia.connect');
    Route::get('/instancia/logout/{id}', [\App\Http\Controllers\InstanciaController::class, 'logout'])->name('instancia.logout');

    /**
     * Rotas das páginas de lista de contatos.
     */
    Route::resource('lista', 'App\Http\Controllers\ListaContatoController');
    Route::post('/lista/adicionar-contato', [\App\Http\Controllers\ListaContatoController::class, 'addContato'])->name('lista.add');
    Route::get('/lista/ordem:{ordem?}/quantidade:{quantpag?}/{pesquisar?}', [\App\Http\Controllers\ListaContatoController::class, 'index'])->name('lista.filtrar');

    /**
     * Rotas das páginas de lista de campanhas.
     */
    Route::resource('campanha', 'App\Http\Controllers\CampanhaController');
    Route::post('/campanha/import', [\App\Http\Controllers\CampanhaController::class, 'import'])->name('campanha.import');
    Route::post('/campanha/alterar', [\App\Http\Controllers\CampanhaController::class, 'alterar'])->name('campanha.alterar');
    Route::delete('/campanha/remover/midia/campanha:{id}', [\App\Http\Controllers\CampanhaController::class, 'removerMidia'])->name('campanha.remover.midia');
    Route::post('/campanha/iniciar/campanha', [\App\Http\Controllers\CampanhaController::class, 'start'])->name('campanha.start');
    Route::get('/campanha/parar/campanha:{id}', [\App\Http\Controllers\CampanhaController::class, 'stopCampaign'])->name('campanha.stop');
    Route::get('/campanha/duplicar/campanha:{id}', [\App\Http\Controllers\CampanhaController::class, 'duplicar'])->name('campanha.duplicar');
    Route::get('/campanha/reenviar/campanha:{id}', [\App\Http\Controllers\CampanhaController::class, 'reenviar'])->name('campanha.reenviar');
    Route::get('/campanha/envios/campanha:{id}', [\App\Http\Controllers\CampanhaController::class, 'envios'])->name('campanha.envios');
    Route::get('/campanha/envios/campanha:{id}/ordem:{ordem?}/status:{status?}/{pesquisar?}', [\App\Http\Controllers\CampanhaController::class, 'envios'])->name('campanha.envios.filtrar');
    Route::get('/campanha/reprocessar-erros/campanha:{id}', [\App\Http\Controllers\CampanhaController::class, 'errosRecall'])->name('campanha.erros.reprocessar');
    Route::get('/campanhas/status/campanha:{id}', [\App\Http\Controllers\CampanhaController::class, 'getStatus']);
    Route::get('/campanha/ordem:{ordem?}/quantidade:{quantpag?}/status:{status?}/{pesquisar?}', [\App\Http\Controllers\CampanhaController::class, 'index'])->name('campanha.filtrar');

    /**
     * Rotas das páginas de lista de contatos.
     */
    Route::get('/whatsapp', [\App\Http\Controllers\ServiceController::class, 'index'])->name('service.index');
    Route::post('/whatsapp/encerrar', [\App\Http\Controllers\ServiceController::class, 'encerrar'])->name('service.encerrar');
    Route::post('/whatsapp/new', [\App\Http\Controllers\ServiceController::class, 'new'])->name('service.new');
    Route::get('/whatsapp/contato:{contato}/protocolo:{protocolo?}', [\App\Http\Controllers\MessageController::class, 'index'])->name('service.messages.contato');

    /**
     * Rotas das mensagens enviadas e recebidas.
     */
    Route::get('/messages', [\App\Http\Controllers\MessageController::class, 'index'])->name('service.messages.index');
    Route::post('/messages/send-text', [\App\Http\Controllers\MessageController::class, 'sendText'])->name('service.messages.sendText');
    Route::post('/messages/send-file', [\App\Http\Controllers\MessageController::class, 'sendFile'])->name('service.messages.sendFile');
    Route::post('/messages/send-imagem', [\App\Http\Controllers\MessageController::class, 'sendImage'])->name('service.messages.sendImage');
    Route::post('/messages/send-audio', [\App\Http\Controllers\MessageController::class, 'sendAudio'])->name('service.messages.sendAudio');

    /**
     * Rotas das páginas de erros.
     */
    Route::resource('erros', 'App\Http\Controllers\ErrosController');
    Route::get('/erros/ordem:{ordem?}/fluxo:{fluxo?}/quantidade:{quantpag?}/{pesquisar?}', [\App\Http\Controllers\ErrosController::class, 'index'])->name('erros.filtrar');

    /**
     * Rotas das páginas de contatos.
     */
    Route::resource('contato', 'App\Http\Controllers\ContatoController');
    Route::post('/contato/import', [\App\Http\Controllers\ContatoController::class, 'import'])->name('contato.import');
    Route::get('/contato/ordem:{ordem?}/quantidade:{quantpag?}/{pesquisar?}', [\App\Http\Controllers\ContatoController::class, 'index'])->name('contato.filtrar');
});
