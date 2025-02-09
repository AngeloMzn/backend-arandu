import { Request, Response } from "express";
import { CreateEditionUseCase } from "./CreateEditionUseCase";
import { EditionMapper } from "./mappers/EditionMapper";
import { findEditionByIdUseCase } from "../FindEditionById/DependencyInjector";
import { EditionWeightMapper } from "../../EditionWeight/CreateEditionWeight/mappers/EditionWeightMapper";
import { createEditionWeightUseCase } from "../../EditionWeight/CreateEditionWeight/DependencyInjector";
[]
export class CreateEditionController {
    constructor(
        private createEditionUseCase: CreateEditionUseCase
    ) { }

    async handle(req: Request, res: Response): Promise<Response> {
        const editionDTO = EditionMapper.toDTO(req.body);
        try {
            const edition = await this.createEditionUseCase.execute(editionDTO);
            if (edition) {
                req.body.edition = edition;
                const editionWeightDTO = EditionWeightMapper.toDTO(req.body);
                const editionWeightUseCase = createEditionWeightUseCase.execute(editionWeightDTO);    
            }

            return res.status(201).send("ta funfando pohaaaaaa");
        } catch (error: any) {
            return res.status(400).json({
                message: error.message || 'Unexpected error.'
            });
        }
    }
}