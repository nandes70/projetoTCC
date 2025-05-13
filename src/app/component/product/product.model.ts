export interface Product
{
    proId?: number
    proNome: string
    proPrecoCusto: number | null
    proPrecoVenda: number | null
    proMarca: string
    proModelo: string
    proEstoque: number | null
    proCor: string
    proMaterial: string
    proFabricante: string
    proDescricao: string
    proCategoria: string
    proCodigoBarras: string
    proDataCadastro: string | null
    proDataAtualizacao: string | null
    proAtivo: boolean
}