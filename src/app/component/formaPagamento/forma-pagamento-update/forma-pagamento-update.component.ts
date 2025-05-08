import { Component } from '@angular/core';
import { FormaPagamento } from '../formaPagamento.model';
import { ActivatedRoute, Router } from '@angular/router';
import { FormaPagamentoService } from '../forma-pagamento.service';

@Component({
  selector: 'app-forma-pagamento-update',
  templateUrl: './forma-pagamento-update.component.html',
  styleUrls: ['./forma-pagamento-update.component.css']
})
export class FormaPagamentoUpdateComponent {
  formaPagamento!: FormaPagamento;

  constructor(private formaPagamentoService: FormaPagamentoService,
    private router: Router,
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.formaPagamentoService.readById(id!).subscribe((formaPagamento: FormaPagamento) =>{
    this.formaPagamento = formaPagamento
    })
  }

  updateFormaPagamento(): void {
    this.formaPagamentoService.update(this.formaPagamento).subscribe(() => {
      this.formaPagamentoService.showMessage('Forma de Pagamento atualizado com sucesso!')
      this.router.navigate(['/formaPagamento'])
    })
  }

  cancel(): void {
    this.router.navigate(['/formaPagamento'])
  }
}
