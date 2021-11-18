import { Injectable } from '@angular/core';
import { Cliente } from '../models/cliente.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  //Inserir no banco de dados.
  post(cliente: Cliente) {
    /*return pois o backend retornará um objeto
     this.http.post para chamar o metodo POST do backend
     <Cliente> especificando o tipo de objeto que será retornado pelo backend
     "http://localhost:13326/api/Cliente" vulgo EndPoint do backend para o cliente.
     estamos passando o objeto que queremos inserir no banco de dados.*/
    return this.http.post<Cliente>("http://localhost:13326/api/Cliente", cliente);
  }

  //Alterar os dados no banco de dados.
  put(cliente: Cliente) {
    return this.http.put<Cliente>("http://localhost:13326/api/Cliente", cliente);
  }

  //Consultar TODOS os clientes.
  get() {
    return this.http.get<Cliente[]>("http://localhost:13326/api/Cliente");
  }

  //Consultar um cliente especifico.
  getById(id: number) {
    return this.http.get<Cliente>("http://localhost:13326/api/Cliente/" + id);
  }

  //Remover um cliente usando o Id.
  delete(id: number) {
    this.http.delete<Cliente>("http://localhost:13326/api/Cliente/" + id);
  }

}