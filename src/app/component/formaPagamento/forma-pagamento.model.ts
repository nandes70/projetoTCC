export interface FormaPagamento {
    fpgId?: number;                        // ID pode ser opcional para criação
    fpgDescricao: string;                 // Descrição
    fpgPermiteParcelamento: string;      // "Sim" ou "Não"
    fpgNumeroMaxParcela: number | null;  // Pode ser null se não permitir
    fpgTaxaAdicional: number | null;     // Pode ser null se não permitir
    fpgStatus: boolean;                  // true ou false
  }
  