import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
// O corpo da classe pode conter propriedades e métodos
pageTitle = 'Inicio';
pageIcon = 'home';

routeData: Record<string, { title: string, icon: string }> = {
  '/': { title: 'Inicio', icon: 'home' },

  //produto
  '/products': { title: 'Produtos', icon: 'storefront' },
  '/products/create': { title: 'Novo Produto', icon: 'add_box' + 'storefront' },
  '/products/update': { title: 'Atualiza Produto', icon: 'add_box' + 'storefront' },

  //cliente
  '/clientes': { title: 'Clientes', icon: 'account_circle' },
  '/cliente/create': { title: 'Novo Cliente', icon: 'add_box' + 'account_circle' },

  //fornecedor
  '/fornecedor': { title: 'Fornecedores', icon: 'group' },
  '/fornecedor/create': { title: 'Novo Cliente', icon: 'add_box' + 'storefront' },

  '/fornecedores': { title: 'Fornecedores', icon: 'group_add' },
  '/formaPagamento': { title: 'Forma Pagamento', icon: 'credit_card' },
  '/formaPagamento/create': { title: 'Forma Pagamento', icon: 'credit_card'  },
  // adicione outras rotas aqui
};

constructor(private router: Router) {
  this.router.events
    .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
    .subscribe((event) => {
      const cleanUrl = event.urlAfterRedirects.split('?')[0].replace(/\/$/, '');
      const data = this.routeData[cleanUrl || '/'];

      if (data) {
        this.pageTitle = data.title;   //se não estiver usando nenhuma rota vai aparecer 'app'
        this.pageIcon = data.icon;
      } else {
        this.pageTitle = 'App';
        this.pageIcon = 'apps';
      }
    });
}
}

