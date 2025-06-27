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
         * Cria o módulo de acesso de contatos.
         */
        $m = Modulo::onlyTrashed()->where('chave', 'ContatoModulo')->first();
        if ($m){
            $m->restore();
        }else{
            $modulo = Modulo::create([
                'chave' => 'ContatoModulo',
                'section' => 'Cadastro',
                'name' => 'Cadastro de contato.',
            ]);
        }
        $idModulo = $m->id ?? $modulo->id;

        /**
         * Cria a tabela contatos.
         */
        Schema::create('contatos', function (Blueprint $table) use ($idModulo) {
            $table->id();
            $table->string('name')->nullable();
            $table->string('numero', 20);
            $table->string('numero_api')->nullable();
            $table->string('email')->nullable();
            $table->string('conversation_id')->nullable();
            $table->boolean('descadastrado')->unsigned()->nullable();
            $table->boolean('whatsapp')->unsigned()->nullable();
            $table->enum('bot_ativo', ['true', 'false'])->default('true');
            $table->unsignedBigInteger('user_id')->nullable();
            $table->unsignedBigInteger('empresa_id')->nullable();
            $table->unsignedBigInteger('modulo_id')->default($idModulo);
            $table->timestamps();
            $table->softDeletes();

            $table->foreign('user_id')->references('id')->on('users');
            $table->foreign('empresa_id')->references('id')->on('empresas');
            $table->foreign('modulo_id')->references('id')->on('modulos');
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
        $modulo = Modulo::where('chave', 'ContatoModulo')->first();
        $modulo->delete();

        /**
         * Remove a Alteração da tabela arquivos e relacionamento com a tabela canais.
         */
        Schema::table('contatos', function (Blueprint $table) {
            $table->dropForeign('contatos_modulo_id_foreign');
            $table->dropForeign('contatos_user_id_foreign');
            $table->dropForeign('contatos_empresa_id_foreign');
        });

        /**
         * Remove a tabela canais.
         */
        Schema::dropIfExists('contatos');
    }
};
