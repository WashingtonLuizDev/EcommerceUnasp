import { Injectable } from '@angular/core';
import { Cliente } from '../models/cliente.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  cliente!: Cliente;

  constructor(private http: HttpClient) { }

  login(cliente: Cliente) {
    return this.http.post<Cliente>("http://localhost:13326/api/Cliente/login", cliente);
  }

  post(cliente: Cliente) {
    return this.http.post<Cliente>("http://localhost:13326/api/Cliente", cliente);
  }

  put(cliente: Cliente): Observable<any> {
    return this.http.put<Cliente>("http://localhost:13326/api/Cliente", cliente);
  }

  get() {
    return this.http.get<Cliente[]>("http://localhost:13326/api/Cliente");
  }

  getById(id: string) {
    return this.http.get<Cliente>(`${"http://localhost:13326/api/Cliente/"}${id}`);
  }

  delete(id: number) {
    return this.http.delete("http://localhost:13326/api/Cliente/" + id);
  }

}