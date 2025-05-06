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
  
  // Declara um objeto do tipo FormaPagamento com valores iniciais
  formaPagamento: FormaPagamento = {
    fpgDescricao: '',
    fpgStatus: ''
  }

  // Injeta o ProductService e o Router no construtor
  constructor(private formaPagamentoService: FormaPagamentoService,
  private router: Router) { }

  // Método chamado quando o componente for inicializado
  ngOnInit(): void {
    // No momento não tem nada aqui, mas pode ter lógica futuramente
  }

  // Método que cria o produto chamando o serviço
  createFormaPagamento(): void {
    this.formaPagamentoService.create(this.formaPagamento).subscribe(() => {
      // Exibe mensagem de sucesso
      this.formaPagamentoService.showMessage('Forma de pagamento Criada!!!')

      // Redireciona pra rota /products
      this.router.navigate(['/formapagamentos'])
    })
  }

  // Método pra cancelar e voltar pra listagem de produtos
  cancel(): void {
    this.router.navigate(['/formapagamentos'])
  }
}