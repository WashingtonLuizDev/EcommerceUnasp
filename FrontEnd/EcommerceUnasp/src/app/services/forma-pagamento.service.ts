import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormaPagamento } from '../models/forma-pagamento.model';

@Injectable({
  providedIn: 'root'
})
export class FormaPagamentoService {

  constructor(private http: HttpClient) { }

  post(formaPagamento: FormaPagamento) {
    return this.http.post<FormaPagamento>("http://localhost:13326/api/formaPagamento", formaPagamento);
  }

  put(formaPagamento: FormaPagamento) {
    return this.http.put<FormaPagamento>("http://localhost:13326/api/formaPagamento", formaPagamento);
  }

  get() {
    return this.http.get<FormaPagamento>("http://localhost:13326/api/formaPagamento");
  }

  getById(id: number) {
    return this.http.get<FormaPagamento>("http://localhost:13326/api/formaPagamento" + id);
  }

  delete(id: number) {
    this.http.delete<FormaPagamento>("http://localhost:13326/api/formaPagamento" + id);
  }
}
