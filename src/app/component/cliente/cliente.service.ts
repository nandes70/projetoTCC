// Importa os módulos necessários para o serviço
import { Injectable } from '@angular/core';
import { Cliente } from './cliente.model';
import { ClienteDTO } from './dto/cliente-dto.model'; // Importa o DTO
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';

/*Decorador que marca essa classe como um serviço Angular*/
@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  /*URL base da API para comunicação com o backend*/
  baseUrl = "http://localhost:8080/cliente"

  /*Construtor que injeta o MatSnackBar (para mensagens) e HttpClient (para requisições HTTP)*/
  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  /*Método para mostrar uma mensagem com um SnackBar (tipo um pop-up)*/
  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  /*Método para criar um cliente no backend*/
  create(cliente: ClienteDTO): Observable<ClienteDTO> {
    /*Faz uma requisição POST para a API para criar um novo cliente*/
    return this.http.post<ClienteDTO>(this.baseUrl, cliente)
  }

  /*Método para ler todos os clientes*/
  read(): Observable<Cliente[]> {
    /*Faz uma requisição GET para pegar todos os clientes*/
    return this.http.get<Cliente[]>(this.baseUrl)
  }

  /*Método para ler um cliente específico pelo seu ID*/
  readById(cliId: string): Observable<Cliente> {
    /*Cria a URL de requisição com o ID do cliente*/
    const url = `${this.baseUrl}/${cliId}`
    /*Faz uma requisição GET para pegar um único cliente*/
    return this.http.get<Cliente>(url)
  }

  /*Método para atualizar um cliente existente*/
  update(cliente: Cliente): Observable<Cliente> {
    /*Cria a URL de requisição com o ID do cliente*/
    const url = `${this.baseUrl}/${cliente.cliId}`
    /*Faz uma requisição PUT para atualizar o cliente no backend*/
    return this.http.put<Cliente>(url, cliente)
  }

  /*Método para excluir um cliente*/
  delete(cliId: number): Observable<Cliente> {
    /*Cria a URL de requisição com o ID do cliente*/
    const url = `${this.baseUrl}/${cliId}`
    /*Faz uma requisição DELETE para excluir o cliente*/
    return this.http.delete<Cliente>(url)
  }
}