// Importa o decorator Component do Angular
import { Component } from '@angular/core';

// Importa a interface/modelo de Produto
import { Product } from '../product.model';

// Importa o serviço que se comunica com a API de produtos
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-read', // Nome do componente usado no HTML
  templateUrl: './product-read.component.html', // Caminho do template HTML
  styleUrls: ['./product-read.component.css'] // Caminho do CSS desse componente
})
export class ProductReadComponent {
  // Declara um array de produtos, que vai ser preenchido depois
  products!: Product[]

  // Define as colunas visíveis da tabela (em ordem)
  displayedColumns = ['proId', 'proNome', 'proPrecoCusto', 'proPrecoVenda', 'proMarca', 'proAtivo', 'action']

  // Injeta o ProductService pra poder acessar os métodos dele
  constructor(private productService: ProductService) { }

  // Método chamado quando o componente é iniciado
  ngOnInit(): void {
    // Chama o método 'read' do service, que busca os produtos
    this.productService.read().subscribe(products => {
      // Quando os produtos forem recebidos, salva eles na variável
      this.products = products

      // Mostra os dados no console (pra debug)
      console.log(products)  
    })
  }
}
