// Importa os módulos/componentes necessários pro funcionamento
import { Component, OnInit } from '@angular/core';              // Usado pra criar componente Angular
import { ProductService } from '../product.service';           // Serviço que gerencia os produtos (salvar, buscar, etc.)
import { Router } from '@angular/router';                      // Usado pra navegar entre páginas
import { Product } from '../product.model';                    // Modelo de dados do produto (interface ou classe)

@Component({
  selector: 'app-product-create',                              // Nome do seletor usado no HTML pra esse componente
  templateUrl: './product-create.component.html',              // Caminho pro HTML do componente
  styleUrls: ['./product-create.component.css']                // Caminho pro CSS do componente
})
export class ProductCreateComponent implements OnInit {

  // Declara um objeto do tipo Product com valores iniciais
  product: Product = {
    proNome: '',
    proPrecoCusto: 0,
    proPrecoVenda: 0,
    proMarca: '',
    proModelo: '',
    proEstoque: 0,
    proCor: '',
    proMaterial: '',
    proFabricante: '',
    proDescricao: '',
    proCategoria: '',
    proCodigoBarras: '',
    proDataCadastro: new Date().toISOString(),
    proDataAtualizacao: new Date().toISOString(),
    proAtivo: true
  }

  // Injeta o ProductService e o Router no construtor
  constructor(private productService: ProductService,
  private router: Router) { }

  // Método chamado quando o componente for inicializado
  ngOnInit(): void {
    // No momento não tem nada aqui, mas pode ter lógica futuramente
  }

  // Método que cria o produto chamando o serviço
  createProduct(): void {
    this.productService.create(this.product).subscribe(() => {
      // Exibe mensagem de sucesso
      this.productService.showMessage('Produto Criado!!!')

      // Redireciona pra rota /products
      this.router.navigate(['/products'])
    })
  }

  // Método pra cancelar e voltar pra listagem de produtos
  cancel(): void {
    this.router.navigate(['/products'])
  }
}
