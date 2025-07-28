import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { FornecedorCrudComponent } from './views/fornecedor-crud/fornecedor-crud.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { ProductUpdateComponent } from './component/product/product-update/product-update.component';
import { ProductDeleteComponent } from './component/product/product-delete/product-delete.component';
import { ProductCreateComponent } from './component/product/product-create/product-create.component';
import { ClienteCrudComponent } from './views/cliente-crud/cliente-crud.component';
import { ClienteCreateComponent } from './component/cliente/cliente-create/cliente-create.component';
import { FornecedorCreateComponent } from './component/fornecedor/fornecedor-create/fornecedor-create.component';
import { FormaPagamentoCrudComponent } from './views/forma-pagamento-crud/forma-pagamento-crud.component';
import { FormaPagamentoCreateComponent } from './component/formaPagamento/forma-pagamento-create/forma-pagamento-create.component';
import { FormaPagamentoDeleteComponent } from './component/formaPagamento/forma-pagamento-delete/forma-pagamento-delete.component';
import { FormaPagamentoUpdateComponent } from './component/formaPagamento/forma-pagamento-update/forma-pagamento-update.component';
import { ClienteUpdateComponent } from './component/cliente/cliente-update/cliente-update.component';
import { ClienteDeleteComponent } from './component/cliente/cliente-delete/cliente-delete.component';
import { ProductVisuComponent } from './component/product/product-visu/product-visu.component';

const routes: Routes = [
  { path: "", component: HomeComponent },

  // Products
  { path: "products", component: ProductCrudComponent },
  { path: "products/create", component: ProductCreateComponent },
  { path: "products/update/:id", component: ProductUpdateComponent },
  { path: "products/delete/:id", component: ProductDeleteComponent },
  { path: 'products/visu/:id', component: ProductVisuComponent },

  // Formas de Pagamento
{ path: "formaPagamento", component: FormaPagamentoCrudComponent },
{ path: "formaPagamento/create", component: FormaPagamentoCreateComponent },
{ path: "formaPagamento/update/:id", component: FormaPagamentoUpdateComponent },
{ path: "formaPagamento/delete/:id", component: FormaPagamentoDeleteComponent },

  // Fornecedores
  { path: "fornecedor", component: FornecedorCrudComponent },
  { path: "fornecedor/create", component: FornecedorCreateComponent },

  // Clientes
  { path: "cliente", component: ClienteCrudComponent },
  { path: "cliente/create", component: ClienteCreateComponent },
  {path: "cliente/update/:id", component: ClienteUpdateComponent},
  {path: "cliente/delete/:id", component: ClienteDeleteComponent}

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
