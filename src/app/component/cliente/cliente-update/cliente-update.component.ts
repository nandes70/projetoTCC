import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from '../cliente.service';
import { Cliente } from '../cliente.model';
import { ClienteDTO } from '../dto/cliente-dto.model';

@Component({
  selector: 'app-cliente-update',
  templateUrl: './cliente-update.component.html',
  styleUrls: ['./cliente-update.component.css']
})
export class ClienteUpdateComponent implements OnInit {
  step: number = 1;
  cliente!: Cliente;

  constructor(
    private clienteService: ClienteService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.clienteService.readById(id).subscribe((cliente: Cliente) => {
        this.cliente = cliente;
      });
    }
  }

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
      this.cliente.cliNome?.trim() !== '' &&
      this.cliente.cliCpf?.trim() !== '' &&
      this.cliente.dataNascimento != null &&
      this.cliente.formaPagamento?.trim() !== '' &&
      this.cliente.cliStatus?.trim() !== ''
    );
  }

  toDTO(cliente: Cliente): ClienteDTO {
    const limpaTelefone = (tel: string): string =>
      tel ? tel.replace(/\D/g, '') : '';

    return {
      cliNome: cliente.cliNome,
      cliCpf: cliente.cliCpf,
      cliStatus: cliente.cliStatus.toUpperCase(),
      dataNascimento: cliente.dataNascimento
        ? new Date(cliente.dataNascimento).toISOString().split('T')[0]
        : null,
      formaPagamento: cliente.formaPagamento.toUpperCase(),

      // Endereço
      endRua: cliente.endereco.rua,
      endNumero: cliente.endereco.numero.toString(),
      endCidade: cliente.endereco.cidade,
      endCep: cliente.endereco.cep,
      endEstado: cliente.endereco.estado,
      endBairro: cliente.endereco.bairro,

      // Contato
      conCelular: limpaTelefone(cliente.contato.celular),
      conTelefoneComercial: limpaTelefone(cliente.contato.telefone),
      conEmail: cliente.contato.email,
      conEmailSecundario: ''
    };
  }

  updateCliente(): void {
  // Copia os dados do cliente atual
  const clienteAtualizado: Cliente = {
    ...this.cliente,
    cliId: this.cliente.cliId // necessário para o PUT funcionar
  };

  this.clienteService.update(clienteAtualizado).subscribe({
    next: () => {
      this.clienteService.showMessage('Cliente atualizado com sucesso!');
      this.router.navigate(['/cliente']);
    },
    error: (err) => {
      this.clienteService.showMessage('Erro ao atualizar cliente.');
      console.error('Erro ao atualizar cliente:', err);
    }
  });
}

  cancel(): void {
    this.router.navigate(['/cliente']);
  }
}
