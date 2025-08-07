import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FornecedorService } from '../fornecedor.service';
import { Fornecedor } from '../fornecedor.model';

@Component({
  selector: 'app-fornecedor-read',
  templateUrl: './fornecedor-read.component.html',
  styleUrls: ['./fornecedor-read.component.css']
})
export class FornecedorReadComponent implements OnInit, OnChanges {

  @Input() searchTerm: string = '';
  @Input() triggerSearch: boolean = false;

  fornecedores: Fornecedor[] = [];
  fornecedoresFiltrados: Fornecedor[] = [];

  displayedColumns: string[] = ['forId', 'forNome', 'forCnpj', 'forContato', 'forEmail', 'forStatus', 'action'];

  constructor(private fornecedorService: FornecedorService) {}

  ngOnInit(): void {
    this.fornecedorService.read().subscribe((fornecedores: Fornecedor[]) => {
      this.fornecedores = fornecedores;
      this.fornecedoresFiltrados = fornecedores; // inicializa com todos
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['triggerSearch'] || changes['searchTerm']) {
      this.aplicarFiltro();
    }
  }

  aplicarFiltro(): void {
    const termo = this.searchTerm.toLowerCase().trim();

    if (!termo) {
      this.fornecedoresFiltrados = this.fornecedores;
      return;
    }

    this.fornecedoresFiltrados = this.fornecedores.filter(fornecedor =>
      fornecedor.forNomeFantasia?.toLowerCase().includes(termo) ||
      fornecedor.forId?.toString().includes(termo)
    );
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
