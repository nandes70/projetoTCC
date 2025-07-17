export interface ClienteDTO {
    cliNome: string;
    cliCpf: string;
    cliStatus: string;
    dataNascimento: string | null;  // string no formato ISO (yyyy-MM-dd) ou null
    formaPagamento: string;
    
    endRua: string;
    endNumero: string;
    endCidade: string;
    endCep: string;
    endEstado: string;
    endBairro: string;
    
    conCelular: string;
    conTelefoneComercial: string;
    conEmail: string;
    conEmailSecundario: string;
  }
  