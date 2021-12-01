import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClienteService } from 'src/app/services/cliente.service';
import { Cliente } from 'src/app/models/cliente.model';

@Component({
    selector: 'app-cliente',
    templateUrl: './cliente-editar.component.html',
    styleUrls: ['./cliente.component.css']  
})

export class ClienteEditarComponent implements OnInit {
  
  id: string = "";
  cliente!: Cliente;
  
  constructor(
       private route: ActivatedRoute,
        private clienteService: ClienteService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id || "";
    this.clienteService.getById(this.id).subscribe(
      res => this.cliente = res
    )
 }

updateCliente() {
  this.clienteService.put(this.cliente).subscribe(
    res => {
      alert(`Cliente Atualizado!!!`)
  });
}
}