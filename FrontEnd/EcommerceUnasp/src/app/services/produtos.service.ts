import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produto } from '../models/produto.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(private http: HttpClient) { }

  post(produto: Produto) {
    return this.http.post<Produto>("http://localhost:13326/api/Produto", produto)
  }

  put(produto: Produto) {
    return this.http.put<Produto>("http://localhost:13326/api/Produto", produto)
  }

  get() {
    return this.http.get<Produto[]>("http://localhost:13326/api/Produto")
  }

  getById(id: number) {
    return this.http.get<Produto>("http://localhost:13326/api/Produto/" + id)
  }

  delete(id: number) {
    return this.http.delete<Produto>("http://localhost:13326/api/Produto/" + id)
  }

}
