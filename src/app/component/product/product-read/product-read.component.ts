import { Component, Input, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit, OnChanges {
  @Input() searchTerm: string = '';
  @Input() triggerSearch: number = 0;

  products: Product[] = [];
  displayedColumns: string[] = ['proId', 'proNome', 'proAnoAplicacao', 'proPrecoCusto', 'proPrecoVenda', 'proStatus', 'action'];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['triggerSearch']) {
      this.searchProducts();
    }
  }

  loadProducts(): void {
    this.productService.read().subscribe({
      next: data => this.products = data,
      error: err => console.error('Erro ao carregar produtos:', err)
    });
  }

  searchProducts(): void {
    const termo = this.searchTerm.trim();

    if (!termo) {
      this.loadProducts();
      return;
    }

    this.productService.searchByTerm(termo).subscribe({
      next: data => this.products = data,
      error: err => {
        console.error('Erro na busca:', err);
        this.products = [];
      }
    });
  }
}
