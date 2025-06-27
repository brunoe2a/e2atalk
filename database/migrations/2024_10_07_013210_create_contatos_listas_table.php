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
        Schema::create('contatos_listas', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('lista_contato_id');
            $table->unsignedBigInteger('contato_id');
            $table->timestamps();
            $table->softDeletes();

            $table->foreign('lista_contato_id')->references('id')->on('lista_contatos');
            $table->foreign('contato_id')->references('id')->on('contatos');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('contatos_listas', function (Blueprint $table) {
            $table->dropForeign('contatos_listas_lista_contato_id_foreign');
            $table->dropForeign('contatos_listas_contato_id_foreign');
        });
        Schema::dropIfExists('contatos_listas');
    }
};
