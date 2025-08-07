import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fornecedor-crud',
  templateUrl: './fornecedor-crud.component.html',
  styleUrls: ['./fornecedor-crud.component.css']
})
export class FornecedorCrudComponent implements OnInit {

  // Variáveis para controle da pesquisa
  termoPesquisa: string = '';
  triggerSearch: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {}

  navigateToFornecedorCreate(): void {
    this.router.navigate(['/fornecedor/create']);
  }

  // Função chamada ao digitar na barra de pesquisa
  onSearchChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.termoPesquisa = input.value;
    this.triggerSearch = !this.triggerSearch; // força a atualização
  }
}
