import { Injectable } from '@angular/core';
import { Cliente } from './cliente.model';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { ClienteDTO } from './dto/cliente-dto.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService 
{
  baseUrl = "http://localhost:8080/cliente"
  
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
  create(cliente: ClienteDTO): Observable<ClienteDTO> {
    return this.http.post<ClienteDTO>(this.baseUrl, cliente);
  }
  read(): Observable<Cliente[]>
  {
    return this.http.get<Cliente[]>(this.baseUrl)
  }
  readById(id: string): Observable<Cliente>
  {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Cliente>(url)
  }
  update(cliente: Cliente): Observable<Cliente>
  {
    const url = `${this.baseUrl}/${cliente.id}`
    return this.http.put<Cliente>(url, cliente)
  }
  delete(id: number): Observable<Cliente>
  {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Cliente>(url)
  }  
}
