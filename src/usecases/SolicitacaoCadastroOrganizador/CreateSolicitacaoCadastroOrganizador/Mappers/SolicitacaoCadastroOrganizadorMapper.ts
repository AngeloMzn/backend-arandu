import { SolicitacaoCadastroOrganizador } from "../../../../domain/entities/SolicitacaoCadastroOrganizador"
import { CreateSolicitacaoCadastroOrganizadorDTO } from "../DTO/CreateSolicitacaoCadastroOrganizadorDTO"


export class SolicitacaoCadastroOrganizadorMapper {
    public static toDomain(createSolicitacaoCadastroOrganizadorDTO: CreateSolicitacaoCadastroOrganizadorDTO) {
        return new SolicitacaoCadastroOrganizador({
            justification: createSolicitacaoCadastroOrganizadorDTO.justification,
            situation: createSolicitacaoCadastroOrganizadorDTO.situation,
            organizador: createSolicitacaoCadastroOrganizadorDTO.organizador
        })
    }

    public static toDTO(req: any){
    return {
        justification: req.justification,
        situation: req.situation,
        organizador: req.organizador
    }
}
}
