import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pedido } from '../models/pedido.model';
@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  constructor(private http: HttpClient) { }

  post(pedido: Pedido) {
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
