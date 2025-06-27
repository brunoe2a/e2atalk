<?php

use App\Models\Modulo;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        /**
         * Cria o módulo de erros.
         */
        $m = Modulo::onlyTrashed()->where('chave', 'ErrosModulo')->first();
        if ($m){
            $m->restore();
        }else{
            $modulo = Modulo::create([
                'chave' => 'ErrosModulo',
                'section' => 'Configuração',
                'name' => 'Controle de erros.',
            ]);
        }
        $idModulo = $m->id ?? $modulo->id;

        /**
         * Cria a tabela.
         */
        Schema::create('erros', function (Blueprint $table) use ($idModulo) {
            $table->id();
            $table->text('erro');
            $table->integer('status_code')->nullable();
            $table->unsignedBigInteger('user_id')->nullable();
            $table->unsignedBigInteger('modulo_id')->default($idModulo);
            $table->unsignedBigInteger('message_id')->nullable();
            $table->unsignedBigInteger('campanha_id')->nullable();
            $table->unsignedBigInteger('contato_id')->nullable();
            $table->unsignedBigInteger('instancia_id')->nullable();
            $table->enum('fluxo', ['Entrada', 'Saida'])->nullable();
            $table->timestamps();
            $table->softDeletes();

            $table->foreign('user_id')->references('id')->on('users');
            $table->foreign('modulo_id')->references('id')->on('modulos');
            $table->foreign('message_id')->references('id')->on('messages');
            $table->foreign('campanha_id')->references('id')->on('campanhas');
            $table->foreign('instancia_id')->references('id')->on('instancias');
            $table->foreign('contato_id')->references('id')->on('contatos');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        /**
         * Deleta o módulo de acesso de canais.
         */
        $modulo = Modulo::where('chave', 'ErrosModulo')->first();
        $modulo->delete();

        /**
         * Remove a Alteração da tabela arquivos e relacionamento com a tabela canais.
         */
        Schema::table('erros', function (Blueprint $table) {
            $table->dropForeign('erros_user_id_foreign');
            $table->dropForeign('erros_modulo_id_foreign');
            $table->dropForeign('erros_message_id_foreign');
            $table->dropForeign('erros_campanha_id_foreign');
            $table->dropForeign('erros_instancia_id_foreign');
            $table->dropForeign('erros_contato_id_foreign');
        });

        /**
         * Remove a tabela canais.
         */
        Schema::dropIfExists('erros');
    }
};
