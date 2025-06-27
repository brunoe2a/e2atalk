<?php

namespace App\Jobs;

use App\Events\CampanhaContatoEnviadoEvent;
use App\Events\CampanhaSendMessageEvent;
use App\Helpers\EvolutionDisparoApi;
use App\Helpers\Helper;
use App\Models\DisparoContato;
use App\Models\Erros;
use App\Models\Instancia;
use App\Service\InstanciaService;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;

class ProcessarDisparoJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected $disparo;

    /**
     * Create a new job instance.
     */
    public function __construct(DisparoContato $disparo)
    {
        $this->disparo = $disparo;
    }

    /**
     * Execute the job.
     */
    public function handle()
    {

        $mediaUrl = null;
        $image = null;

        if ($this->disparo->campanha->file_path) {
            if (Storage::disk('public')->exists($this->disparo->campanha->file_path)) {
                // Obtém o caminho físico correto do arquivo
                $filePath = Storage::disk('public')->path($this->disparo->campanha->file_path);

                // Lê o arquivo corretamente
                $fileContent = file_get_contents($filePath);

                // Converte para Base64 puro (sem prefixo)
                $image = base64_encode($fileContent);

                // Gera a URL pública do arquivo
                $mediaUrl = Storage::disk('public')->url($this->disparo->campanha->file_path);
            } else {
                Log::warning("Arquivo de mídia não encontrado: {$this->disparo->campanha->file_path}");
            }
        }

        if ($mediaUrl) {
            $dados = [
                'number' => '55' . $this->disparo->contato->numero,
                'caption' => $this->disparo->campanha->content,
                'mediatype' => $this->disparo->campanha->type,
                'mimetype' => $this->disparo->campanha->mimetype,
                'media' => $image, // Agora com Base64 puro
                'fileName' => "Imagem.png",
            ];
            $resposta = EvolutionDisparoApi::sendImage($dados, $this->disparo->campanha_id);
        } else {
            $dados = [
                'number' => '55' . $this->disparo->contato->numero,
                'text' => $this->disparo->campanha->content,
            ];
            $resposta = EvolutionDisparoApi::sendText($dados, $this->disparo->campanha_id);
        }

        $responseData = json_decode($resposta->getContent(), true);// Converte JSON para array

        if (isset($responseData['status']) && $responseData['status'] === 'PENDING') {
            $this->disparo->update([
                'instancia_id' => $responseData['instancia_id'],
                'status' => 'Enviada'
            ]);

            CampanhaSendMessageEvent::dispatch(true);
            CampanhaContatoEnviadoEvent::dispatch([
                'campanha_id' => $this->disparo->campanha_id,
                'contato_id' => $this->disparo->contato_id,
                'dt_envio' => Helper::agora(),
                'id' => $this->disparo->id,
                'name' => $this->disparo->contato->name,
                'nome' => $responseData['instancia_nome'] ?? null,
                'numero' => $this->disparo->contato->numero,
                'status' => 'Enviada',
            ]);
        } else {
            Erros::create([
                'erro' => $responseData['error'],
                'instancia_id' => $responseData['instancia_id'] ?? null,
                'status_code' => $responseData['status_code'] ?? null,
                'campanha_id' => $this->disparo->campanha_id,
                'contato_id' => $this->disparo->contato_id,
                'fluxo' => 'Saida',
            ]);
            Log::error('Erro no disparo:', ['resposta' => $responseData]);
            $this->disparo->update(['status' => 'Erro']);
            CampanhaSendMessageEvent::dispatch(false);
            CampanhaContatoEnviadoEvent::dispatch([
                'campanha_id' => $this->disparo->campanha_id,
                'contato_id' => $this->disparo->contato_id,
                'dt_envio' => Helper::agora(),
                'id' => $this->disparo->id,
                'name' => $this->disparo->contato->name,
                'nome' => $responseData['instancia_nome'] ?? null,
                'numero' => $this->disparo->contato->numero,
                'status' => 'Erro',
            ]);
        }


        // Verificar se todos os disparos foram processados
        $this->checkAndUpdateCampanhaStatus();
    }

    /**
     * Verifica se todos os disparos da campanha foram processados e, se sim, atualiza o status da campanha.
     */
    protected function checkAndUpdateCampanhaStatus()
    {
        $campanha = $this->disparo->campanha;

        // Verifica se todos os disparos da campanha estão com status "Enviada" ou "Erro"
        $disparosPendentes = $campanha->disparos()->whereNotIn('status', ['Enviada', 'Inválido', 'Erro'])->count();

        if ($disparosPendentes === 0) {
            // Atualiza o status da campanha para "Concluída"
            $campanha->update(['status' => 'Concluida']);

            InstanciaService::limparFilaInstancias($campanha->id);

            $instancias = Instancia::where('cam_id', $this->disparo->campanha_id)->get();
            foreach ($instancias as $instancia) {
                $instancia->update([
                    'cam_id' => null
                ]);
            }
        }
    }
}
