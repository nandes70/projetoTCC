import { Component, OnInit } from '@angular/core';
import { FormaPagamento } from '../forma-pagamento.model';
import { FormaPagamentoService } from '../forma-pagamento.service';

@Component({
  selector: 'app-forma-pagamento-read',
  templateUrl: './forma-pagamento-read.component.html',
  styleUrls: ['./forma-pagamento-read.component.css']
})
export class FormaPagamentoReadComponent implements OnInit {

  formaPagamentos: FormaPagamento[] = []; // Lista de formas de pagamento

 displayedColumns: string[] = ['id', 'descricao', 'parcelamento', 'parcelas', 'taxa', 'status', 'acoes'];
 // Colunas da tabela

  constructor(private formaPagamentoService: FormaPagamentoService) { }

  ngOnInit(): void {
    this.formaPagamentoService.read().subscribe(formas => {
      this.formaPagamentos = formas;
    });
  }
}
