<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\Campanha;

class GerarFilasCampanhas extends Command
{
    protected $signature = 'campanhas:gerar-filas
                            {--exec : Executar queue:work para cada campanha}
                            {--grouped : Gerar uma única linha com várias campanhas}';

    protected $description = 'Gera os comandos de workers para campanhas ativas';

    public function handle()
    {
        $campanhasAtivas = Campanha::where('status', 'Iniciada')->get();

        // 👉 Mata os workers das campanhas pausadas ou concluídas (somente se usar --exec)
        if ($this->option('exec')) {
            $this->pararWorkersInativos();
        }

        if ($campanhasAtivas->isEmpty()) {
            $this->warn('Nenhuma campanha ativa encontrada.');
            return;
        }

        // Agrupado em uma fila só
        if ($this->option('grouped')) {
            $filaList = $campanhasAtivas->map(function ($c) {
                return "fila_campanha_{$c->id}";
            })->implode(',');

            // $comando = "php artisan queue:work redis --queue={$filaList},fila_valida_numeros,fila_atendimento,default --sleep=1 --tries=3 > /dev/null 2>&1 &";
            // $comando = "/usr/bin/php /home/u173802769/domains/e2atalk.com/public_html/crecimt/artisan queue:work redis --queue={$filaList},fila_valida_numeros,default --sleep=1 --tries=3 > /dev/null 2>&1 &";
            $comando = "/usr/bin/php /home/u173802769/domains/e2atalk.com/public_html/demo/artisan queue:work redis --queue={$filaList},fila_valida_numeros,default --sleep=1 --tries=3 > /dev/null 2>&1 &";

            $this->info("Comando para todas as campanhas:\n$comando");

            if ($this->option('exec')) {
                $this->info("Executando o worker agrupado...");
                passthru($comando);
            }

            return;
        }

        // Individual por campanha
        foreach ($campanhasAtivas as $campanha) {
            $fila = "fila_campanha_{$campanha->id}";
            // $comando = "php artisan queue:work redis --queue={$fila} --sleep=1 --tries=3 > /dev/null 2>&1 &";
            // $comando = "/usr/bin/php /home/u173802769/domains/e2atalk.com/public_html/crecimt/artisan queue:work redis --queue={$fila} --sleep=1 --tries=3 > /dev/null 2>&1 &";
            $comando = "/usr/bin/php /home/u173802769/domains/e2atalk.com/public_html/demo/artisan queue:work redis --queue={$fila} --sleep=1 --tries=3 > /dev/null 2>&1 &";

            $this->line("Campanha #{$campanha->id}:");
            $this->info($comando);

            if ($this->option('exec')) {
                $this->info("Iniciando worker da campanha {$campanha->id}...");
                passthru($comando);
            }
        }
    }

    protected function pararWorkersInativos()
    {
        $campanhasInativas = \App\Models\Campanha::whereIn('status', ['Pausada', 'Concluída'])->get();

        foreach ($campanhasInativas as $campanha) {
            $fila = "fila_campanha_{$campanha->id}";
            $comandoBusca = "ps aux | grep 'queue:work redis --queue={$fila}' | grep -v grep";

            $output = shell_exec($comandoBusca);

            if (!empty($output)) {
                $this->warn("Encontrado worker ativo da campanha #{$campanha->id} (status: {$campanha->status})");

                // Encerra o processo
                $comandoKill = "pkill -f 'queue:work redis --queue={$fila}'";
                exec($comandoKill);
                $this->info("Worker da campanha #{$campanha->id} encerrado.");
            } else {
                $this->line("Nenhum worker ativo encontrado para campanha #{$campanha->id}.");
            }
        }
    }


}
