import { Injectable } from '@angular/core';
import { Contato } from './contato.model';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContatoService 
{
  baseUrl = "http://localhost:3001/contato"
  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  showMessage(msg: string): void
  {
    this.snackBar.open(msg, 'X',
      {
        duration: 3000,
        horizontalPosition: "right",
        verticalPosition: "top"
      })
  }
  create(contato: Contato): Observable<Contato>
  {
    return this.http.post<Contato>(this.baseUrl, contato)
  }
  read(): Observable<Contato[]>
  {
    return this.http.get<Contato[]>(this.baseUrl)
  }
  readById(id: string): Observable<Contato>
  {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Contato>(url)
  }
  update(contato: Contato): Observable<Contato>
  {
    const url = `${this.baseUrl}/${contato.id}`
    return this.http.put<Contato>(url, contato)
  }
  delete(id: number): Observable<Contato>
  {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Contato>(url)
  }
}
