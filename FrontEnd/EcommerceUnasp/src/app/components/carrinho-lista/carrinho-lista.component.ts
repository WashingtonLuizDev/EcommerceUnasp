import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente.model';
import { Produto } from 'src/app/models/produto.model';
import { ItensPedidoService } from 'src/app/services/itens-pedido.service';
import { ProdutosService } from 'src/app/services/produtos.service';
import { ItensPedidos } from '../../models/itens-pedidos.model';
import { Pedido } from '../../models/pedido.model';
import { ClienteService } from '../../services/cliente.service';
import { PedidoService } from '../../services/pedido.service';

@Component({
  selector: 'app-carrinho-lista',
  templateUrl: './carrinho-lista.component.html',
  styleUrls: ['./carrinho-lista.component.css']
})
export class CarrinhoListaComponent implements OnInit {

  itensPedido: ItensPedidos[] = [];
  produto!: Produto;

  constructor(
    private pedidoService: PedidoService,
    private clienteService: ClienteService,
    private itensPedidoService: ItensPedidoService
    ) { }

  ngOnInit(): void {
    this.itensPedido = this.pedidoService.carrinho;
  }
  
  confirmarCompra(){

    this.clienteService.getById('4').subscribe((clienteResponse: Cliente) => {
      this.clienteService.cliente = clienteResponse;
      if(this.clienteService.cliente == undefined)
      {
        alert("Cliente não cadastrado.");
        return;
      } else {
        let pedido: Pedido = new Pedido();
        pedido.clienteId = this.clienteService.cliente.id;
        pedido.valor = 100;
        pedido.valorFrete = 10;
        pedido.isAtivo = true;
        
        this.pedidoService.comprar(pedido).subscribe((pedidoResponse: Pedido) => {
          
          this.itensPedido.forEach(iten => {
            iten.pedidoId = pedidoResponse.id
          });

          this.itensPedidoService.post(this.itensPedido).subscribe(() =>
          {
            alert("Obrigado por comprar conosco!");
          })
        })
      }
    });    
  }

}
