import { Component } from '@angular/core';
import { FormaPagamentoService } from '../forma-pagamento.service';
import { Router } from '@angular/router';
import { FormaPagamento } from '../forma-pagamento.model';

@Component({
  selector: 'app-forma-pagamento-create',
  templateUrl: './forma-pagamento-create.component.html',
  styleUrls: ['./forma-pagamento-create.component.css']
})
export class FormaPagamentoCreateComponent {

  formaPagamento: FormaPagamento = {
    fpgDescricao: '',
    fpgPermiteParcelamento: '',
    fpgNumeroMaxParcela: 0,
    fpgTaxaAdicional: 0,
    fpgStatus: null
  };

  constructor(private formaPagamentoService: FormaPagamentoService, private router: Router) { }

  // Método para criar a forma de pagamento
  createFormaPagamento(): void {
    this.formaPagamentoService.create(this.formaPagamento).subscribe({
      next: () => {
        // Mensagem de sucesso
        this.formaPagamentoService.showMessage('✅Forma de pagamento criada com sucesso!');
        // Redireciona para a lista de formas de pagamento
        this.router.navigate(['/formaPagamento']);
      },
      error: (err) => {
        // Mensagem de erro
        this.formaPagamentoService.showMessage('❌Erro ao criar forma de pagamento!');
        console.error(err);
      }
    });
  }

  // Método para cancelar e voltar à lista
  cancel(): void {
    this.router.navigate(['/formaPagamento']);
  }
}
