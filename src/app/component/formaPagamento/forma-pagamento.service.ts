import { Injectable } from '@angular/core';
import { FormaPagamento } from './forma-pagamento.model';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormaPagamentoService {
  baseUrl = "http://localhost:8080/formapagamentos";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    });
  }

  create(formapagamentos: FormaPagamento): Observable<FormaPagamento> {
    return this.http.post<FormaPagamento>(this.baseUrl, formapagamentos);
  }

  read(): Observable<FormaPagamento[]> {
    return this.http.get<FormaPagamento[]>(this.baseUrl);
  }

  readById(fpgId: string): Observable<FormaPagamento> {
    const url = `${this.baseUrl}/${fpgId}`;
    return this.http.get<FormaPagamento>(url);
  }

  update(formapagamentos: FormaPagamento): Observable<FormaPagamento> {
    const url = `${this.baseUrl}/${formapagamentos.fpgId}`;
    return this.http.put<FormaPagamento>(url, formapagamentos);
  }

  delete(fpgId: number): Observable<FormaPagamento> {
    const url = `${this.baseUrl}/${fpgId}`;
    return this.http.delete<FormaPagamento>(url);
  }
}
