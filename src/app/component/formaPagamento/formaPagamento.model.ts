export interface FormaPagamento
{
    fpgId?: number
    fpgDescricao: string
    fpgStatus: string
    fpgPermiteParcelamento: string
    fpgNumeroMaximoParcelas: number | null
    fpgTipo: string
    fpgQtdParcela: number | null
    fpgTaxaAdiciona: number | null
}