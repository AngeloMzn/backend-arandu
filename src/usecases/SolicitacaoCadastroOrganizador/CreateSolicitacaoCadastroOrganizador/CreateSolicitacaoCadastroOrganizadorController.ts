import { Request, Response } from "express";
import { SolicitacaoCadastroOrganizadorMapper } from "./Mappers/SolicitacaoCadastroOrganizadorMapper";
import { CreateSolicitacaoCadastroOrganizadorUseCase } from "./CreateSolicitacaoCadastroOrganizadorUseCase";

export class CreateSolicitacaoCadastroOrganizadorController{
    constructor(
        private createSolicitacaoCadastroOrganizadorUseCase: CreateSolicitacaoCadastroOrganizadorUseCase
    ){}

    async handle(req: Request, res: Response): Promise<Response>{
        try {
            const  createSolicitacaoCadastroOrganizadorDTO= SolicitacaoCadastroOrganizadorMapper.toDTO(req.body); 

            const solicitacaoCadastroOrganizador = await this.createSolicitacaoCadastroOrganizadorUseCase.execute(
                createSolicitacaoCadastroOrganizadorDTO
            );

            return res.status(201).send("Organizador criado com sucesso");
        } catch (error: any) {
            return res.status(400).json({
                message: error.message || 'Unexpected error.'
            });
        }
    }
}