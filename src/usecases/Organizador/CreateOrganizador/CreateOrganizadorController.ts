import { Request, Response } from "express";
import { CreateOrganizadorUseCase } from "./CreateOrganizadorUseCase";
import { CreateUserUseCase } from "../../User/CreateUser/CreateUserUseCase";
import { UserMapper } from "./Mappers/UserMapper";
import { OrganizadorMapper } from "./Mappers/OrganizadorMapper";

export class CreateOrganizadorController{
    constructor(
        private createOrganizadorUseCase: CreateOrganizadorUseCase,
        private createUserUseCase: CreateUserUseCase
    ){}

    async handle(req: Request, res: Response): Promise<Response>{
        try {
            const userDTO = UserMapper.toDTO(req.body); 

            const user = await this.createUserUseCase.execute(
                userDTO
            );

            if (user === null || user === undefined) {
                throw new Error("Não foi possível criar o usuário");
            }

            req.body.user = user;

            const organizadorDTO = OrganizadorMapper.toDTO(req.body);

            await this.createOrganizadorUseCase.execute(
                organizadorDTO
            );

            return res.status(201).send("Organizador criado com sucesso");
        } catch (error: any) {
            return res.status(400).json({
                message: error.message || 'Unexpected error.'
            });
        }
    }
}