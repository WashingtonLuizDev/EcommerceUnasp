
import {Component, OnInit} from '@angular/core';
import { Cliente } from 'src/app/models/cliente.model';
import { ClienteService } from 'src/app/services/cliente.service';
@Component({
    selector : 'clientes-lista',
    templateUrl: 'clientes-lista.component.html'
})
export class ClientesListaComponent implements OnInit {
    
    clientes: Cliente[] = [];
    cliente: Cliente = new Cliente();

    constructor(
        private clienteService : ClienteService
        ){}

    ngOnInit(): void{
        this.clienteService.get().subscribe(
            (clientes: Cliente[]) =>{
                this.clientes = clientes;
            }
        )
        
    }

    deletar(idCliente: number){
        this.clienteService.delete(idCliente).subscribe();
        window.location.reload();
    }

    RowSelected(cliente: Cliente){
        debugger
        this.cliente=cliente;   // declare variable in component.
    }


}