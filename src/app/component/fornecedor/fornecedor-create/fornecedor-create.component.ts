import { Component, OnInit } from '@angular/core';
import { FornecedorService } from '../fornecedor.service';
import { Router } from '@angular/router';
import { Fornecedor } from '../fornecedor.model';
import { FornecedorDTO } from '../dto/fornecedor-dto.model';

@Component({
  selector: 'app-fornecedor-create',
  templateUrl: './fornecedor-create.component.html',
  styleUrls: ['./fornecedor-create.component.css']
})
export class FornecedorCreateComponent implements OnInit {
  step: number = 1;

  fornecedor: Fornecedor = {
    forNomeFantasia: '',
    forRazaoSocial: '',
    forCnpj: '',
    forStatus: '',

    contato: {
      telefone: '',
      celular: '',
      email: '',
      emailSecundario :''
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
    private fornecedorService: FornecedorService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  nextStep(): void {
    if (this.step === 1) {
      if (this.step1IsValid()) {
        this.step = 2;
      } else {
        this.fornecedorService.showMessage('Preencha os campos obrigatórios da etapa 1!');
      }
    } else if (this.step === 2) {
      if (this.step2IsValid()) {
        this.step = 3;
      } else {
        this.fornecedorService.showMessage('Preencha os campos obrigatórios da etapa 2!');
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
      this.fornecedor.forNomeFantasia.trim() !== '' &&
      this.fornecedor.forRazaoSocial.trim() !== '' &&
      this.fornecedor.forCnpj.trim() !== '' &&
      this.fornecedor.forStatus.trim() !== ''
    );
  }

  step2IsValid(): boolean {
    return (
      this.fornecedor.contato.celular.trim() !== '' &&
      this.fornecedor.contato.email.trim() !== ''
    );
  }

  toDTO(fornecedor: Fornecedor): FornecedorDTO {
    const limpaTelefone = (tel: string): string =>
      tel ? tel.replace(/\D/g, '') : '';

    return {
      forNomeFantasia: fornecedor.forNomeFantasia,
      forRazaoSocial: fornecedor.forRazaoSocial,
      forCnpj: fornecedor.forCnpj,
      forStatus: fornecedor.forStatus.toUpperCase(),

      // Endereço no formato plano esperado pelo backend
      endRua: fornecedor.endereco.rua,
      endBairro: fornecedor.endereco.bairro,
      endNumero: fornecedor.endereco.numero.toString(),
      endCidade: fornecedor.endereco.cidade,
      endCep: fornecedor.endereco.cep,
      endEstado: fornecedor.endereco.estado,

      // Contato
      conCelular: limpaTelefone(fornecedor.contato.celular),
      conTelefoneComercial: limpaTelefone(fornecedor.contato.telefone),
      conEmail: fornecedor.contato.email,
      conEmailSecundario: ''
    };
  }

  createFornecedor(): void {
    const fornecedorDTO = this.toDTO(this.fornecedor);
    console.log('DTO a ser enviado:', fornecedorDTO);

    this.fornecedorService.create(fornecedorDTO).subscribe({
      next: () => {
        this.fornecedorService.showMessage('Fornecedor criado com sucesso!');
        this.router.navigate(['/fornecedor']);
      },
      error: (err) => {
        this.fornecedorService.showMessage('Erro ao criar fornecedor.');
        console.error('Erro ao criar fornecedor:', err);
      }
    });
  }

  cancel(): void {
    this.router.navigate(['/fornecedor']);
  }
}
