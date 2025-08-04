// Importa os módulos necessários para o serviço
import { Injectable } from '@angular/core';  /*Permite usar a injeção de dependência*/
import { Product } from './product.model'; /*Importa o modelo de produto (interface)*/
import { Observable } from 'rxjs'; /*Importa o tipo Observable do RxJS, usado para lidar com dados assíncronos*/
import { MatSnackBar } from '@angular/material/snack-bar'; /*Importa a MatSnackBar do Angular Material, usada para mostrar mensagens*/
import { HttpClient } from '@angular/common/http'; /*Importa o HttpClient para fazer requisições HTTP*/

/*Decorador que marca essa classe como um serviço Angular*/
@Injectable({
  providedIn: 'root'  /*Tornando o serviço disponível em toda a aplicação (injeção global)*/
})
export class ProductService {
  /*URL base da API para comunicação com o backend*/
  baseUrl = "http://localhost:8080/produtos"

  /*Construtor que injeta o MatSnackBar (para mensagens) e HttpClient (para requisições HTTP)*/
  constructor(private snackBar: MatSnackBar, private http: HttpClient) {
    
  }

  /*Método para mostrar uma mensagem com um SnackBar (tipo um pop-up)*/
  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000, /*Tempo em que a mensagem fica visível*/
      horizontalPosition: "right", /*Posição horizontal do SnackBar*/
      verticalPosition: "top" /*Posição vertical do SnackBar*/
    })
  }


  searchByTerm(termo: string) {
    return this.http.get<Product[]>(`http://localhost:8080/produtos/pesquisar?termo=${termo}`);
  }

  /*/Método para criar um produto no backend*/
  create(product: Product): Observable<Product> {
    /*Faz uma requisição POST para a API para criar um novo produto*/
    return this.http.post<Product>(this.baseUrl, product)
  }

  /*Método para ler todos os produtos*/
  read(): Observable<Product[]> {
    /*Faz uma requisição GET para pegar todos os produtos*/
    return this.http.get<Product[]>(this.baseUrl)
  }

  /*Método para ler um produto específico pelo seu ID*/
  readById(proId: string): Observable<Product> {
    /*ria a URL de requisição com o ID do produto*/
    const url = `${this.baseUrl}/${proId}`
    /*Faz uma requisição GET para pegar um único produto*/
    return this.http.get<Product>(url)
  }
 /*Método para atualizar um produto existente*/
update(product: Product): Observable<Product> {
  /*Cria a URL de requisição com o ID do produto*/
  const url = `${this.baseUrl}/${product.proId}`
  /*Faz uma requisição PUT para atualizar o produto no backend*/
  return this.http.put<Product>(url, product)
}

/*Método para excluir um produto*/
delete(proId: number): Observable<Product> {
  /*Cria a URL de requisição com o ID do produto*/
  const url = `${this.baseUrl}/${proId}`
  /*Faz uma requisição DELETE para excluir o produto*/
  return this.http.delete<Product>(url)
}
}