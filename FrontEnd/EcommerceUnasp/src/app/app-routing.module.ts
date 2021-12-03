import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesListaComponent } from './components/cliente/clientes-lista.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { ClienteEditarComponent } from './components/cliente/cliente-editar.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { CarrinhoListaComponent } from './components/carrinho-lista/carrinho-lista.component';
import { ProdutosListaComponent } from './components/produtos/produtos-lista/produtos-lista.component';
import { ProdutosComponent } from './components/produtos/produtos.component';
import { PedidoComponent } from './components/pedido/pedido.component';
import { CadastroClienteComponent } from './components/login/cadastro-cliente/cadastro-cliente.component';

const routes: Routes = [
  { path: 'lista-clientes', component: ClientesListaComponent },
  { path: 'cliente', component: ClienteComponent },
  { path: "editar/:id", component: ClienteEditarComponent },
  { path: 'lista-produtos', component: ProdutosListaComponent },
  { path: 'produto', component: ProdutosComponent },
  { path: 'lista-categoria', component: ClientesListaComponent },
  { path: 'pedido', component: PedidoComponent },
  { path: 'carrinho', component: CarrinhoListaComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cadastroLogin', component: CadastroClienteComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
