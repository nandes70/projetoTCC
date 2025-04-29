import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { FornecedorCrudComponent } from './views/fornecedor-crud/fornecedor-crud.component';
import { ProductCreateComponent } from './component/product/product-create/product-create.component';
import { ClienteCrudComponent } from './views/cliente-crud/cliente-crud.component';
import { ClienteCreateComponent } from './component/cliente/cliente-create/cliente-create.component';
import { FornecedorCreateComponent } from './component/fornecedor/fornecedor-create/fornecedor-create.component';
import { ProductUpdateComponent } from './component/product/product-update/product-update.component';
import { ProductDeleteComponent } from './component/product/product-delete/product-delete.component';

const routes: Routes = [
{
  path: "",
  component: HomeComponent 
},
///////////////////////////products
{
  path: "products",
  component: ProductCrudComponent
},
{
  path: "products/create",
  component: ProductCreateComponent
},
/*-----*/
{
  path: "products/update/:id",
  component: ProductUpdateComponent
},
/*-----*/
{
  path: "products/delete/:id",
  component: ProductDeleteComponent
},
///////////////////////////products FIM

///////////////////////////formaPagamento
/*{
  path: "formaPagamento",
  component: FormaPagamentoCrudComponent
},
{
  path: "formaPagamento/create",
  component: FormaPagamentoCreateComponent
},*/
///////////////////////////formaPagamento FIM

///////////////////////////fornecedores
{
  path: "fornecedores",
  component: FornecedorCrudComponent
},
{
  path: "fornecedor/create",
  component: FornecedorCreateComponent
},
///////////////////////////fornecedores FIM

///////////////////////////Cliente
{
  path: "clientes",
  component: ClienteCrudComponent
},
{
  path: "cliente/create",
  component: ClienteCreateComponent
},
///////////////////////////Cliente FIM
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
