import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente.model';
import { ClienteService } from '../cliente.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cliente-delete',
  templateUrl: './cliente-delete.component.html',
  styleUrls: ['./cliente-delete.component.css']
})
export class ClienteDeleteComponent implements OnInit {

  cliente!: Cliente;
  isLoading: boolean = true; // Adicionar controle de carregamento

  constructor(
    private clienteService: ClienteService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.clienteService.readById(id).subscribe((cliente) => {
        this.cliente = cliente;
        this.isLoading = false; // Indicar que o carregamento terminou
      });
    }
  }

  deleteCliente(): void {
    if (this.cliente && this.cliente.cliId) {
      this.clienteService.delete(this.cliente.cliId).subscribe(() => {
        this.clienteService.showMessage('✅Cliente excluído com sucesso!');
        this.router.navigate(['/cliente']);
      });
    }
  }

  cancel(): void {
    this.router.navigate(['/cliente']);
  }
}