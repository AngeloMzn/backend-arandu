export interface addressDTO{
    cep: string;
    logradouro: string;
    bairro: string;
    localidade: string;
    uf: string;
    ibge: string;
    erro?: boolean;
}