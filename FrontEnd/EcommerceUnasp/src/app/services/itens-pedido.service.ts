import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ItensPedidos } from '../models/itens-pedidos.model';
@Injectable({
  providedIn: 'root'
})
export class ItensPedidoService {

  constructor(private http: HttpClient) { }

  post(itensPedido: ItensPedidos[]) {
    return this.http.post<ItensPedidos>("http://localhost:13326/api/itensPedido", itensPedido);
  }

  put(itensPedido: ItensPedidos) {
    return this.http.put<ItensPedidos>("http://localhost:13326/api/itensPedido", itensPedido);
  }

  get() {
    return this.http.get<ItensPedidos>("http://localhost:13326/api/itensPedido");
  }

  getById(id: number) {
    return this.http.get<ItensPedidos>("http://localhost:13326/api/itensPedido" + id);
  }

  delete(id: number) {
    this.http.delete<ItensPedidos>("http://localhost:13326/api/itensPedido" + id);
  }
}
