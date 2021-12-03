import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/models/produto.model';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-produtos-lista',
  templateUrl: './produtos-lista.component.html',
  styleUrls: ['./produtos-lista.component.css']
})
export class ProdutosListaComponent implements OnInit {

  produtos: Produto[] = [];

  constructor(private produtoService: ProdutosService) { }

  ngOnInit(): void {
    this.produtoService.get().subscribe((produtos : Produto[]) =>
    {
      this.produtos = produtos;
    })
  }

}
