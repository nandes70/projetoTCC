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

 // Método responsável por criar um novo produto
createProduct(): void {
  // Chama o método 'create' do serviço, passando o objeto 'product' como parâmetro
  this.productService.create(this.product).subscribe({
    // Caso a criação seja bem-sucedida
    next: () => {
      // Exibe uma mensagem de sucesso para o usuário
      this.productService.showMessage('Produto criado com sucesso!');                //COLOCAR ICON PARA ASSOCIAR
      // Redireciona para a rota de listagem de produtos
      this.router.navigate(['/products']);
    },
    // Caso ocorra um erro durante a criação
    error: (err) => {
      // Exibe uma mensagem de erro para o usuário
      this.productService.showMessage('Erro ao criar produto.');
      // Imprime o erro no console para depuração
      console.error(err);
    }
  });
}

  // Método chamado ao clicar no botão "Cancelar"
  cancel(): void {
    // Navega de volta para a página de produtos (sem salvar nada)
    this.router.navigate(['/products'])
  }
}
