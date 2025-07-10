export interface FormaPagamento
{
    fpgId?: number
    fpgDescricao: string
    fpgPermiteParcelamento: string
    fpgNumeroMaxParcela: number | null
    fpgTaxaAdicional: number  | null
    fpgStatus: string
}