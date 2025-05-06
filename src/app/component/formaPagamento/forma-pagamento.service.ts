import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormaPagamento } from './formaPagamento.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormaPagamentoService {
 /*URL base da API para comunicação com o backend*/
 baseUrl = "http://localhost:8080/formapagamentos"

 /*Construtor que injeta o MatSnackBar (para mensagens) e HttpClient (para requisições HTTP)*/
 constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

 /*Método para mostrar uma mensagem com um SnackBar (tipo um pop-up)*/
 showMessage(msg: string): void {
   this.snackBar.open(msg, 'X', {
     duration: 3000, /*Tempo em que a mensagem fica visível*/
     horizontalPosition: "right", /*Posição horizontal do SnackBar*/
     verticalPosition: "top" /*Posição vertical do SnackBar*/
   })
 }

 /*/Método para criar um produto no backend*/
 create(formaPagamento: FormaPagamento): Observable<FormaPagamento> {
   /*Faz uma requisição POST para a API para criar um novo produto*/
   return this.http.post<FormaPagamento>(this.baseUrl, formaPagamento)
 }

 /*Método para ler todos os produtos*/
 read(): Observable<FormaPagamento[]> {
   /*Faz uma requisição GET para pegar todos os produtos*/
   return this.http.get<FormaPagamento[]>(this.baseUrl)
 }

 /*Método para ler um produto específico pelo seu ID*/
 readById(proId: string): Observable<FormaPagamento> {
   /*ria a URL de requisição com o ID do produto*/
   const url = `${this.baseUrl}/${proId}`
   /*Faz uma requisição GET para pegar um único produto*/
   return this.http.get<FormaPagamento>(url)
 }

 /*Método para atualizar um produto existente*/
 update(formaPagamento: FormaPagamento): Observable<FormaPagamento> {
   /*Cria a URL de requisição com o ID do produto*/
   const url = `${this.baseUrl}/${formaPagamento.fpgId}`
   /*Faz uma requisição PUT para atualizar o produto no backend*/
   return this.http.put<FormaPagamento>(url, formaPagamento)
 }

 /*Método para excluir um produto*/
 delete(proId: number): Observable<FormaPagamento> {
   /*Cria a URL de requisição com o ID do produto*/
   const url = `${this.baseUrl}/${proId}`
   /*Faz uma requisição DELETE para excluir o produto*/
   return this.http.delete<FormaPagamento>(url)
 }
}
