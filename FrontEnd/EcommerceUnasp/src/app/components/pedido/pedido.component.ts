import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ItensPedidos } from 'src/app/models/itens-pedidos.model';
import { Produto } from 'src/app/models/produto.model';
import { PedidoService } from 'src/app/services/pedido.service';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {

  itens: Produto[] = [];

  constructor(
    private produtoService: ProdutosService,
    private pedidoService: PedidoService
  ) { }

  ngOnInit(): void {
    this.produtoService.get().subscribe((produtos: Produto[]) => {
      this.itens = produtos;
    })
  }

  incluirNoCarrinho(produto: Produto) {
    let itemPedido: ItensPedidos = new ItensPedidos;
    itemPedido.produtoId = produto.id;
    itemPedido.quantidade = 1;
    itemPedido.valorTotal = produto.valor;
    itemPedido.valorUnitario = produto.valor;
    itemPedido.produto = produto;

    this.pedidoService.carrinho.push(itemPedido);
    alert(`Produto ${produto.titulo} adicionado com sucesso.`);
  }

}
