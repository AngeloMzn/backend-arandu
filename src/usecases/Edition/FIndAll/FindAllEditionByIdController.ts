import { Request, Response } from "express";
import { FindAllEditionByIdUseCase } from "./FindEditionByIdUseCase";
[]
export class FindAllEditionByIdController{
    constructor(
        private findAllEditionByIdUseCase: FindAllEditionByIdUseCase
    ){}

    async handle(req: Request, res: Response): Promise<Response>{
        const id = Number(req.params.id);
        try {
            await this.findAllEditionByIdUseCase.execute(id);

            return res.status(201).send("ta funfando");
        } catch (error: any) {
            return res.status(400).json({
                message: error.message || 'Unexpected error.'
            });
        }
    }
}