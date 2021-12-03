import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pedido } from '../models/pedido.model';
import { Produto } from '../models/produto.model';
import { ItensPedidos } from '../models/itens-pedidos.model';
@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  carrinho: ItensPedidos[] = [];

  constructor(private http: HttpClient) { }

  comprar(pedido: Pedido) {
    return this.http.post<Pedido>("http://localhost:13326/api/Pedido", pedido);
  }

  put(pedido: Pedido) {
    return this.http.put<Pedido>("http://localhost:13326/api/Pedido", pedido);
  }

  get() {
    return this.http.get<Pedido>("http://localhost:13326/api/Pedido");
  }

  getById(id: number) {
    return this.http.get<Pedido>("http://localhost:13326/api/Pedido" + id);
  }

  delete(id: number) {
    this.http.delete<Pedido>("http://localhost:13326/api/Pedido" + id);
  }
}
