export interface Fornecedor
{
    id?: number
    nameFanatasia: string
    razao_Social: string
    cpfCnpj: string
    status: string
    proDataCadastro: string | null
    forResponsavel: string

    conCelular: string
    conTelefoneComercial: string
    conEmail: string

    endRua: string
    endNumero: string
    endCidade: string
    endBairro: string
    endCep: string
    endEstado: string
    endPais: string
    endComplemento: string
    endTipoResidencia: string
}