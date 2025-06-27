import {format} from "date-fns";

export function dataBrasil(valor){
    const date = new Date(valor);
    return format(date, 'dd/MM/yyyy HH:mm');
}
export function moeda(valor){
    return valor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
}
export function codigo(valor) {
    return ("0000" + valor).slice(-4)
}
