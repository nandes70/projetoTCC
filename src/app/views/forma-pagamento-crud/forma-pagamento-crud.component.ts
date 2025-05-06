import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forma-pagamento-crud',
  templateUrl: './forma-pagamento-crud.component.html',
  styleUrls: ['./forma-pagamento-crud.component.css']
})
export class FormaPagamentoCrudComponent implements OnInit
{
  constructor(private router: Router){}
  ngOnInit(): void {
      
  }
  navigateToformaPagamentoCreate(): void
  {
    this.router.navigate(['formaPagamento/create'])
  }
}
