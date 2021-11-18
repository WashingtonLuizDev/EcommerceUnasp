import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Categoria } from '../models/categoria.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http: HttpClient) { }

  post(categoria: Categoria) {
    return this.http.post<Categoria>("http://localhost:13326/api/Categoria", categoria);
  }

  put(categoria: Categoria) {
    return this.http.put<Categoria>("http://localhost:13326/api/Categoria", categoria);
  }

  get() {
    return this.http.get<Categoria>("http://localhost:13326/api/Categoria");
  }

  getById(id: number) {
    return this.http.get<Categoria>("http://localhost:13326/api/Categoria" + id);
  }

  delete(id: number) {
    this.http.delete<Categoria>("http://localhost:13326/api/Categoria" + id);
  }
}
