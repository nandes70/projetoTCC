export interface FornecedorDTO {
  forId?: number;
  forNomeFantasia: string;
  forRazaoSocial: string;
  forCnpj: string;
  forStatus: string;

  endRua: string;
  endNumero: string;
  endBairro: string;
  endCidade: string;
  endEstado: string;
  endCep: string;

  conCelular: string;
  conTelefoneComercial?: string;
  conEmail: string;
  conEmailSecundario?: string;
}
