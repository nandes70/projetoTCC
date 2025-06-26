import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { Router } from '@angular/router';
import { Cliente } from '../cliente.model';

@Component({
  selector: 'app-cliente-create',
  templateUrl: './cliente-create.component.html',
  styleUrls: ['./cliente-create.component.css']
})
export class ClienteCreateComponent implements OnInit{
cliente: Cliente = {
  nome: '',
  cpfCnpj: '',
  dataNascimento: '',
  formaPagamento: '',
  status: '',

  conCelular: '',
  conTelefoneComercial: '',
  conEmail: '',

  endRua: '',
  endNumero: '',
  endCidade: '',
  endBairro: '',
  endCep: '',
  endEstado: '',
  endPais: '',
  endComplemento: '',
  endTipoResidencia: ''
}
constructor(private clienteService: ClienteService,
  private router: Router) { }

ngOnInit(): void {
    
}
createCliente(): void
{
  this.clienteService.create(this.cliente).subscribe(() => {
    this.clienteService.showMessage('Cliente Criado!!!')
    this.router.navigate(['/cliente'])
  })
}
cancel(): void
{
  this.router.navigate(['/cliente'])
}
}
