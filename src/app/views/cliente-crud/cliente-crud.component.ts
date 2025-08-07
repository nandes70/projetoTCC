import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente-crud',
  templateUrl: './cliente-crud.component.html',
  styleUrls: ['./cliente-crud.component.css']
})
export class ClienteCrudComponent implements OnInit {

  // Variáveis para controle da pesquisa
  termoPesquisa: string = '';
  triggerSearch: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {}

  navigateToClineteCreate(): void {
    this.router.navigate(['/cliente/create']);
  }

  // Função chamada ao digitar na barra de pesquisa
  onSearchChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.termoPesquisa = input.value;
    this.triggerSearch = !this.triggerSearch; // força a atualização
  }
}
