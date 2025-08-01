import { Injectable } from '@angular/core';
import { Fornecedor } from './fornecedor.model';       // Modelo simples (sem DTO)
import { FornecedorDTO } from './dto/fornecedor-dto.model';    // DTO só para create
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FornecedorService {
  baseUrl = "http://localhost:8080/fornecedor";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    });
  }

  create(fornecedorDTO: FornecedorDTO): Observable<FornecedorDTO> {
    return this.http.post<FornecedorDTO>(this.baseUrl, fornecedorDTO);
  }

  read(): Observable<Fornecedor[]> {
    return this.http.get<Fornecedor[]>(this.baseUrl);
  }

  readById(forId: string): Observable<Fornecedor> {
    const url = `${this.baseUrl}/${forId}`;
    return this.http.get<Fornecedor>(url);
  }

 update(fornecedor: Fornecedor): Observable<Fornecedor> {
  const url = `${this.baseUrl}/${fornecedor.forId}`; // aqui usa 'id', não 'forId'
  return this.http.put<Fornecedor>(url, fornecedor);
}

 delete(id: number): Observable<Fornecedor> {
  const url = `${this.baseUrl}/${id}`;
  return this.http.delete<Fornecedor>(url);
}
}
