import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUrl = "http://localhost:3001/products"

  constructor(private snackBar: MatSnackBat, private http: HttpClient) {}

  showMessage(msg: string): void
  {
    this.snackBar.open(msg, 'X',
      {
        duration: 3000,
        horizontalPosition: "right",
        verticalPosition: "top"
      })
  }
  create(product: Product): Observable<Product>
  {
    return this.http.post<Product>(this.baseUrl, product)
  }
  read(): Observable<Product[]>
  {
    return this.http.get<Product[]>(this.baseUrl)
  }
  readById(id: string): Observable<Product>
  {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Product>(url)
  }
}
