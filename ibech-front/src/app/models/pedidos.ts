import { Cliente } from "./cliente";

export interface Pedido {
    id?: any;
    cliente: number;
    nomeCliente: String;
    valor: number;
    dataPedido: any;

}