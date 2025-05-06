import { Component } from '@angular/core';
import { FormaPagamento } from '../formaPagamento.model';
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
    fpgStatus: ''
  }

  constructor(private formaPagamentoService: FormaPagamentoService,
  private router: Router) { }

  ngOnInit(): void {
    
  }

  createFormaPagamento(): void {
    this.formaPagamentoService.create(this.formaPagamento).subscribe(() => {
      this.formaPagamentoService.showMessage('Forma de pagamento Criada!!!')
      this.router.navigate(['/formaPagamento'])
    })
  }

  cancel(): void {
    this.router.navigate(['/formaPagamento'])
  }
}