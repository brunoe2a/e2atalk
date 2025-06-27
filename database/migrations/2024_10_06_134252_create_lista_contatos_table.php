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
         * Cria o módulo de acesso da lista de contatos.
         */
        $m = Modulo::onlyTrashed()->where('chave', 'ListaModulo')->first();
        if ($m){
            $m->restore();
        }else{
            $modulo = Modulo::create([
                'chave' => 'ListaModulo',
                'section' => 'Cadastro',
                'name' => 'Cadastro de lista de contatos.',
            ]);
        }
        $idModulo = $m->id ?? $modulo->id;

        /**
         * Cria a tabela da lista de contatos.
         */
        Schema::create('lista_contatos', function (Blueprint $table) use ($idModulo) {
            $table->id();
            $table->string('nome');
            $table->text('descricao')->nullable();
            $table->unsignedBigInteger('user_id')->nullable();
            $table->unsignedBigInteger('modulo_id')->default($idModulo);
            $table->timestamps();
            $table->softDeletes();

            $table->foreign('modulo_id')->references('id')->on('modulos');
            $table->foreign('user_id')->references('id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        /**
         * Deleta o módulo de acesso da lista de contatos.
         */
        $modulo = Modulo::where('chave', 'ListaModulo')->first();
        $modulo->delete();

        /**
         * Remove a Alteração da tabela arquivos e relacionamento com a tabela lista de contatos.
         */
        Schema::table('lista_contatos', function (Blueprint $table) {
            $table->dropForeign('lista_contatos_user_id_foreign');
            $table->dropForeign('lista_contatos_modulo_id_foreign');
        });

        /**
         * Remove a tabela lista de contatos.
         */
        Schema::dropIfExists('lista_contatos');
    }
};
