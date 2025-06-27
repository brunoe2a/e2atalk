<?php

namespace App\Http\Controllers;

use App\Helpers\Helper;
use App\Models\Acesso;
use App\Models\Canal;
use App\Models\Funcao;
use App\Models\IntegranteCanal;
use App\Models\Modulo;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $ordem = $request->ordem ?? 'id';
        $quantPag = $request->quantpag ?? 15;
        $pesquisar = $request->pesquisar ?? '';

        $usuarios = User::with('integrante.canal', 'integrante.funcao', 'logado')
            ->where('name', 'like', '%'.$pesquisar.'%')
            ->orWhere('id', $pesquisar)
            ->orderBy($ordem, 'asc')
            ->paginate($quantPag);

        $usuarios->each(function ($user) {
            $user->dt_criacao = Helper::dataParaBrasil($user->created_at);
        });

        return Inertia::render('User/Index', [
            'usuarios' => $usuarios,
            'ordem' => $ordem,
            'pesquisar' => $pesquisar
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $acessos = Helper::acessosCheckbox('');

        $permissao = Acesso::where('user_id', auth()->user()->id)->where('modulo_id', 1)->first();
        if ($permissao->create == 'S'){
            $modulos = Modulo::all();
        }else{
            $modulos = Modulo::where('id', '!=', 1)->get();
        }

        $canais = Canal::with('funcoes')->get();

        return Inertia::render('User/Create', [
            'canais' => $canais,
            'modulos' => $modulos,
            'permissao' => $acessos,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // VALIDAÇÃO DO FORMULÁRIO
        $regras = [
            'name' => 'required',
            'email' => 'required|unique:users',
            'password' => 'required',
            'cpf' => 'unique:users',
        ];

        $feedback = [
            'unique' => ':attribute cadastrado!',
            'required' => ':attribute é obrigatório!',
        ];

        $request->validate($regras, $feedback);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'telefone' => $request->telefone ?? null,
            'cpf' => $request->cpf ?? null,
            'password' => Hash::make($request->password),
        ]);

        Foreach ($request->permissao as $key => $acesso){
            $modulo = Modulo::select('id')->where('chave', $key)->first();
            Acesso::create([
                'user_id' => $user->id,
                'modulo_id' => $modulo->id,
                'index' => $acesso['index'] ? 'S' :'N',
                'create' => $acesso['create'] ? 'S' :'N',
                'edit' => $acesso['edit'] ? 'S' :'N',
                'delete' => $acesso['delete'] ? 'S' :'N'
            ]);
        }

        if ($request->canal){
            Foreach ($request->canal as $keyCanal => $c){
                Foreach ($request->funcao as $keyFuncao => $f){
                    $funcao = Funcao::where('id', $keyFuncao)->where('canal_id', $keyCanal)->first();
                    if ($funcao){
                        IntegranteCanal::create([
                            'user_id' => $user->id,
                            'canal_id' => $keyCanal,
                            'funcao_id' => $keyFuncao
                        ]);
                    }
                }
            }
        }

        $message = [
            'tipo' => 'success',
            'texto' => 'Usuário '.$user->name.' foi cadastrado com sucesso!',
        ];

        return redirect()->route('usuario.index')->with('message', $message);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $user = User::with('integrante.canal', 'integrante.funcao')
            ->where('id', $id)
            ->first();

        $integrante = IntegranteCanal::with('canal', 'funcao')->where('user_id', $id)->get();

        return Inertia::render('User/show', [
            'user' => $user,
            'integrante' => $integrante
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $user = User::where('id', $id)->first();
        $acessos = Helper::acessosCheckbox($user);

        $permissao = Acesso::where('user_id', auth()->user()->id)->where('modulo_id', 1)->first();
        if ($permissao->create == 'S'){
            $modulos = Modulo::all();
        }else{
            $modulos = Modulo::where('id', '!=', 1)->get();
        }

        $canal = [];
        $funcao = [];
        $integrante = IntegranteCanal::where('user_id', $id)->get();
        Foreach ($integrante as $i){
            $canal[$i->canal_id] = true;
            $funcao[$i->funcao_id] = true;
        }

        $canais = Canal::with('funcoes')->get();

        return Inertia::render('User/Edit', [
            'user' => $user,
            'canal' => $canal,
            'funcao' => $funcao,
            'canais' => $canais,
            'modulos' => $modulos,
            'permissao' => $acessos
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function editPassword(Request $request)
    {
        $request->validate(
            ['password' => 'required'],
            ['required' => 'A Senha é obrigatória!']
        );

        $user = User::where('id', $request->id)->first();
        $user->update([
            'password' => Hash::make($request->password),
        ]);

        $message = [
            'tipo' => 'success',
            'texto' => 'A senha do usuário '.$user->name.' foi alterada com sucesso!',
        ];
        return redirect()->route('usuario.index')->with('message', $message);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        // VALIDAÇÃO DO FORMULÁRIO
        $regras = [
            'name' => 'required',
            'email' => 'required',
        ];

        $feedback = [
            'required' => ':attribute é obrigatório!',
        ];

        $request->validate($regras, $feedback);

        $user = User::where('id', $id)->first();
        $user->update([
            'name' => $request->name,
            'email' => $request->email,
            'telefone' => $request->telefone ?? null,
            'cpf' => $request->cpf ?? null,
        ]);

        Foreach ($request->permissao as $key => $acesso){
            if ($acesso['id']){
                $a = Acesso::where('id', $acesso['id'])->first();
                $a->update([
                    'index' => $acesso['index'] ? 'S' :'N',
                    'create' => $acesso['create'] ? 'S' :'N',
                    'edit' => $acesso['edit'] ? 'S' :'N',
                    'delete' => $acesso['delete'] ? 'S' :'N'
                ]);
            }
        }

        if ($request->canal){

            /** Deleta todas as integrações existentes. */
            $integrasCanal = IntegranteCanal::where('user_id', $user->id)->get();
            Foreach ($integrasCanal as $ic){
                $ic->delete();
            }

            /** Remove os valores nulos */
            $canalLimpo = array_filter($request->canal);
            $funcaoLimpo = array_filter($request->funcao);

            /** Cadastra ou recupera as integrações novas. */
            Foreach ($canalLimpo as $keyCanal => $c){
                Foreach ($funcaoLimpo as $keyFuncao => $f){
                    $funcao = Funcao::where('id', $keyFuncao)->where('canal_id', $keyCanal)->first();
                    if ($funcao){
                        $intCanal = IntegranteCanal::onlyTrashed()
                            ->where('user_id', $user->id)
                            ->where('canal_id', $keyCanal)
                            ->where('funcao_id', $keyFuncao)
                            ->first();
                        if ($intCanal){
                            if($intCanal->funcao_id == $keyFuncao){
                                $intCanal->restore();
                            }
                        }else{
                            IntegranteCanal::create([
                                'user_id' => $user->id,
                                'canal_id' => $keyCanal,
                                'funcao_id' => $keyFuncao
                            ]);
                        }
                    }
                }
            }
        }

        $message = [
            'tipo' => 'success',
            'texto' => 'Usuário '.$user->name.' foi alterado com sucesso!',
        ];
        return redirect()->route('usuario.index')->with('message', $message);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $user = User::where('id', $id)->first();
        $user->delete();

        $message = [
            'tipo' => 'success',
            'texto' => 'Usuário '.$user->nome.' foi deletado com sucesso!',
        ];
        return redirect()->route('usuario.index')->with('message', $message);
    }
}
