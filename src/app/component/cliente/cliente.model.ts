export interface Cliente {
    id?: number;
    nome: string;
    cpfCnpj: string;
    dataNascimento: string;
    formaPagamento: string;
    status: string;
  
    conCelular: string;
    conTelefoneComercial: string;
    conEmail: string;
    conEmailSecundario: string;
  
    endRua: string;
    endBairro: string;
    endNumero: string;
    endCidade: string;
    endCep: string;
    endEstado: string;
  }
  