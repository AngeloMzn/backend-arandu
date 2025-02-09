import { Request, Response } from "express";
import { EditionWeightMapper } from "./mappers/EditionWeightMapper";
import { CreateEditionWeightUseCase } from "./CreateEditionWeightUseCase";
[]
export class CreateEditionController{
    constructor(
        private createEditionWeightUseCase: CreateEditionWeightUseCase
    ){}

    async handle(req: Request, res: Response): Promise<Response>{
        const editionWeightDTO = EditionWeightMapper.toDTO(req.body) ;
        try {
            await this.createEditionWeightUseCase.execute(editionWeightDTO);

            return res.status(201).send("ta funfando pohaaaaaa");
        } catch (error: any) {
            return res.status(400).json({
                message: error.message || 'Unexpected error.'
            });
        }
    }
}