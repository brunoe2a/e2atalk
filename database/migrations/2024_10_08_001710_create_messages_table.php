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
        Schema::create('messages', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('contato_id')->nullable();
            $table->unsignedBigInteger('user_id')->nullable();
            $table->enum('fluxo', ['Entrada', 'Saida'])->default('Entrada');
            $table->text('content');
            $table->text('caption')->nullable();
            $table->string('whatsapp_id')->nullable();
            $table->string('from')->nullable();
            $table->string('to')->nullable();
            $table->string('type')->nullable();
            $table->string('mimetype')->nullable();
            $table->string('file_path')->nullable();
            $table->string('status')->default('Pendente');
            $table->timestamps();
            $table->softDeletes();

            $table->foreign('user_id')->references('id')->on('users');
            $table->foreign('contato_id')->references('id')->on('contatos');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('messages', function (Blueprint $table) {
            $table->dropForeign('messages_user_id_foreign');
            $table->dropForeign('messages_contato_id_foreign');
        });
        Schema::dropIfExists('messages');
    }
};
