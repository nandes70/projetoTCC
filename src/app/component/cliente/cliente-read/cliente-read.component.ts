import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { Cliente } from '../cliente.model';

@Component({
  selector: 'app-cliente-read',
  templateUrl: './cliente-read.component.html',
  styleUrls: ['./cliente-read.component.css']
})
export class ClienteReadComponent implements OnInit, OnChanges {

  @Input() searchTerm: string = '';
  @Input() triggerSearch: boolean = false;

  clientes: Cliente[] = [];
  clientesFiltrados: Cliente[] = [];

  displayedColumns: string[] = ['cliId', 'cliNome', 'cliCpf', 'conCelular', 'conEmail', 'cliStatus', 'action'];

  constructor(private clienteService: ClienteService) {}

  ngOnInit(): void {
    this.clienteService.read().subscribe((clientes: Cliente[]) => {
      this.clientes = clientes;
      this.clientesFiltrados = clientes;
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
      this.clientesFiltrados = this.clientes;
      return;
    }

    this.clientesFiltrados = this.clientes.filter(cliente =>
      cliente.cliNome?.toLowerCase().includes(termo) ||
      cliente.cliId?.toString().includes(termo)
    );
  }

  editarCliente(cliId: number): void {
    // ...
  }

  excluirCliente(cliente: Cliente): void {
    // ...
  }

  visualizarCliente(cliId: number): void {
    // ...
  }
}
