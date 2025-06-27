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
         * Cria o módulo de acesso de integrantes do canal.
         */
        $m = Modulo::onlyTrashed()->where('chave', 'IntegranteModulo')->first();
        if ($m){
            $m->restore();
        }else{
            $modulo = Modulo::create([
                'chave' => 'IntegranteModulo',
                'section' => 'Cadastro',
                'name' => 'Cadastro de integrante no canal sua função.',
            ]);
        }
        $idModulo = $m->id ?? $modulo->id;

        /**
         * Cria a tabela integrantes do canal.
         */
        Schema::create('integrantes_canal', function (Blueprint $table) use ($idModulo) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->unsignedBigInteger('canal_id');
            $table->unsignedBigInteger('funcao_id');
            $table->unsignedBigInteger('modulo_id')->default($idModulo);
            $table->timestamps();
            $table->softDeletes();

            $table->foreign('user_id')->references('id')->on('users');
            $table->foreign('canal_id')->references('id')->on('canais');
            $table->foreign('funcao_id')->references('id')->on('funcoes');
            $table->foreign('modulo_id')->references('id')->on('modulos');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        /**
         * Deleta o módulo de acesso de integrantes do canal.
         */
        $modulo = Modulo::where('chave', 'IntegranteModulo')->first();
        $modulo->delete();

        /**
         * Remove a Alteração da tabela arquivos e relacionamento com a tabela integrantes do canal.
         */
        Schema::table('integrantes_canal', function (Blueprint $table) {
            $table->dropForeign('integrantes_canal_user_id_foreign');
            $table->dropForeign('integrantes_canal_canal_id_foreign');
            $table->dropForeign('integrantes_canal_funcao_id_foreign');
            $table->dropForeign('integrantes_canal_modulo_id_foreign');
        });

        /**
         * Remove a tabela integrantes do canal.
         */
        Schema::dropIfExists('integrantes_canal');
    }
};
