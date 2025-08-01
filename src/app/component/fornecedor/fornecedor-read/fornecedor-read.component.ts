import { Component, OnInit } from '@angular/core';
import { FornecedorService } from '../fornecedor.service';
import { Fornecedor } from '../fornecedor.model';

@Component({
  selector: 'app-fornecedor-read',
  templateUrl: './fornecedor-read.component.html',
  styleUrls: ['./fornecedor-read.component.css']
})
export class FornecedorReadComponent implements OnInit {

  fornecedores: Fornecedor[] = [];
  displayedColumns: string[] = ['forId', 'forNome', 'forCnpj', 'forContato', 'forEmail', 'forStatus', 'action'];

  constructor(private fornecedorService: FornecedorService) {}

  ngOnInit(): void {
    this.fornecedorService.read().subscribe((fornecedores: Fornecedor[]) => {
      this.fornecedores = fornecedores;
    });
  }

  editarFornecedor(forId: number): void {
    // lógica de navegação ou edição
  }

  excluirFornecedor(fornecedor: Fornecedor): void {
    // lógica para excluir fornecedor
  }

  visualizarFornecedor(forId: number): void {
    // lógica para visualizar fornecedor
  }
}
