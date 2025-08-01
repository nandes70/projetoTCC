import { Endereco } from '../endereco/endereco.model';
import { Contato } from '../contato/contato.model';

export interface Fornecedor {
  forId?: number;
  forNomeFantasia: string;
  forRazaoSocial: string;
  forCnpj: string;
  forStatus: string;

  endereco: Endereco;
  contato: Contato;
}