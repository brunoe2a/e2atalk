<?php

namespace Database\Seeders;

use App\Models\Acesso;
use App\Models\Canal;
use App\Models\Funcao;
use App\Models\IntegranteCanal;
use App\Models\Modulo;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $dev = User::create([
            'name' => 'Bruno Ferreira',
            'email' => 'bruno.e2a@gmail.com',
            'password' => Hash::make('Jo@o0316'),
        ]);

        User::factory(10)->create();

        $canal = Canal::create([
            'nome' => 'Suporte Técnico',
            'descricao' => 'Canal de Suporte ao Cliente'
        ]);
        Funcao::create([
            'nome' => 'Atendente',
            'descricao' => 'Atendimento do Canal',
            'canal_id' => $canal->id
        ]);
        Funcao::create([
            'nome' => 'Supervisor',
            'descricao' => 'Supervisor do Canal',
            'canal_id' => $canal->id
        ]);
        Funcao::create([
            'nome' => 'Coordenador',
            'descricao' => 'Coordenador do Canal',
            'canal_id' => $canal->id
        ]);

        $canal2 = Canal::create([
            'nome' => 'Financeiro',
            'descricao' => 'Canal de Relacionamento Financeiro com Cliente'
        ]);
        Funcao::create([
            'nome' => 'Atendente',
            'descricao' => 'Atendimento do Canal',
            'canal_id' => $canal2->id
        ]);
        Funcao::create([
            'nome' => 'Supervisor',
            'descricao' => 'Supervisor do Canal',
            'canal_id' => $canal2->id
        ]);
        Funcao::create([
            'nome' => 'Coordenador',
            'descricao' => 'Coordenador do Canal',
            'canal_id' => $canal2->id
        ]);

        $modulos = Modulo::all();
        $users = User::all();
        Foreach ($users as $user){
            Foreach ($modulos as $modulo){
                Acesso::create([
                    'user_id' => $user->id,
                    'modulo_id' => $modulo->id,
                    'index' => 'N',
                    'create' => 'N',
                    'edit' => 'N',
                    'delete' => 'N'
                ]);
            }
            $canal = rand(1,2);
            IntegranteCanal::create([
                'user_id' => $user->id,
                'canal_id' => $canal,
                'funcao_id' => $canal == 1 ? rand(1,3) : rand(4,6)
            ]);
        }

        $acesso_dev = Acesso::where('user_id', $dev->id)->where('modulo_id', 1)->first();
        $acesso_dev->update([
            'index' => 'S',
            'create' => 'S',
            'edit' => 'S',
            'delete' => 'S'
        ]);
    }
}
