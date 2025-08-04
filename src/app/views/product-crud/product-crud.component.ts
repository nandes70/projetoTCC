import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent {
  termoPesquisa: string = '';
  triggerSearch: number = 0;

  constructor(private router: Router) {}

  navigateToProductCreate(): void {
    this.router.navigate(['/products/create']);
  }

  onSearchChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.termoPesquisa = input.value;
    this.triggerSearch++;
  }
}
