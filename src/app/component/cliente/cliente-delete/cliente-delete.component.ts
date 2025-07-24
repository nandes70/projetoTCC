import { Component } from '@angular/core';
import { Cliente } from '../cliente.model'; // Ajuste o caminho conforme sua estrutura
import { ClienteService } from '../cliente.service'; // Ajuste o caminho conforme sua estrutura
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-client-delete',
  templateUrl: './cliente-delete.component.html',
  styleUrls: ['./cliente-delete.component.css']
})
export class ClienteDeleteComponent {
  cliente!: Cliente;

  constructor(
    private clienteService: ClienteService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.clienteService.readById(id!).subscribe(cliente => {
      this.cliente = cliente;
    });
  }

  deleteCliente(): void {
    this.clienteService.delete(this.cliente.cliId!).subscribe(() => {
      this.clienteService.showMessage('Cliente excluído com sucesso!');
      this.router.navigate(['/clients']); // Ajuste a rota conforme sua aplicação
    });
  }

  cancel(): void {
    this.router.navigate(['/clients']); // Ajuste a rota conforme sua aplicação
  }
}