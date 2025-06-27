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
        Schema::table('disparo_contatos', function (Blueprint $table) {
            $table->unsignedBigInteger('instancia_id')->nullable()->after('status');

            $table->foreign('instancia_id')->references('id')->on('instancias');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('disparo_contatos', function (Blueprint $table) {
            $table->dropForeign('disparo_contatos_instancia_id_foreign');
            $table->dropColumn('instancia_id');
        });
    }
};
