import { Request, Response } from "express";
import { FindEditionByIdUseCase } from "./FindEditionByIdUseCase";
[]
export class FindEditionByIdController{
    constructor(
        private findEditionByIdUseCase: FindEditionByIdUseCase
    ){}

    async handle(req: Request, res: Response): Promise<Response>{
        const id = Number(req.params.id);
        try {
            await this.findEditionByIdUseCase.execute(id);

            return res.status(201).send("ta funfando pohaaaaaa");
        } catch (error: any) {
            return res.status(400).json({
                message: error.message || 'Unexpected error.'
            });
        }
    }
}