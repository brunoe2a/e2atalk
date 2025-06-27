<?php

namespace App\Http\Controllers;

use App\Helpers\Helper;
use App\Models\Campanha;
use App\Models\Erros;
use App\Models\ListaContato;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ErrosController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $ordem = $request->ordem ?? 'created_at';
        $fluxo = $request->fluxo ? [$request->fluxo] : ['Entrada', 'Saida'];
        $quantPag = $request->quantpag ?? 15;
        $pesquisar = $request->pesquisar ?? '';

        if ($request->fluxo == 'todas'){
            $fluxo = ['Entrada', 'Saida'];
        }

        // Filtra as campanhas de forma eficiente
        $erros = Erros::query()
            ->with('contato', 'campanha')
            ->when($pesquisar, function ($query, $pesquisar) {
                $query->where(function ($q) use ($pesquisar) {
                    $q->whereHas('contato', function ($q2) use ($pesquisar) {
                        $q2->where('name', 'like', '%' . $pesquisar . '%');
                    })->orWhereHas('campanha', function ($q3) use ($pesquisar) {
                        $q3->where('nome', 'like', '%' . $pesquisar . '%');
                    });
                });
            })
            ->whereIn('fluxo', $fluxo)
            ->orderBy($ordem, 'desc')
            ->paginate($quantPag);

        return Inertia::render('Erros/Index', [
            'erros' => $erros,
            'ordem' => $ordem,
            'fluxo' => $request->fluxo ?? 'todas',
            'pesquisar' => $pesquisar,
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
     * Display the specified resource.
     */
    public function show(Erros $erros)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Erros $erros)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Erros $erros)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Erros $erros)
    {
        //
    }
}
