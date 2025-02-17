import { Request, Response } from "express";
import { FindOrganizadorByIdUseCase } from "./FindOrganizadorByIdUseCase";


export class FindOrganizadorByIdController{
    constructor(
        private findOrganizadorByIdUseCase: FindOrganizadorByIdUseCase,
    ){}

    async handle(req: Request, res: Response): Promise<Response>{
        try {
            const id = Number(req.params.id);

            const organizador = await this.findOrganizadorByIdUseCase.execute(
                id
            );
            return res.status(201).send("Organizador criado com sucesso");
        } catch (error: any) {
            return res.status(400).json({
                message: error.message || 'Unexpected error.'
            });
        }
    }
}