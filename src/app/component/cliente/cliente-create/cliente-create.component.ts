import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { Router } from '@angular/router';
import { Cliente } from '../cliente.model';
import { ClienteDTO } from '../dto/cliente-dto.model';

@Component({
  selector: 'app-cliente-create',
  templateUrl: './cliente-create.component.html',
  styleUrls: ['./cliente-create.component.css']
})
export class ClienteCreateComponent implements OnInit {
  step: number = 1;

  // Objeto do tipo Cliente com estrutura de dados agrupada (UI)
  cliente: Cliente = {
    cliNome: '',
    cliCpf: '',
    dataNascimento: null,
    formaPagamento: '',
    cliStatus: '',
    
    contato: {
      telefone: '',
      celular: '',
      email: '',
      emailSecundario: ''
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

ngOnInit(): void {
  // Se precisar inicializar algo ao carregar o componente, faça aqui
}

 nextStep(): void {
  if (this.step === 1) {
    if (this.step1IsValid()) {
      this.step = 2;
    } else {
      this.clienteService.showMessage('Preencha os campos obrigatórios da etapa 1!');
    }
  } else if (this.step === 2) {
    if (this.step2IsValid()) {
      this.step = 3;
    } else {
      this.clienteService.showMessage('Preencha os campos obrigatórios da etapa 2!');
    }
  }
}


 prevStep(): void {
  if (this.step > 1) {
    this.step--;
  }
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

// Validação da etapa 2
step2IsValid(): boolean {
  return (
    this.cliente.contato.telefone.trim() !== '' &&
    this.cliente.contato.email.trim() !== ''
  );
}

  /**
   * Converte Cliente (interface estruturada para UI) para ClienteDTO (modelo esperado pelo backend)
   */
  toDTO(cliente: Cliente): ClienteDTO {
    const limpaTelefone = (tel: string): string =>
      tel ? tel.replace(/\D/g, '') : '';

    return {
      cliNome: cliente.cliNome,
      cliCpf: cliente.cliCpf,
      cliStatus: cliente.cliStatus.toUpperCase(),
      dataNascimento: cliente.dataNascimento
        ? cliente.dataNascimento.toISOString().split('T')[0]
        : null,
      formaPagamento: cliente.formaPagamento.toUpperCase(),

      // Endereço no formato esperado pelo backend (campos planos)
      endRua: cliente.endereco.rua,
      endNumero: cliente.endereco.numero.toString(), // backend espera string
      endCidade: cliente.endereco.cidade,
      endCep: cliente.endereco.cep,
      endEstado: cliente.endereco.estado,
      endBairro: cliente.endereco.bairro,

      // Contato
      conCelular: limpaTelefone(cliente.contato.celular),
      conTelefoneComercial: limpaTelefone(cliente.contato.telefone),
      conEmail: cliente.contato.email,
      conEmailSecundario: '' // opcional, pode ajustar depois
    };
  }

  // Envia o DTO para o backend
  createCliente(): void {
    const clienteDTO = this.toDTO(this.cliente);
    console.log('DTO a ser enviado:', clienteDTO);

    this.clienteService.create(clienteDTO).subscribe({
      next: () => {
        this.clienteService.showMessage('✅Cliente criado com sucesso!');
        this.router.navigate(['/cliente']);
      },
      error: (err) => {
        this.clienteService.showMessage('❌Erro ao criar cliente.');
        console.error('Erro ao criar cliente:', err);
      }
    });
  }

  cancel(): void {
    this.router.navigate(['/cliente']);
  }
}
