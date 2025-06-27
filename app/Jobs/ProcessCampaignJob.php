<?php
namespace App\Jobs;

use App\Events\CampanhaStartFilaEvent;
use App\Models\DisparoContato;
use App\Models\Campanha;
use App\Helpers\Helper;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class ProcessCampaignJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected $campanhaId;

    /**
     * Create a new job instance.
     */
    public function __construct(int $campanhaId)
    {
        $this->campanhaId = $campanhaId;
    }

    /**
     * Execute the job.
     */
    public function handle()
    {
        $disparos = DisparoContato::where('campanha_id', $this->campanhaId)
            ->where('status', 'Válido')
            ->get();

        $delayTotal = 0;
        $counter = 0;

        foreach ($disparos as $disparo) {

            $delay = rand($disparo->campanha->t_inicial, $disparo->campanha->t_final);
            $counter++;

            if ($counter % $disparo->campanha->quat_pausa === 0) {
                $delayTotal += Helper::minutosParaSegundos($disparo->campanha->tempo_pausa);
            } else {
                $delayTotal += $delay;
            }
            $disparo->update(['status' => 'Fila']);

            ProcessarDisparoJob::dispatch($disparo)
                ->onQueue('fila_campanha_'.$this->campanhaId)
                ->delay(now()->addSeconds($delayTotal));

        }

        CampanhaStartFilaEvent::dispatch(count($disparos));
    }
}
