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
         * Cria o módulo de acesso de canais.
         */
        $m = Modulo::onlyTrashed()->where('chave', 'CanalModulo')->first();
        if ($m){
            $m->restore();
        }else{
            $modulo = Modulo::create([
                'chave' => 'CanalModulo',
                'section' => 'Cadastro',
                'name' => 'Cadastro do canal.',
            ]);
        }
        $idModulo = $m->id ?? $modulo->id;

        /**
         * Cria a tabela canais.
         */
        Schema::create('canais', function (Blueprint $table) use ($idModulo) {
            $table->id();
            $table->string('nome');
            $table->text('descricao')->nullable();
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
         * Deleta o módulo de acesso de canais.
         */
        $modulo = Modulo::where('chave', 'CanalModulo')->first();
        $modulo->delete();

        /**
         * Remove a Alteração da tabela arquivos e relacionamento com a tabela canais.
         */
        Schema::table('canais', function (Blueprint $table) {
            $table->dropForeign('canais_modulo_id_foreign');
        });

        /**
         * Remove a tabela canais.
         */
        Schema::dropIfExists('canais');
    }
};
