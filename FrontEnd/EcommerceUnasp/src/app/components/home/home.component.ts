import { Component, OnInit } from '@angular/core';
import { ItensPedidos } from 'src/app/models/itens-pedidos.model';
import { Produto } from 'src/app/models/produto.model';
import { PedidoService } from 'src/app/services/pedido.service';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  itens: ItensPedidos[] = [];
  produtos: Produto[] = [];

  constructor(
    private produtoService: ProdutosService,
    private pedidoService: PedidoService
    ) { }

  ngOnInit(): void {
    this.produtoService.get().subscribe((produtos:Produto[]) =>
    {
      this.produtos = produtos;
    })
  }

}
