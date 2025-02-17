import { Organizador } from "../../../../domain/entities/Organizador";
import { CreateOrganizadorDTO } from "../DTO/CreateOrganizadorDTO";

export class OrganizadorMapper {
    public static toDomain(createOrganizadorDTO: CreateOrganizadorDTO) {
        return new Organizador({
            board: createOrganizadorDTO.board,
            user: createOrganizadorDTO.user,
            isAccepted: createOrganizadorDTO.isAccepted
        })
    }

    public static toDTO(req: any){
    return {
        board: req.board,
        user: req.user,
        isAccepted: req.isAccepted
    }
}
}
