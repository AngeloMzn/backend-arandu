import { EditionWeight as editionWeightPrisma } from "@prisma/client";
import { EditionWeight as editionWeightDomain } from "../../domain/entities/EditionWeight";
import { findEditionByIdUseCase } from "../../usecases/Edition/FindEditionById/DependencyInjector";

export class EditionWeightPrismaMapper {
    static async toDomain(edition: editionWeightPrisma) {
        const editionFromDomain = await findEditionByIdUseCase.execute(edition.editionId);
        if (!editionFromDomain) {
            throw new Error(`Edition with ID ${edition.editionId} not found`);
        }
        return new editionWeightDomain({
            edition: editionFromDomain,
            liveComitteeEvaluationWeight: edition.liveComitteeEvaluationWeight,
            liveCommomEvaluationWeight: edition.liveCommomEvaluationWeight,
            onlineComitteeEvaluationWeight: edition.onlineComitteeEvaluationWeight,
            onlineCommomEvaluationWeight: edition.onlineCommomEvaluationWeight,

        });
    }
    static toPrismaModel(edition: editionWeightDomain) {
        return {
            id: edition.id,
            liveComitteeEvaluationWeight: edition.liveComitteeEvaluationWeight,
            liveCommomEvaluationWeight: edition.liveCommomEvaluationWeight,
            onlineComitteeEvaluationWeight: edition.onlineComitteeEvaluationWeight,
            onlineCommomEvaluationWeight: edition.onlineCommomEvaluationWeight,
            editionId: edition.edition.id
        };
    }
}