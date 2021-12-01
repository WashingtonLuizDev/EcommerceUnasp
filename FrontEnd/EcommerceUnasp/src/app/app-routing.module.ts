import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesListaComponent } from './components/cliente/clientes-lista.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { ClienteEditarComponent } from './components/cliente/cliente-editar.component';

const routes: Routes = [
  {path: 'lista-clientes', component: ClientesListaComponent},
  {path: 'cliente', component: ClienteComponent},
  {path: "editar/:id", component: ClienteEditarComponent},
  {path: 'lista-produtos', component: ClientesListaComponent},
  {path: 'lista-categoria', component: ClientesListaComponent},
  {path: 'pedido', component: ClientesListaComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    HttpClientModule
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
