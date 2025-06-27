<?php

namespace App\Http\Controllers;

use App\Helpers\Helper;
use App\Models\Contato;
use App\Models\SessaoAtendimento;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ServiceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $sessoes = SessaoAtendimento::with('contato')->where('status', '!=', 'Concluido')->get();
        $messages = [];
        return Inertia::render('Service/Index', [
            'messages' => $messages,
            'sessoes' => $sessoes
        ]);
    }

    /**
     * Display a listing of the resource.
     */
    public function encerrar(Request $request)
    {
        if ($request->encerrar){
            $sessao = SessaoAtendimento::where('id', $request->sessao_id)->first();
            $sessao->update([
                'status' => 'Concluido'
            ]);
        }
        return redirect()->route('service.index')->with('success', 'Mensagem enviada com sucesso!');
    }

    /**
     * Display a listing of the resource.
     */
    public function new(Request $request)
    {
        // Validação dos dados
        $request->validate([
            'numero' => 'required',
        ]);

        $what = array( '(', ')', ' ', '-');
        $by   = array( '', '', '', '');
        $numero = str_replace($what, $by, $request->numero);

        $contato = Contato::where('numero', $numero)->first();
        if (!$contato){
            $contato = Contato::create([
                'numero' => $numero,
                'user_id' => auth()->id(),
            ]);
        }

        $sessao = SessaoAtendimento::create([
            'contato_id' => $contato->id,
            'user_id' => auth()->id(),
            'protocolo' => Helper::protocolo('AT'),
            'status' => 'Atendimento',
        ]);

        return redirect()->route('service.messages.contato', [$contato->id, $sessao->protocolo])->with('success', 'Mensagem enviada com sucesso!');
    }
}
