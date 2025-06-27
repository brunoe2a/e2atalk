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
         * Cria o módulo de acesso.
         */
        $m = Modulo::onlyTrashed()->where('chave', 'InstanciaModulo')->first();
        if ($m){
            $m->restore();
        }else{
            $modulo = Modulo::create([
                'chave' => 'InstanciaModulo',
                'section' => 'Cadastro',
                'name' => 'Cadastro de instancias.',
            ]);
        }
        $idModulo = $m->id ?? $modulo->id;

        /**
         * Cria a tabela.
         */
        Schema::create('instancias', function (Blueprint $table) use ($idModulo) {
            $table->id();
            $table->string('nome')->nullable();
            $table->string('apikey')->nullable();
            $table->string('instancia')->unique()->nullable();
            $table->string('instanceId')->nullable();
            $table->string('conection')->nullable();
            $table->enum('campanha', ['S', 'N'])->default('S');
            $table->enum('atendimento', ['S', 'N'])->default('N');
            $table->unsignedBigInteger('empresa_id')->nullable();
            $table->unsignedBigInteger('modulo_id')->default($idModulo);
            $table->timestamps();
            $table->softDeletes();

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
        $modulo = Modulo::where('chave', 'InstanciaModulo')->first();
        $modulo->delete();

        /**
         * Remove a Alteração da tabela arquivos e relacionamento com a tabela canais.
         */
        Schema::table('instancias', function (Blueprint $table) {
            $table->dropForeign('instancias_modulo_id_foreign');
            $table->dropForeign('instancias_empresa_id_foreign');
        });

        /**
         * Remove a tabela canais.
         */
        Schema::dropIfExists('instancias');
    }
};
