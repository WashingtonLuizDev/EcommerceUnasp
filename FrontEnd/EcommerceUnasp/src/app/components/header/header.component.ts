import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private clienteService: ClienteService
    ) { }

  ngOnInit(): void {
  }

  clienteLogado(){
    return this.clienteService.cliente != undefined;
  }

  administradorLogado(){
    if(this.clienteService.cliente != undefined)
     return this.clienteService.cliente.isAdministrador;
    else 
      return false;
  }

  nomeCliente(){
    if(this.clienteService.cliente != null)
      return this.clienteService.cliente.nome;
      else  return "Cliente não fez login!";
  }

}
