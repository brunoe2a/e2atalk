<?php

namespace App\Http\Controllers;

use App\Helpers\Helper;
use App\Imports\ContatoImport;
use App\Jobs\ImportContatoJob;
use App\Models\Contato;
use App\Models\ContatosLista;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Maatwebsite\Excel\Facades\Excel;

class ContatoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $ordem = $request->ordem ?? 'name';
        $quantPag = $request->quantpag ?? 15;
        $pesquisar = $request->pesquisar ?? '';

        $contatos = Contato::where('name', 'like', '%'.$pesquisar.'%')
            ->orWhere('id', $pesquisar)
            ->orderBy($ordem, 'asc')
            ->paginate($quantPag);

        $contatos->each(function ($contato) {
            $contato->dt_criacao = Helper::dataParaBrasil($contato->created_at);
        });

        return Inertia::render('Contato/Index', [
            'contatos' => $contatos,
            'ordem' => $ordem,
            'pesquisar' => $pesquisar
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function import(Request $request)
    {
        $contatos = Excel::toArray(new ContatoImport, $request->file('file'));
        // Excel::import(new ContatoImport, $request->file('file'));

        Foreach($contatos as $contato){
            // Dividimos o array em partes de 500 contatos
            $chunks = array_chunk($contato, 2);

            // Disparamos um job para cada chunk
            foreach ($chunks as $chunk) {
                ImportContatoJob::dispatch($chunk, $request->lista_contato_id)
                    ->onQueue('fila_import_contato')
                    ->delay(now()->addSeconds(5));
            }
        }

        return redirect()->back();
    }

    public function importOLD(Request $request)
    {
        $contatos = Excel::toArray(new ContatoImport, $request->file('file'));
        // Excel::import(new ContatoImport, $request->file('file'));
        Foreach($contatos as $contato){
            Foreach($contato as $c){
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
                        'lista_contato_id'  => $request->lista_contato_id,
                        'contato_id'  => $cont->id,
                    ]);
                }else{
                    $contato->update([
                        'name'              => $c[0],
                        'email'             => $c[2],
                    ]);
                    $contato_lista = ContatosLista::where('contato_id', $contato->id)
                        ->where('lista_contato_id', $request->lista_contato_id)
                        ->first();
                    if (!$contato_lista){
                        ContatosLista::create([
                            'lista_contato_id'  => $request->lista_contato_id,
                            'contato_id'  => $contato->id,
                        ]);
                    }
                }
            }
        }

        return redirect()->back();
    }

    /**
     * Display the specified resource.
     */
    public function show(Contato $contato)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Contato $contato)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Contato $contato)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Contato $contato)
    {
        //
    }
}
