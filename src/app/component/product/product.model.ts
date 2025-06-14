export interface Product {
    proId?: number;                 // Opcional para diferenciar criação (sem id) e atualização (com id)
    proNome: string;
    proPrecoCusto: number | null;
    proPrecoVenda: number | null;
    proDescricao: string;
    proEstoque: number | null;
    proCategoria: string;
    proCodigoBarra: string;
    proMarca: string;
    proStatus: boolean | null;
    proFabricante: string;
    proAplicacao: string;
    proDataCadastro: string;
    proDataAtualizacao: string;
  }