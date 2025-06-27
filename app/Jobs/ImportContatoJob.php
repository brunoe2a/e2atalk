<?php

namespace App\Jobs;

use App\Models\Contato;
use App\Models\ContatosLista;
use Illuminate\Bus\Queueable;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class ImportContatoJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected $contatos;
    protected $lista_contato_id;

    /**
     * Create a new job instance.
     */
    public function __construct($contatos, $lista_contato_id)
    {
        $this->contatos = $contatos;
        $this->lista_contato_id = $lista_contato_id;
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        Foreach($this->contatos as $c){
            $what = array( '(', ')', ' ', '-');
            $by   = array( '', '', '', '');
            $numero = str_replace($what, $by, $c[1]);

            $contato = Contato::where('numero', $numero)->first();
            if (!$contato){
                $cont = Contato::create([
                    'name'              => $c[0],
                    'numero'            => $numero,
                    'email'             => $c[2],
                    'user_id'           => auth()->id(),
                ]);

                ContatosLista::create([
                    'lista_contato_id'  => $this->lista_contato_id,
                    'contato_id'  => $cont->id,
                ]);
            }else{
                $contato->update([
                    'name'              => $c[0],
                    'email'             => $c[2],
                ]);
                $contato_lista = ContatosLista::where('contato_id', $contato->id)
                    ->where('lista_contato_id', $this->lista_contato_id)
                    ->first();
                if (!$contato_lista){
                    ContatosLista::create([
                        'lista_contato_id'  => $this->lista_contato_id,
                        'contato_id'  => $contato->id,
                    ]);
                }
            }

        }
    }
}
