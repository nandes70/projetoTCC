// Importa os módulos e componentes necessários do Angular e do projeto
import { Component, OnInit } from '@angular/core';              // Permite criar e inicializar um componente Angular
import { ProductService } from '../product.service';           // Serviço que faz a comunicação com o backend (API)
import { Router } from '@angular/router';                      // Usado para navegar entre rotas (páginas)
import { Product } from '../product.model';                    // Interface que define o tipo e estrutura do objeto Produto

// Define o componente Angular
@Component({
  selector: 'app-product-create',                              // Nome que será usado no HTML para esse componente
  templateUrl: './product-create.component.html',              // Caminho para o arquivo HTML desse componente
  styleUrls: ['./product-create.component.css']                // Caminho para o arquivo CSS (estilos) desse componente
})
export class ProductCreateComponent implements OnInit {

  // Cria e inicializa um objeto do tipo Product com valores padrão (vazio ou null)
  product: Product = {
    proNome: '',
    proPrecoCusto: null,
    proPrecoVenda: null,
    proDescricao: '',
    proEstoque: null,
    proCategoria: '',
    proCodigoBarra: '',
    proMarca: '',
    proStatus: null, // true = ativo, false = desativado
    proFabricante: '',
    proAnoAplicacao: '',
    proDataCadastro: new Date().toISOString(),    // Data atual em formato ISO (ex: 2025-06-14T12:00:00Z)
    proDataAtualizacao: new Date().toISOString(),
    proObservacao: '',
    proCodigoInterno: ''
     // Mesmo para a data de atualização
  };

  // Injeta o ProductService para chamadas ao backend e Router para navegação
  constructor(
    private productService: ProductService,
    private router: Router
  ) { }

  // Executado automaticamente ao inicializar o componente
  ngOnInit(): void {
    // Pode conter lógica futura, como carregar categorias, fabricantes etc.
  }

  // Método chamado ao clicar no botão "Salvar"
  createProduct(): void {
    // Chama o serviço que faz o POST do produto na API
    this.productService.create(this.product).subscribe(() => {
      // Mostra mensagem de sucesso ao usuário
      this.productService.showMessage('Produto criado com sucesso!')

      // Redireciona o usuário de volta para a listagem de produtos
      this.router.navigate(['/products'])
    })
  }

  // Método chamado ao clicar no botão "Cancelar"
  cancel(): void {
    // Navega de volta para a página de produtos (sem salvar nada)
    this.router.navigate(['/products'])
  }
}
