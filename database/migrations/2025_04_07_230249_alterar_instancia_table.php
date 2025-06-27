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
        Schema::table('instancias', function (Blueprint $table) {
            $table->unsignedBigInteger('cam_id')->nullable()->after('campanha');

            $table->foreign('cam_id')->references('id')->on('campanhas');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('instancias', function (Blueprint $table) {
            $table->dropForeign('instancias_campanha_id_foreign');
            $table->dropColumn('cam_id');
        });
    }
};
