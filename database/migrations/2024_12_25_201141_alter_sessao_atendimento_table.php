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
        Schema::table('sessao_atendimentos', function (Blueprint $table) {
            $table->enum('new_chat', ['S', 'N'])->default('S')->after('status');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('sessao_atendimentos', function (Blueprint $table) {
            $table->dropColumn('new_chat');
        });
    }
};
