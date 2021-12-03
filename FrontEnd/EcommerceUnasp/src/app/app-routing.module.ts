import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesListaComponent } from './components/cliente/clientes-lista.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { ClienteEditarComponent } from './components/cliente/cliente-editar.component';
import { HomeComponent } from './components/home/home.component';
import { ProdutosComponent } from './components/produtos/produtos.component';
import { CategoriaComponent } from './components/categoria/categoria.component';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
  { path: 'lista-clientes', component: ClientesListaComponent },
  { path: 'cliente', component: ClienteComponent },
  { path: 'editar/:id', component: ClienteEditarComponent },
  { path: 'lista-produtos', component: ProdutosComponent },
  { path: 'lista-categoria', component: CategoriaComponent },
  { path: 'pedido', component: ClientesListaComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
