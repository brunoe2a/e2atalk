<?php

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
        Schema::create('sessao_atendimentos', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('contato_id');
            $table->unsignedBigInteger('user_id')->nullable();
            $table->string('protocolo');
            $table->enum('status', ['Aguardando', 'Atendimento', 'Concluido'])->default('Aguardando');
            $table->timestamps();
            $table->softDeletes();

            $table->foreign('user_id')->references('id')->on('users');
            $table->foreign('contato_id')->references('id')->on('contatos');
        });

        Schema::table('messages', function (Blueprint $table) {
            $table->unsignedBigInteger('sessao_atendimento_id')->nullable();
            $table->foreign('sessao_atendimento_id')->references('id')->on('sessao_atendimentos');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('messages', function (Blueprint $table) {
            $table->dropForeign('messages_sessao_atendimento_id_foreign');
            $table->dropColumn('sessao_atendimento_id');
        });
        Schema::table('sessao_atendimentos', function (Blueprint $table) {
            $table->dropForeign('sessao_atendimentos_user_id_foreign');
            $table->dropForeign('sessao_atendimentos_contato_id_foreign');
        });
        Schema::dropIfExists('sessao_atendimentos');
    }
};
