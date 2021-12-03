import { Produto } from "./produto.model";

export class ItensPedidos {
  id !: number;
  pedidoId !: number;
  produtoId !: number;
  quantidade !: number;
  valorUnitario !: number;
  valorTotal !: number;
  produto!: Produto
}