<?php

namespace App\Imports;

use App\Models\Contato;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\Importable;
use Maatwebsite\Excel\Concerns\WithStartRow;
use Maatwebsite\Excel\Concerns\SkipsEmptyRows;
use Maatwebsite\Excel\Concerns\WithSkipDuplicates;

class ContatoImport implements ToModel, SkipsEmptyRows, WithSkipDuplicates, WithStartRow
{
    use Importable;

    /**
    * @param array $row
    *
    * @return \Illuminate\Database\Eloquent\Model|null
    */
    public function model(array $row)
    {
        return new Contato([
            'name'              => $row[0],
            'numero'            => $row[1],
            'email'             => $row[2],
        ]);
    }

    public function startRow(): int
    {
        return 2;
    }
}
