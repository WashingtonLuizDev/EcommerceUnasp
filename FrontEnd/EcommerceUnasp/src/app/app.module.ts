import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProdutosComponent } from './components/produtos/produtos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ClienteComponent } from './components/cliente/cliente.component';
import { ClientesListaComponent } from './components/cliente/clientes-lista.component';
import { ClienteEditarComponent } from './components/cliente/cliente-editar.component';
import { HomeComponent } from './components/home/home.component';
import { CategoriaComponent } from './components/categoria/categoria.component';
import { LoginComponent } from './components/login/login.component';
import { ProdutosListaComponent } from './components/produtos/produtos-lista/produtos-lista.component';
import { CarrinhoListaComponent } from './components/carrinho-lista/carrinho-lista.component';
import { PedidoComponent } from './components/pedido/pedido.component';
import { CadastroClienteComponent } from './components/login/cadastro-cliente/cadastro-cliente.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProdutosComponent,
    ClienteComponent,
    ClientesListaComponent,
    ClienteEditarComponent,
    HomeComponent,
    CategoriaComponent,
    PedidoComponent,
    LoginComponent,
    ProdutosListaComponent,
    CarrinhoListaComponent,
    PedidoComponent,
    CadastroClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports: [ClientesListaComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
