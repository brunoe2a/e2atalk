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
        Schema::create('disparo_contatos', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('campanha_id');
            $table->unsignedBigInteger('contato_id');
            $table->enum('status', ['Fila','Enviada','Válido', 'Inválido', 'Erro'])->default('Fila');
            $table->timestamps();
            $table->softDeletes();

            $table->foreign('campanha_id')->references('id')->on('campanhas');
            $table->foreign('contato_id')->references('id')->on('contatos');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('disparo_contatos', function (Blueprint $table) {
            $table->dropForeign('disparo_contatos_campanha_id_foreign');
            $table->dropForeign('disparo_contatos_contato_id_foreign');
        });
        Schema::dropIfExists('disparo_contatos');
    }
};
