import { Endereco } from '../endereco/endereco.model';
import { Contato } from '../contato/contato.model';

export interface Cliente {
  cliId?: number;
  cliNome: string;
  cliCpf: string;
  dataNascimento: Date | null;
  formaPagamento: string ;
  cliStatus: string;

  endereco: Endereco;
  contato: Contato;
}
