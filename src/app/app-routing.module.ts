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
import { FormaPagamentoCrudComponent } from './views/forma-pagamento-crud/forma-pagamento-crud.component';
import { FormaPagamentoCreateComponent } from './component/formaPagamento/forma-pagamento-create/forma-pagamento-create.component';
import { FormaPagamentoDeleteComponent } from './component/formaPagamento/forma-pagamento-delete/forma-pagamento-delete.component';
import { FormaPagamentoUpdateComponent } from './component/formaPagamento/forma-pagamento-update/forma-pagamento-update.component';

const routes: Routes = [
  { path: "", component: HomeComponent },

  // Products
  { path: "products", component: ProductCrudComponent },
  { path: "products/create", component: ProductCreateComponent },
  { path: "products/update/:id", component: ProductUpdateComponent },
  { path: "products/delete/:id", component: ProductDeleteComponent },

  // Formas de Pagamento
  { path: "formas-pagamento", component: FormaPagamentoCrudComponent },
  { path: "formas-pagamento/create", component: FormaPagamentoCreateComponent },
  { path: "formas-pagamento/update/:id", component: FormaPagamentoUpdateComponent },
  { path: "formas-pagamento/delete/:id", component: FormaPagamentoDeleteComponent },

  // Fornecedores
  { path: "fornecedores", component: FornecedorCrudComponent },
  { path: "fornecedores/create", component: FornecedorCreateComponent },

  // Clientes
  { path: "clientes", component: ClienteCrudComponent },
  { path: "clientes/create", component: ClienteCreateComponent },

  // Rota coringa (opcional)
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
