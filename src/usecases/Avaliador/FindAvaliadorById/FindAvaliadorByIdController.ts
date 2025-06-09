import { Request, Response } from "express";
import { FindAvaliadorByIdUseCase } from "./FindAvaliadorByIdUseCase";


export class FindAvaliadorByIdController{
    constructor(
        private findAvaliadorByIdUseCase: FindAvaliadorByIdUseCase,
    ){}

    async handle(req: Request, res: Response): Promise<Response>{
        try {
            const id = Number(req.params.id);

            const avaliador = await this.findAvaliadorByIdUseCase.execute(
                id
            );
            return res.status(201).send("Organizador criado com sucesso").json(avaliador);
        } catch (error: any) {
            return res.status(400).json({
                message: error.message || 'Unexpected error.'
            });
        }
    }
}