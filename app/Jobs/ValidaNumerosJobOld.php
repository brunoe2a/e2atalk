<?php
namespace App\Jobs;

use App\Helpers\EvolutionDisparoApi;
use App\Models\Contato;
use App\Models\DisparoContato;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class ValidaNumerosJobOld implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected $numeros;
    protected $campanhaId;

    /**
     * Create a new job instance.
     */
    public function __construct(array $numeros, int $campanhaId)
    {
        $this->numeros = $numeros;
        $this->campanhaId = $campanhaId;
    }

    /**
     * Execute the job.
     */
    public function handle()
    {
        $dados = [
            'numbers' => $this->numeros,
        ];

        if (count($this->numeros) > 0) {
            $api = EvolutionDisparoApi::validateWhatsApp($dados);

            foreach ($api->getData() as $res) {
                $status = $res->exists ? 'Fila' : 'Inválido';
                $numero = substr($res->number, 2);

                $contato = Contato::where('numero', $numero)->first();

                DisparoContato::create([
                    'campanha_id' => $this->campanhaId,
                    'contato_id' => $contato->id,
                    'status' => $status,
                ]);
            }
        }
    }
}
