import { Organizador } from "../../../../domain/entities/Organizador";

export interface CreateSolicitacaoCadastroOrganizadorDTO {
    justification: string;
    situation: string;  
    organizador: Organizador;
}