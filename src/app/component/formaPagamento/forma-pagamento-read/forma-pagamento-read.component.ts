import { Component } from '@angular/core';
import { FormaPagamento } from '../forma-pagamento.model';
import { FormaPagamentoService } from '../forma-pagamento.service';

@Component({
  selector: 'app-forma-pagamento-read',
  templateUrl: './forma-pagamento-read.component.html',
  styleUrls: ['./forma-pagamento-read.component.css']
})
export class FormaPagamentoReadComponent {
  formaPagamentos!: FormaPagamento[];
  displayedColumns = ['fpgId', 'fpgDescricao', 'fpgStatus', 'action'];

  constructor(private formaPagamentoService: FormaPagamentoService) {}

  ngOnInit(): void {
    this.formaPagamentoService.read().subscribe(formaPagamentos => {
      this.formaPagamentos = formaPagamentos;
      console.log(formaPagamentos);
    });
  }
}
