<?php

namespace App\Helpers;

use App\Models\Acesso;
use App\Models\Log;
use App\Models\Modulo;
use App\Models\Protocolo;
use Illuminate\Support\Facades\DB;
use FFMpeg\FFMpeg;
use FFMpeg\Format\Audio\Mp3;
use Illuminate\Support\Facades\Storage;

class Helper
{

    /**
     * Converte arquivo OGG em MP3.
     */
    public static function convertOggToMp3($oggFilePath)
    {
        // Criar instância do FFmpeg
        $ffmpeg = FFMpeg::create();

        // Abrir o arquivo OGG a partir do disco do Laravel
        $oggFullPath = Storage::disk('public')->path($oggFilePath);
        $audio = $ffmpeg->open($oggFullPath);

        // Caminho para salvar o arquivo convertido MP3
        $mp3FilePath = 'converted_audio/audio_' . time() . '.mp3';

        // Salvar o arquivo convertido no disco (usando caminho absoluto)
        $mp3FullPath = Storage::disk('public')->path($mp3FilePath);
        $audio->save(new Mp3(), $mp3FullPath);

        // Retorna o caminho relativo para o arquivo MP3 armazenado no disco
        return $mp3FilePath;
    }

    /**
     * Prepare date to register in the mysql database.
     * @param $data
     * @return string
     */
    public static function dataParaMySQL($data): string
    {
        return implode('-', array_reverse(explode('/', $data)));
    }

    /**
     * Converte minuto em segundos.
     * @param int $minutos
     * @return integer
     */
    public static function minutosParaSegundos(int $minutos): int
    {
        return $minutos * 60;
    }

    /**
     * Prepare date to register in the mysql database.
     * @param $Valor
     * @param $UnidadeOrigem
     * @return string
     */
    public static function converterSize ($Valor, $UnidadeOrigem, $Precisão = 2)
    {
        $Unidades = array (
            'B' => 1,
            'KiB' => 1000, 'MiB' => 1000000, 'GiB' => 1000000000, 'TiB' => 1000000000,
            'KB' => 1024, 'MB' => 1048576, 'GB' => 1073741824, 'TB' => 1099511627776
        );

        $UnidadeDestino = 'B';

        if ($Valor > $Unidades['KB'] && $Valor < $Unidades['MB']){
            $UnidadeDestino = 'KB';
        }elseif ($Valor > $Unidades['MB'] && $Valor < $Unidades['GB']){
            $UnidadeDestino = 'MB';
        }elseif ($Valor > $Unidades['GB'] && $Valor < $Unidades['TB']){
            $UnidadeDestino = 'GB';
        }elseif ($Valor > $Unidades['TB']){
            $UnidadeDestino = 'TB';
        }

        $ValorBytes = $Valor * $Unidades [$UnidadeOrigem];

        return round($ValorBytes / $Unidades [$UnidadeDestino], $Precisão) . ' '.$UnidadeDestino;
    }

    /**
     * Prepare datetime to register in the mysql database.
     * @param $data
     * @return string
     */
    public static function dataTimeParaMySQL($data):string
    {
        date_default_timezone_set('America/Cuiaba');
        return date('Y-m-d H:i:s',  strtotime($data));
    }

    /**
     * Prepare datetime to register in the mysql database.
     * @return string
     */
    public static function agoraMySQL():string
    {
        date_default_timezone_set('America/Cuiaba');
        return date('Y-m-d H:i:s', strtotime('+4 hours'));
    }

    /**
     * Prepare datetime to register in the mysql database.
     * @return string
     */
    public static function agora():string
    {
        date_default_timezone_set('America/Cuiaba');
        return date('d/m/Y H:i');
        // return date('d/m/Y H:i', strtotime('+4 hours'));
    }

    /**
     * Converts the mysql database date to Brazilian format.
     * @param $data
     * @return string
     */
    public static function dataParaBrasil($data):string
    {
        return date('d/m/Y',  strtotime($data));
    }

    /**
     * Converts the mysql database datetime to Brazilian format.
     * @param $data
     * @return string
     */
    public static function dataTimeParaBrasil($data):string
    {
        return date('d/m/Y H:i',  strtotime($data));
    }

    /**
     * Converts the mysql database datetime to Brazilian format.
     * @return object
     */
    public static function chartPie():object
    {
        $label = [];
        $serie = [];

        $topTipos = Documento::select('tipo_id', DB::raw('COUNT(tipo_id) as total_tipo'))
            ->groupBy('tipo_id')
            ->orderBy('total_tipo', 'desc')
            ->take(5)
            ->get();

        foreach ($topTipos as $d){
            $tipo = TipoDoc::where('id', $d->tipo_id)->first();
            $label[] = $tipo->nome;
            $serie[] = $d->total_tipo;
        }

        $retorno = (Object)[
            'labels' => $label,
            'series' => $serie
        ];

        return $retorno;
    }

    /**
     * Converts the mysql database datetime to Brazilian format.
     * @return object
     */
    public static function chartDocsTimeLine():object
    {
        $categories = [];
        $serie = [];

        for ($i = 0; $i <= 20; $i++) {
            $dta = date('Y-m-d', strtotime('-'.$i.' days'));
            $dataInicial = $dta . ' 00:00:00';
            $dataFim = $dta . ' 23:59:59';
            $serie[] = Documento::whereBetween('created_at', [$dataInicial, $dataFim])->count();
            $categories[] = $dta;
        }

        $retorno = (Object)[
            'categories' => $categories,
            'series' => $serie
        ];

        return $retorno;
    }

    /**
     * Converts the mysql database datetime to Brazilian format.
     * @return object
     */
    public static function chartBar():object
    {
        $label = [];
        $serie = [];

        $topTipos = Documento::select('tipo_id', DB::raw('COUNT(tipo_id) as total_tipo'))
            ->groupBy('tipo_id')
            ->orderBy('total_tipo', 'desc')
            ->take(5)
            ->get();

        foreach ($topTipos as $d){
            $tipo = TipoDoc::where('id', $d->tipo_id)->first();
            $label[] = $tipo->nome;
            $serie[] = $d->total_tipo;
        }

        $retorno = (Object)[
            'labels' => $label,
            'series' => $serie
        ];

        return $retorno;
    }

    /**
     * Converts the mysql database datetime to Brazilian format.
     * @param $data
     * @return string
     */
    public static function dataTimeLine($data):string
    {
        $dia = date('d',  strtotime($data));

        $mes = date('F',  strtotime($data));
        if ($mes == 'January'){ $mes = 'Janeiro' ;}
        if ($mes == 'February'){ $mes = 'Fevereiro' ;}
        if ($mes == 'March'){ $mes = 'Março' ;}
        if ($mes == 'April'){ $mes = 'Abril' ;}
        if ($mes == 'May'){ $mes = 'Maio' ;}
        if ($mes == 'June'){ $mes = 'Junho' ;}
        if ($mes == 'July'){ $mes = 'Julho' ;}
        if ($mes == 'August'){ $mes = 'Agosto' ;}
        if ($mes == 'September'){ $mes = 'Setembro' ;}
        if ($mes == 'October'){ $mes = 'Outubro' ;}
        if ($mes == 'November'){ $mes = 'Novembro' ;}
        if ($mes == 'December'){ $mes = 'Dezembro' ;}

        $ano = date('Y',  strtotime($data));

        $dataLine = $dia.' de '.$mes.' '.$ano;

        return $dataLine;
    }

    /**
     * Converts the mysql database datetime to Brazilian format.
     * @param $tipo
     * @return string
     */
    public static function protocolo($tipo):string
    {
        $ult_num = Protocolo::where('tipo', $tipo)->latest()->first();
        $numero = $ult_num ? $ult_num->numero + 1 : 1;

        $ano = date('Y');
        $nome = $ano.$tipo.str_pad($numero , 10 , '0' , STR_PAD_LEFT);
        Protocolo::create([
            'nome' => $nome,
            'ano' => $ano,
            'tipo' => $tipo,
            'numero' => $numero
        ]);
        return $nome;
    }

    /**
     * Converts the mysql database datetime to Brazilian format.
     * @param $texto
     * @param $limite
     * @return string
     */
    public static function limitarTexto($texto, $limite):string
    {
        return substr($texto, 0, strrpos(substr($texto, 0, $limite), ' ')) . '...';
    }

    /**
     * Converts the mysql database datetime to Brazilian format.
     * @param $user
     * @return object
     */
    public static function acessos($user)
    {
        if ($user){
            $acessos = [];
            $modulos = Modulo::all();
            Foreach ($modulos as $modulo){
                $acesso = Acesso::where('modulo_id', $modulo->id)->where('user_id', $user->id)->first();
                $acessos[$modulo->chave] = (object)[
                    'section' => $modulo->section,
                    'name' => $modulo->name,
                    'index' => $acesso->index,
                    'create' => $acesso->create,
                    'edit' => $acesso->edit,
                    'delete' => $acesso->delete,
                ];
            }
            return (object)$acessos;
        }else{
            return (object)[
                'error' => 'Acessos não encontrados!'
            ];
        }
    }

    /**
     * Converts the mysql database datetime to Brazilian format.
     * @param $user
     * @return object
     */
    public static function acessosCheckbox($user)
    {
        $acessos = [];
        $permissao = Acesso::where('user_id', auth()->user()->id)->where('modulo_id', 1)->first();
        if ($permissao->edit == 'S'){
            $modulos = Modulo::all();
        }else{
            $modulos = Modulo::where('id', '!=', 1)->get();
        }

        if ($user){
            Foreach ($modulos as $modulo){
                $acesso = Acesso::where('modulo_id', $modulo->id)->where('user_id', $user->id)->first();
                $acessos[$modulo->chave] = (object)[
                    'modulo_id' => $modulo->id,
                    'section' => $modulo->section,
                    'name' => $modulo->name,
                    'index' => ($acesso->index == 'S') ? true : false,
                    'create' => ($acesso->create == 'S') ? true : false,
                    'edit' => ($acesso->edit == 'S') ? true : false,
                    'delete' => ($acesso->delete == 'S') ? true : false,
                ];
            }
        } else{
            Foreach ($modulos as $modulo){
                $acessos[$modulo->chave] = (object)[
                    'section' => $modulo->section,
                    'name' => $modulo->name,
                    'index' => false,
                    'create' => false,
                    'edit' => false,
                    'delete' => false,
                ];
            }
        }
        return (object)$acessos;
    }

    /**
     * Converts the mysql database datetime to Brazilian format.
     * @param $tipo
     * @return object
     */
    public static function verificaTipo($tipo):object
    {
        $tipoDoc = TipoDoc::where('id', $tipo)->first();

        if (!$tipoDoc){
            $tipoDoc = TipoDoc::create([
                'user_id' => auth()->user()->id,
                'nome' => $tipo,
                'descricao' => $tipo,
                'pasta' => self::nomePasta($tipo),
            ]);

            Log::create([
                'user_id' => auth()->user()->id,
                'acao' => 'CADASTRO:',
                'descricao' => 'Tipo de documento '. $tipo . ' foi criado por '. auth()->user()->name . ' dia ' . self::agora()
            ]);
        }

        return $tipoDoc;
    }

    /**
     * Converts the mysql database datetime to Brazilian format.
     * @param $documento
     * @param $partes
     */
    public static function verificaPartes($partes,$documento)
    {
        foreach ($partes as $parte){
            $profissional = Profissional::where('cpf', $parte['Cpf'])->first();
            if ($profissional){
                $p = $profissional;
            }else{
                $p = new Profissional();
                $p->nome = $parte['Profissional'];
                $p->cpf = $parte['Cpf'];
                $p->creci = $parte['Creci'];
                $p->save();

                Log::create([
                    'user_id' => auth()->user()->id,
                    'acao' => 'CADASTRO:',
                    'descricao' => 'Profissional '.$parte['Profissional']. ' foi criado por '. auth()->user()->name . ' dia ' . self::agora()
                ]);
            }

            $pd = new Parte();
            $pd->doc_id = $documento->id;
            $pd->profissional_id = $p->id;
            $pd->save();

            foreach ($parte['Telefone'] as $telefone) {
                $phone = Telefone::where('numero', $telefone['NR_TELEFONE'])->where('profissional_id', $p->id)->first();
                if (!$phone){
                    $t = new Telefone();
                    $t->profissional_id = $p->id;
                    $t->numero = $telefone['NR_TELEFONE'];
                    $t->save();

                    Log::create([
                        'user_id' => auth()->user()->id,
                        'acao' => 'CADASTRO:',
                        'descricao' => 'Telefone '.$telefone['NR_TELEFONE']. ' foi inserido em '.$p->nome.' por '. auth()->user()->name . ' dia ' . self::agora()
                    ]);
                }
            }

            foreach ($parte['Email'] as $email) {
                $mail = Email::where('email', $email['DS_EMAIL'])->where('profissional_id', $p->id)->first();
                if (!$mail){
                    $t = new Email();
                    $t->profissional_id = $p->id;
                    $t->email = $email['DS_EMAIL'];
                    $t->save();

                    Log::create([
                        'user_id' => auth()->user()->id,
                        'acao' => 'CADASTRO:',
                        'descricao' => 'E-mail '.$email['DS_EMAIL']. ' foi inserido em '. $p->nome .' por '. auth()->user()->name . ' dia ' . self::agora()
                    ]);
                }
            }
        }
    }

    /**
     * Converts the mysql database datetime to Brazilian format.
     * @param $documento
     * @param $partes
     */
    public static function verificaPartesPJ($partes,$documento)
    {
        foreach ($partes as $parte){
            $empresa = Empresa::where('cnpj', $parte['Cnpj'])->first();
            if ($empresa){
                $p = $empresa;
            }else{
                $p = new Empresa();
                $p->nome = $parte['Empresa'];
                $p->cnpj = $parte['Cnpj'];
                $p->creci = $parte['Creci'];
                $p->save();

                Log::create([
                    'user_id' => auth()->user()->id,
                    'acao' => 'CADASTRO:',
                    'descricao' => 'Empresa '.$parte['Empresa']. ' foi criado por '. auth()->user()->name . ' dia ' . self::agora()
                ]);
            }

            $pd = new Parte();
            $pd->doc_id = $documento->id;
            $pd->empresa_id = $p->id;
            $pd->save();

            foreach ($parte['Telefone'] as $telefone) {
                $phone = Telefone::where('numero', $telefone['NR_TELEFONE'])->where('empresa_id', $p->id)->first();
                if (!$phone){
                    $t = new Telefone();
                    $t->empresa_id = $p->id;
                    $t->numero = $telefone['NR_TELEFONE'];
                    $t->save();

                    Log::create([
                        'user_id' => auth()->user()->id,
                        'acao' => 'CADASTRO:',
                        'descricao' => 'Telefone '.$telefone['NR_TELEFONE']. ' foi inserido em '.$p->nome.' por '. auth()->user()->name . ' dia ' . self::agora()
                    ]);
                }
            }

            foreach ($parte['Email'] as $email) {
                $mail = Email::where('email', $email['DS_EMAIL'])->where('empresa_id', $p->id)->first();
                if (!$mail){
                    $t = new Email();
                    $t->empresa_id = $p->id;
                    $t->email = $email['DS_EMAIL'];
                    $t->save();

                    Log::create([
                        'user_id' => auth()->user()->id,
                        'acao' => 'CADASTRO:',
                        'descricao' => 'E-mail '.$email['DS_EMAIL']. ' foi inserido em '. $p->nome .' por '. auth()->user()->name . ' dia ' . self::agora()
                    ]);
                }
            }
        }
    }

    /**
     * Converts the mysql database datetime to Brazilian format.
     * @param $string
     * @return string
     */
    public static function nomePasta($string):string
    {
        $string = preg_replace('/[\t\n]/', ' ', $string);
        $string = preg_replace('/\s{2,}/', ' ', $string);
        $list = array(
            'Š' => 'S',
            'š' => 's',
            'Đ' => 'Dj',
            'đ' => 'dj',
            'Ž' => 'Z',
            'ž' => 'z',
            'Č' => 'C',
            'č' => 'c',
            'Ć' => 'C',
            'ć' => 'c',
            'À' => 'A',
            'Á' => 'A',
            'Â' => 'A',
            'Ã' => 'A',
            'Ä' => 'A',
            'Å' => 'A',
            'Æ' => 'A',
            'Ç' => 'C',
            'È' => 'E',
            'É' => 'E',
            'Ê' => 'E',
            'Ë' => 'E',
            'Ì' => 'I',
            'Í' => 'I',
            'Î' => 'I',
            'Ï' => 'I',
            'Ñ' => 'N',
            'Ò' => 'O',
            'Ó' => 'O',
            'Ô' => 'O',
            'Õ' => 'O',
            'Ö' => 'O',
            'Ø' => 'O',
            'Ù' => 'U',
            'Ú' => 'U',
            'Û' => 'U',
            'Ü' => 'U',
            'Ý' => 'Y',
            'Þ' => 'B',
            'ß' => 'Ss',
            'à' => 'a',
            'á' => 'a',
            'â' => 'a',
            'ã' => 'a',
            'ä' => 'a',
            'å' => 'a',
            'æ' => 'a',
            'ç' => 'c',
            'è' => 'e',
            'é' => 'e',
            'ê' => 'e',
            'ë' => 'e',
            'ì' => 'i',
            'í' => 'i',
            'î' => 'i',
            'ï' => 'i',
            'ð' => 'o',
            'ñ' => 'n',
            'ò' => 'o',
            'ó' => 'o',
            'ô' => 'o',
            'õ' => 'o',
            'ö' => 'o',
            'ø' => 'o',
            'ù' => 'u',
            'ú' => 'u',
            'û' => 'u',
            'ý' => 'y',
            'þ' => 'b',
            'ÿ' => 'y',
            'Ŕ' => 'R',
            'ŕ' => 'r',
            '/' => '-',
            '|' => '-',
            ' ' => '-',
            '.' => '-',
            ',' => '-',
            ':' => '-',
            ';' => '-',
            '$' => '-',
            '&' => '-',
            '(' => '-',
            ')' => '-',
            '@' => '-',
            '+' => '-',
            '=' => '-',
            '!' => '',
            '?' => '',
            '%' => '',
            '*' => '',
            '`' => '',
            '´' => '',
            '^' => '',
            'ˆ' => '',
            '~' => '',
            '˜' => '',
            '¨' => '',
            '"' => '',
            "'" => '',
        );

        $string = strtr($string, $list);
        $string = preg_replace('/-{2,}/', '-', $string);
        $string = strtolower($string);

        return $string;
    }
}
