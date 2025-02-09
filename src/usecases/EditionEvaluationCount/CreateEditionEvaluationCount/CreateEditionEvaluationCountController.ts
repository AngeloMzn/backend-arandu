import { Request, Response } from "express";
import { CreateEditionEvaluationCountUseCase } from "./CreateEditionEvaluationCountUseCase";
import { EditionEvaluationCountMapper } from "./mappers/EditionEvaluationCountMapper";
[]
export class CreateEditionController{
    constructor(
        private createEditionWeightUseCase: CreateEditionEvaluationCountUseCase
    ){}

    async handle(req: Request, res: Response): Promise<Response>{
        const editionWeightDTO = EditionEvaluationCountMapper.toDTO(req.body) ;
        try {
            await this.createEditionEvaluationCountUseCase.execute(editionEvaluationCountDTO);

            return res.status(201).send("ta funfando pohaaaaaa");
        } catch (error: any) {
            return res.status(400).json({
                message: error.message || 'Unexpected error.'
            });
        }
    }
}