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
        Schema::create('acessos', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->unsignedBigInteger('modulo_id');
            $table->enum('index', ['S', 'N'])->default('N');
            $table->enum('create', ['S', 'N'])->default('N');
            $table->enum('edit', ['S', 'N'])->default('N');
            $table->enum('delete', ['S', 'N'])->default('N');
            $table->timestamps();
            $table->softDeletes();

            $table->foreign('user_id')->references('id')->on('users');
            $table->foreign('modulo_id')->references('id')->on('modulos');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('acessos', function (Blueprint $table) {
            $table->dropForeign('acessos_user_id_foreign');
            $table->dropForeign('acessos_modulo_id_foreign');
        });
        Schema::dropIfExists('acessos');
    }
};
