import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { FormaPagamentoCrudComponent } from './views/forma-pagamento-crud/forma-pagamento-crud.component';
import { FornecedorCrudComponent } from './views/fornecedor-crud/fornecedor-crud.component';
import { ProductCreateComponent } from './component/product/product-create/product-create.component';
import { ClienteCrudComponent } from './views/cliente-crud/cliente-crud.component';
import { ClienteCreateComponent } from './component/cliente/cliente-create/cliente-create.component';

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
///////////////////////////products FIM

///////////////////////////formaPagamento
{
  path: "formaPagamento",
  component: FormaPagamentoCrudComponent
},
/*{
  path: "formaPagamento/create",
  component: FormaPagamentoCreateComponent
},*/
///////////////////////////formaPagamento FIM

///////////////////////////fornecedores
{
  path: "fornecedores",
  component: FornecedorCrudComponent
},
/*{
  path: "fornecedores/create",
  component: FornecedorCreateComponent
},*/
///////////////////////////fornecedores FIM

///////////////////////////Cliente
{
  path: "cliente",
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
