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
        Schema::create('modulos', function (Blueprint $table) {
            $table->id();
            $table->string('chave')->unique();
            $table->string('section');
            $table->string('name');
            $table->timestamps();
            $table->softDeletes();
        });

        /**
         * Cria o módulo de acesso de master.
         */
        Modulo::create([
            'chave' => 'MasterModulo',
            'section' => 'Master',
            'name' => 'Desenvolvedor do Sistema',
        ]);

        /**
         * Cria o módulo de acesso de master.
         */
        Modulo::create([
            'chave' => 'ConfigModulo',
            'section' => 'Configuração',
            'name' => 'Configuração do Sistema',
        ]);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('modulos');
    }
};
