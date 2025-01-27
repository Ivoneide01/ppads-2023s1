import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { ClienteCreateComponent } from './components/cliente/cliente-create/cliente-create.component';
import { ClienteDeleteComponent } from './components/cliente/cliente-delete/cliente-delete.component';
import { ClienteListComponent } from './components/cliente/cliente-list/cliente-list.component';
import { ClienteUpdateComponent } from './components/cliente/cliente-update/cliente-update.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavComponent } from './components/nav/nav.component';
import { FornecedorCreateComponent } from "./components/fornecedor/fornecedor-create/FornecedorCreateComponent";
import { FornecedorDeleteComponent } from './components/fornecedor/fornecedor-delete/fornecedor-delete.component';
import { FornecedorListComponent } from './components/fornecedor/fornecedor-list/fornecedor-list.component';
import { FornecedorUpdateComponent } from './components/fornecedor/fornecedor-update/fornecedor-update.component';
import { LivrosListComponent } from './components/livros/livros-list/livros-list.component';
import { LivrosCreateComponent } from './components/livros/livros-create/livros-create.component';
import { LivrosUpdateComponent } from './components/livros/livros-update/livros-update.component';
import { LivrosDeleteComponent } from './components/livros/livros-delete/livros-delete.component';
import { PedidoListComponent } from './components/pedido/pedido-list/pedido-list.component';
import { PedidoCreateComponent } from './components/pedido/pedido-create/pedido-create.component';
import { PedidoUpdateComponent } from './components/pedido/pedido-update/pedido-update.component';
import { PedidoDeleteComponent } from './components/pedido/pedido-delete/pedido-delete.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path:'', component: NavComponent, canActivate: [AuthGuard], children: [
    { path: 'home', component: HomeComponent },
    { path: 'fornecedores', component: FornecedorListComponent },
    { path: 'fornecedores/create', component: FornecedorCreateComponent },
    { path: 'fornecedores/update/:id', component: FornecedorUpdateComponent },
    { path: 'fornecedores/delete/:id', component: FornecedorDeleteComponent },
    { path: 'clientes', component: ClienteListComponent },
    { path: 'clientes/create', component: ClienteCreateComponent },
    { path: 'clientes/update/:id', component: ClienteUpdateComponent },
    { path: 'clientes/delete/:id', component: ClienteDeleteComponent },
    { path: 'livros', component: LivrosListComponent },
    { path: 'livros/create', component: LivrosCreateComponent },
    { path: 'livros/update/:id', component: LivrosUpdateComponent},
    { path: 'livros/delete/:id', component: LivrosDeleteComponent},
    { path: 'pedidos', component: PedidoListComponent },
    { path: 'pedidos/create', component: PedidoCreateComponent },
    { path: 'pedidos/update/:id', component: PedidoUpdateComponent },
    { path: 'pedidos/delete/:id', component: PedidoDeleteComponent }

  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
