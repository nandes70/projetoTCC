import { Component } from '@angular/core';
import { Cliente } from '../cliente.model';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cliente-read',
  templateUrl: './cliente-read.component.html',
  styleUrls: ['./cliente-read.component.css']
})
export class ClienteReadComponent {
  cliente!: Cliente[]
    displayedColumns = ['cliId', 'cliNome', 'cliCpf', 'dataNascimento', 'formaPagamento', 'cliStatus', 'action']
  
    constructor(private clienteService: ClienteService) { }
  
    ngOnInit(): void {
      this.clienteService.read().subscribe(cliente => {
        this.cliente = cliente
        console.log(cliente)  
      })
    }
}
