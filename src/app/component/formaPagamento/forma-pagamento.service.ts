import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormaPagamento } from './forma-pagamento.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormaPagamentoService {

  /* URL base da API para comunicação com o backend */
  baseUrl = "http://localhost:8080/formaPagamento";

  /* Construtor que injeta o MatSnackBar (para mensagens) e HttpClient (para requisições HTTP) */
  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  /* Método para mostrar uma mensagem com um SnackBar (tipo um pop-up) */
  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000, /* Tempo em que a mensagem fica visível */
      horizontalPosition: "right", /* Posição horizontal do SnackBar */
      verticalPosition: "top" /* Posição vertical do SnackBar */
    });
  }

  /* Método para criar uma forma de pagamento no backend */
  create(formaPagamento: FormaPagamento): Observable<FormaPagamento> {
    /* Faz uma requisição POST para a API para criar uma nova forma de pagamento */
    return this.http.post<FormaPagamento>(this.baseUrl, formaPagamento);
  }

  /* Método para ler todas as formas de pagamento */
  read(): Observable<FormaPagamento[]> {
    /* Faz uma requisição GET para pegar todas as formas de pagamento */
    return this.http.get<FormaPagamento[]>(this.baseUrl);
  }

  /* Método para ler uma forma de pagamento específica pelo seu ID */
  readById(id: string): Observable<FormaPagamento> {
    /* Cria a URL de requisição com o ID da forma de pagamento */
    const url = `${this.baseUrl}/${id}`;
    /* Faz uma requisição GET para pegar uma única forma de pagamento */
    return this.http.get<FormaPagamento>(url);
  }

  /* Método para atualizar uma forma de pagamento existente */
  update(formaPagamento: FormaPagamento): Observable<FormaPagamento> {
    /* Cria a URL de requisição com o ID da forma de pagamento */
    const url = `${this.baseUrl}/${formaPagamento.fpgId}`;
    /* Faz uma requisição PUT para atualizar a forma de pagamento no backend */
    return this.http.put<FormaPagamento>(url, formaPagamento);
  }

  /* Método para excluir uma forma de pagamento */
  delete(id: number): Observable<FormaPagamento> {
    /* Cria a URL de requisição com o ID da forma de pagamento */
    const url = `${this.baseUrl}/${id}`;
    /* Faz uma requisição DELETE para excluir a forma de pagamento */
    return this.http.delete<FormaPagamento>(url);
  }
}
