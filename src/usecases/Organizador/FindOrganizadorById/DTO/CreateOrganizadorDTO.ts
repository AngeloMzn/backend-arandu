import { User } from "../../../../domain/entities/User";

export interface CreateOrganizadorDTO {
    board: string;
    user: User;
    isAccepted: boolean;
}

