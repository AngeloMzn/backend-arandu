import { Request, Response } from "express";
import { FindAllOrganizadorUseCase } from "./FindOrganizadorByIdUseCase";


export class FindAllOrganizadorController{
    constructor(
        private findOrganizadorByIdUseCase: FindAllOrganizadorUseCase,
    ){}

    async handle(req: Request, res: Response): Promise<Response>{
        try {
            const organizadores = await this.findOrganizadorByIdUseCase.execute();
            return res.status(201).send("Organizador criado com sucesso").json(organizadores);
        } catch (error: any) {
            return res.status(400).json({
                message: error.message || 'Unexpected error.'
            });
        }
    }
}