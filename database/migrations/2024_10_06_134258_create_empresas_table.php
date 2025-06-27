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
         * Cria o módulo de acesso de Empresas.
         */
        $m = Modulo::onlyTrashed()->where('chave', 'EmpresaModulo')->first();
        if ($m){
            $m->restore();
        }else{
            $modulo = Modulo::create([
                'chave' => 'EmpresaModulo',
                'section' => 'Cadastro',
                'name' => 'Cadastro de empresa.',
            ]);
        }
        $idModulo = $m->id ?? $modulo->id;

        /**
         * Cria a tabela Empresas.
         */
        Schema::create('empresas', function (Blueprint $table)  use ($idModulo)  {
            $table->id();
            $table->string('name')->nullable();
            $table->string('numero', 20);
            $table->string('numero_api')->nullable();
            $table->string('api_dify')->nullable();
            $table->string('status')->nullable();
            $table->unsignedBigInteger('modulo_id')->default($idModulo);
            $table->timestamps();
            $table->softDeletes();


            $table->foreign('modulo_id')->references('id')->on('modulos');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {

        /**
         * Deleta o módulo de acesso.
         */
        $modulo = Modulo::where('chave', 'EmpresaModulo')->first();
        $modulo->delete();

        /**
         * Remove a Alteração da tabela arquivos e relacionamento com a tabela.
         */
        Schema::table('empresas', function (Blueprint $table) {
            $table->dropForeign('empresas_modulo_id_foreign');
        });

        /**
         * Remove a tabela.
         */
        Schema::dropIfExists('empresas');
    }
};
