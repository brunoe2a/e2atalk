<?php

namespace App\Jobs;

use App\Helpers\EvolutionApi;
use App\Models\Message;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class SendWhatsappFileJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected $dados;
    protected $message;

    /**
     * Create a new job instance.
     */
    public function __construct(Message $message, $dados)
    {
        $this->dados = $dados;
        $this->message = $message;
    }

    /**
     * Execute the job.
     */
    public function handle()
    {
        $response = EvolutionApi::sendFile($this->dados);

        if ($response->getData()->status === 'PENDING') {
            $this->message->update([
                'whatsapp_id' => $response->getData()->key->id,
                'status' => 'Enviada'
            ]);
        }
    }
}
