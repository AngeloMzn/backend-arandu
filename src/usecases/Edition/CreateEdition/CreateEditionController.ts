import { Request, Response } from "express";
import { CreateEditionUseCase } from "./CreateEditionUseCase";
import { EditionMapper } from "./mappers/EditionMapper";
import { EditionWeightMapper } from "../../EditionWeight/CreateEditionWeight/mappers/EditionWeightMapper";
import { createEditionWeightUseCase } from "../../EditionWeight/CreateEditionWeight/DependencyInjector";
import { createEditionEvaluationCountUseCase } from "../../EditionEvaluationCount/CreateEditionEvaluationCount/DependencyInjector";
import { EditionEvaluationCountMapper } from "../../EditionEvaluationCount/CreateEditionEvaluationCount/mappers/EditionEvaluationCountMapper";
[]
export class CreateEditionController {
    constructor(
        private createEditionUseCase: CreateEditionUseCase
    ) { }

    async handle(req: Request, res: Response): Promise<Response> {
        const editionDTO = EditionMapper.toDTO(req.body);
        try {
            const edition = await this.createEditionUseCase.execute(editionDTO);
            if (!await edition) {
                throw new Error("Não foi possível criar a edição");
            }

            const editionWeightDTO = EditionWeightMapper.toDTO({
                ...req.body,
                edition: edition
            });
            const editionWeightUseCase = await createEditionWeightUseCase.execute(editionWeightDTO);

            if (!editionWeightUseCase) {
                throw new Error("Não foi possível criar os pesos da edição");
            }

            const editionEvaluationCountDTO = EditionEvaluationCountMapper.toDTO({
                ...req.body,
                edition: edition
            });
            const editionEvaluationCount = await createEditionEvaluationCountUseCase.execute(editionEvaluationCountDTO);

            if (!editionEvaluationCount) {
                throw new Error("Não foi possível criar a contagem de avaliações da edição");
            }

            return res.status(201).send("Edição criada com sucesso");
        } catch (error: any) {
            return res.status(500).json({
                message:"Erro ao criar a edição: " + error.message,
            });
        }
    }
}