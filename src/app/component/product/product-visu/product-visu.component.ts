import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; // Importa o Router também
import { ProductService } from '../product.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-visu',
  templateUrl: './product-visu.component.html',
  styleUrls: ['./product-visu.component.css']
})
export class ProductVisuComponent implements OnInit {

  product: Product = {
    proNome: '',
    proPrecoCusto: null,
    proPrecoVenda: null,
    proDescricao: '',
    proEstoque: null, 
    proCategoria: '',
    proCodigoBarra: '',
    proMarca: '',
    proStatus: null,
    proFabricante: '',
    proAnoAplicacao: '',
    proDataCadastro: '',
    proDataAtualizacao: '',
    proCodigoInterno: '',
    proObservacao: ''
  }

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router // Importa o Router para usar no voltar()
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.productService.readById(id).subscribe((prod: Product) => {
        this.product = prod;
      });
    }
  }

  voltar(): void {
    this.router.navigate(['/products']); // Caminho para voltar à lista de produtos
  }
}
