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
        $m = Modulo::onlyTrashed()->where('chave', 'CampanhaModulo')->first();
        if ($m){
            $m->restore();
        }else{
            $modulo = Modulo::create([
                'chave' => 'CampanhaModulo',
                'section' => 'Marketing',
                'name' => 'Cadastro de Campanhas.',
            ]);
        }
        $idModulo = $m->id ?? $modulo->id;

        /**
         * Cria a tabela da lista de contatos.
         */
        Schema::create('campanhas', function (Blueprint $table) use ($idModulo) {
            $table->id();
            $table->string('nome');
            $table->text('descricao')->nullable();
            $table->unsignedBigInteger('lista_contato_id');
            $table->unsignedBigInteger('user_id')->nullable();
            $table->unsignedBigInteger('modulo_id')->default($idModulo);
            $table->enum('status', ['Aguardando', 'Iniciada', 'Pausada', 'Concluida'])->default('Aguardando');
            $table->tinyInteger('t_inicial');
            $table->tinyInteger('t_final');
            $table->tinyInteger('tempo_pausa');
            $table->integer('quat_pausa');
            $table->text('content')->nullable();
            $table->string('type')->nullable();
            $table->string('mimetype')->nullable();
            $table->string('file_path')->nullable();
            $table->timestamps();
            $table->softDeletes();

            $table->foreign('lista_contato_id')->references('id')->on('lista_contatos');
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
        $modulo = Modulo::where('chave', 'CampanhaModulo')->first();
        $modulo->delete();

        /**
         * Remove a Alteração da tabela arquivos e relacionamento com a tabela lista de contatos.
         */
        Schema::table('campanhas', function (Blueprint $table) {
            $table->dropForeign('campanhas_user_id_foreign');
            $table->dropForeign('campanhas_modulo_id_foreign');
            $table->dropForeign('campanhas_lista_contato_id_foreign');
        });

        /**
         * Remove a tabela lista de contatos.
         */
        Schema::dropIfExists('campanhas');
    }
};
