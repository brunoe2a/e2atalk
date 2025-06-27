<?php

namespace App\Http\Controllers;

use App\Helpers\Helper;
use App\Models\Contato;
use App\Models\ContatosLista;
use App\Models\ListaContato;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ListaContatoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $ordem = $request->ordem ?? 'id';
        $quantPag = $request->quantpag ?? 15;
        $pesquisar = $request->pesquisar ?? '';

        $listas = ListaContato::withCount('contatos')
            ->where(function ($query) use ($pesquisar) {
                $query->where('nome', 'like', '%'.$pesquisar.'%')
                    ->orWhere('id', $pesquisar);
            })
            ->orderBy($ordem, 'asc')
            ->paginate($quantPag);

        return Inertia::render('Lista/Index', [
            'listas' => $listas,
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
        $regras = [
            'nome' => 'required',
        ];

        $feedback = [
            'required' => ':attribute é obrigatório!',
        ];

        $request->validate($regras, $feedback);

        $lista = ListaContato::create($request->all());

        return redirect()->route('lista.edit', $lista->id);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function addContato(Request $request)
    {
        $regras = [
            'contato_id' => 'required',
        ];

        $feedback = [
            'required' => ':attribute é obrigatório!',
        ];

        $request->validate($regras, $feedback);

        ContatosLista::create($request->all());

        return redirect()->route('lista.edit', $request->lista_contato_id);
    }

    /**
     * Display the specified resource.
     */
    public function show(ListaContato $listaContato)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $lista = ListaContato::where('id', $id)->first();

        $contatos = ContatosLista::with('contato')->where('lista_contato_id', $id)->paginate();

        $leads = Contato::all();

        return Inertia::render('Lista/Edit', [
            'lista' => $lista,
            'contatos' => $contatos,
            'leads' => $leads,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $regras = [
            'nome' => 'required',
        ];

        $feedback = [
            'required' => ':attribute é obrigatório!',
        ];

        $request->validate($regras, $feedback);

        $lista = ListaContato::where('id', $id)->first();

        $lista->update($request->all());

        return redirect()->route('lista.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        // Carrega a lista de contatos com suas campanhas associadas
        $lista = ListaContato::with('campanhas')->where('id', $id)->first();

        // Verifica se a lista existe
        if (!$lista) {
            return redirect()->route('lista.index')->with('error', 'Lista não encontrada.');
        }

        // Verifica se a lista possui campanhas
        if ($lista->campanhas->isNotEmpty()) {
            return redirect()->route('lista.index')->with('error', 'Não é possível deletar a lista, pois ela possui campanhas associadas.');
        }

        // Se não houver campanhas, deleta a lista
        $lista->delete();

        return redirect()->route('lista.index')->with('success', 'Lista deletada com sucesso.');
    }
}
