import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Endereco } from '../models/endereco.model';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  constructor(private http: HttpClient) { }

  post(endereco: Endereco) {
    return this.http.post<Endereco>("http://localhost:13326/api/Endereco", endereco);
  }

  put(endereco: Endereco) {
    return this.http.put<Endereco>("http://localhost:13326/api/Endereco", endereco);
  }

  get() {
    return this.http.get<Endereco>("http://localhost:13326/api/Endereco");
  }

  getById(id: number) {
    return this.http.get<Endereco>("http://localhost:13326/api/Endereco" + id);
  }

  delete(id: number) {
    this.http.delete<Endereco>("http://localhost:13326/api/Endereco" + id);
  }
}
