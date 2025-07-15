import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormaPagamentoService } from '../forma-pagamento.service';
import { FormaPagamento } from '../forma-pagamento.model';

@Component({
  selector: 'app-forma-pagamento-delete',
  templateUrl: './forma-pagamento-delete.component.html',
  styleUrls: ['./forma-pagamento-delete.component.css']
})
export class FormaPagamentoDeleteComponent implements OnInit {
  
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

  deleteFormaPagamento(): void {
    this.service.delete(this.formaPagamento.fpgId!).subscribe(() => {
      this.service.showMessage('Forma de pagamento excluída!');
      this.router.navigate(['/formaPagamento']);
    });
  }

  cancel(): void {
    this.router.navigate(['/formaPagamento']);
  }
}
