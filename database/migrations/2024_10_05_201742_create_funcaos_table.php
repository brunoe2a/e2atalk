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
         * Cria o módulo de acesso de funções.
         */
        $m = Modulo::onlyTrashed()->where('chave', 'FuncaoModulo')->first();
        if ($m){
            $m->restore();
        }else{
            $modulo = Modulo::create([
                'chave' => 'FuncaoModulo',
                'section' => 'Cadastro',
                'name' => 'Cadastro da função dentro do canal.',
            ]);
        }
        $idModulo = $m->id ?? $modulo->id;

        /**
         * Cria a tabela funções.
         */
        Schema::create('funcoes', function (Blueprint $table) use ($idModulo) {
            $table->id();
            $table->string('nome');
            $table->text('descricao')->nullable();
            $table->unsignedBigInteger('canal_id');
            $table->unsignedBigInteger('modulo_id')->default($idModulo);
            $table->timestamps();
            $table->softDeletes();

            $table->foreign('canal_id')->references('id')->on('canais');
            $table->foreign('modulo_id')->references('id')->on('modulos');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        /**
         * Deleta o módulo de acesso de funções.
         */
        $modulo = Modulo::where('chave', 'FuncaoModulo')->first();
        $modulo->delete();

        /**
         * Remove a Alteração da tabela arquivos e relacionamento com a tabela funções.
         */
        Schema::table('funcoes', function (Blueprint $table) {
            $table->dropForeign('funcoes_canal_id_foreign');
            $table->dropForeign('funcoes_modulo_id_foreign');
        });

        /**
         * Remove a tabela funções.
         */
        Schema::dropIfExists('funcoes');
    }
};
