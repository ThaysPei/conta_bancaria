import {Conta} from './model/Conta';

export interface ContaRepository {

    procurarPorNumero7(numero: number): void;
    listarTodas():void;
    cadastrar(conta:conta): void;
    atualizar(conta:conta): void;
    deletar(numero: number):void;

    sacar(numero: number, valor: number):void;
    depositar(numero: number, valor: number): void;
    transferir(numeroOrigem: number, numeroDestino: number, valor: number): void;
}