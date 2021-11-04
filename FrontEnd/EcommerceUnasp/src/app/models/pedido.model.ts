export class Pedido {
  id !: number;
  clienteId !: number;
  carrinhoId !: number;
  isAtivo !: boolean;
  isFinalizado !: boolean;
  valorFrete !: number;
  valor !: number;
}