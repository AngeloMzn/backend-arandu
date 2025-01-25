import { Request, Response } from "express";
import { CreateEditionUseCase } from "./CreateEditionUseCase";
import { EditionMapper } from "./mappers/EditionMapper";
[]
export class CreateEditionController{
    constructor(
        private createEditionUseCase: CreateEditionUseCase
    ){}

    async handle(req: Request, res: Response): Promise<Response>{
        const editionDTO = EditionMapper.toDTO(req.body) ;
        try {
            await this.createEditionUseCase.execute(editionDTO);

            return res.status(201).send("ta funfando pohaaaaaa");
        } catch (error: any) {
            return res.status(400).json({
                message: error.message || 'Unexpected error.'
            });
        }
    }
}