import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { Router } from '@angular/router';
import { Cliente } from '../cliente.model';



@Component({
  selector: 'app-cliente-create',
  templateUrl: './cliente-create.component.html',
  styleUrls: ['./cliente-create.component.css']
})
export class ClienteCreateComponent implements OnInit {
  step: number = 1;

  cliente: Cliente = {
    cliNome: '',
    cliCpf: '',
    dataNascimento: null,
    formaPagamento: '',
    cliStatus: '',
    contato: {
      telefone: '',
      celular: '',
      email: ''
    },
    endereco: {
      rua: '',
      numero: '',
      complemento: '',
      bairro: '',
      cidade: '',
      estado: '',
      cep: ''
    }
  };
  constructor(
    private clienteService: ClienteService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  nextStep(): void {
    if (this.step1IsValid()) {
      this.step = 2;
    } else {
      this.clienteService.showMessage('Preencha os campos obrigatórios da etapa 1!');
    }
  }

  prevStep(): void {
    this.step = 1;
  }

  step1IsValid(): boolean {
    return (
      this.cliente.cliNome.trim() !== '' &&
      this.cliente.cliCpf.trim() !== '' &&
      this.cliente.dataNascimento != null &&
      this.cliente.formaPagamento.trim() !== '' &&
      this.cliente.cliStatus.trim() !== ''
    );
  }

  createCliente(): void {
    console.log('Cliente a enviar:', this.cliente);
    this.clienteService.create(this.cliente).subscribe(() => {
      this.clienteService.showMessage('Cliente Criado com sucesso!');
      this.router.navigate(['/cliente']);
    }, error => {
      this.clienteService.showMessage('Erro ao criar cliente. Tente novamente.');
      console.error(error);
    });
  }

  cancel(): void {
    this.router.navigate(['/cliente']);
  }
}
