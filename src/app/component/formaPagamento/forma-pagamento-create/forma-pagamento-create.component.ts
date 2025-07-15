import { Component } from '@angular/core';
import { FormaPagamento } from '../forma-pagamento.model';
import { FormaPagamentoService } from '../forma-pagamento.service';
import { Router } from '@angular/router';

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
    fpgStatus: true
  }
  
  

  constructor(private formaPagamentoService: FormaPagamentoService,
  private router: Router) { }

  ngOnInit(): void {
    
  }

  createFormaPagamento(): void {
    this.formaPagamentoService.create(this.formaPagamento).subscribe({
      next: () => {
        this.formaPagamentoService.showMessage('Forma de pagamento Criada!!!');
        this.router.navigate(['/formapagamento']);
      },
      error: (err) => {
        this.formaPagamentoService.showMessage('Erro ao criar forma de pagamento.');
        console.error(err);
      }
    });
  }
  

  cancel(): void {
    this.router.navigate(['/formapagamento'])
  }
}