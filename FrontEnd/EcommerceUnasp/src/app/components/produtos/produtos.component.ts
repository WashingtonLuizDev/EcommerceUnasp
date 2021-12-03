import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Produto } from 'src/app/models/produto.model';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  produto: Produto = new Produto();
  form: FormGroup;
  imagemFormControl = this.formBuild.control('', {
    validators: [Validators.required], updateOn: 'blur'
  })
  tituloFormControl = this.formBuild.control('', {
    validators: [Validators.required], updateOn: 'blur'
  });
  categoriaFormControl = this.formBuild.control('', {
    validators: [Validators.required], updateOn: 'blur'
  });
  descricaoFormControl = this.formBuild.control('', {
    validators: [Validators.required], updateOn: 'blur'
  });
  valorFormControl = this.formBuild.control('', {
    validators: [Validators.required], updateOn: 'blur'
  });

  constructor(private formBuild: FormBuilder,
    private produtoService: ProdutosService,
    private router: Router) {
    this.form = this.formBuild.group({
      imagemFormControl: this.imagemFormControl,
      tituloFormControl: this.tituloFormControl,
      valorFormControl: this.valorFormControl,
      descricaoFormControl: this.descricaoFormControl,
      categoriaFormControl: this.categoriaFormControl
    });
  }


  ngOnInit(): void {
  }

  salvar() {
    //Somente é verdade se todos os Validators forem atendidos
    if (this.form.valid) {
      //Toda variavel não inicializado ou é undefined ou null
      if (this.produto == undefined || this.produto == null)
        this.produto = new Produto(); //Instanciando um Objeto

      this.produto.titulo = this.tituloFormControl.value;
      this.produto.descricao = this.descricaoFormControl.value;
      this.produto.imagem = this.imagemFormControl.value;
      this.produto.valor = this.valorFormControl.value;
      this.produto.categoriaId = this.categoriaFormControl.value;

      //Se a ordem de serviço ainda não existe, então não temos o ID
      if (this.produto.id == undefined || this.produto.id == null) {
        //Caso não tenha ID, vamos inserir atraves do Post
        this.produtoService.post(this.produto).subscribe((produto: Produto) => {
          this.produto = produto; //Variavel do tipo objeto lá de cima receberá o objeto do backend
          this.router.navigate(["/lista-produtos"]);
        });
      } else {
        //Caso já tenhamos ID, atualizaremos atraves do Put
        this.produtoService.put(this.produto).subscribe((produto: Produto) => {
          this.produto = produto; //Variavel do tipo objeto lá de cima receberá o objeto do backend
          this.router.navigate(["/lista-produtos"]);
        });
      }
    }
  }
}
