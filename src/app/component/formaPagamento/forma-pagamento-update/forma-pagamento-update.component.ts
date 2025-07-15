import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormaPagamentoService } from '../forma-pagamento.service';
import { FormaPagamento } from '../forma-pagamento.model';

@Component({
  selector: 'app-forma-pagamento-update',
  templateUrl: './forma-pagamento-update.component.html',
  styleUrls: ['./forma-pagamento-update.component.css']
})
export class FormaPagamentoUpdateComponent implements OnInit {

  formaPagamento: FormaPagamento = {
    fpgDescricao: '',
    fpgPermiteParcelamento: '',
    fpgNumeroMaxParcela: null,
    fpgTaxaAdicional: null,
    fpgStatus: false
  };

  constructor(
    private service: FormaPagamentoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.service.readById(id).subscribe(fpg => {
      this.formaPagamento = fpg;
    });
  }

  updateFormaPagamento(): void {
    this.service.update(this.formaPagamento).subscribe(() => {
      this.service.showMessage('Forma de pagamento atualizada!');
      this.router.navigate(['/formaPagamento']);
    });
  }

  cancel(): void {
    this.router.navigate(['/formaPagamento']);
  }
}
