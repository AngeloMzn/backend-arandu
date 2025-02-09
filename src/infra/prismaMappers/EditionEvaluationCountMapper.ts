import { EditionEvaluationCount as editionEvaluationCountDomain } from "../../domain/entities/EditionEvaluationCount";
import { EditionEvaluationCount as editionEvaluationCountPrisma } from "@prisma/client";
import { findEditionByIdUseCase } from "../../usecases/Edition/FindEditionById/DependencyInjector";

export class EditionEvaluationCountPrismaMapper {
    static async toDomain(edition: editionEvaluationCountPrisma) {
        const editionFromDomain = await findEditionByIdUseCase.execute(edition.editionId);
        if (!editionFromDomain) {
            throw new Error(`Edition with ID ${edition.editionId} not found`);
        }
        return new editionEvaluationCountDomain({
            edition: editionFromDomain,
            minimumLiveComitteeEvaluation: edition.minimumLiveComitteeEvaluation,
            maximumLiveComitteeEvaluation: edition.maximumLiveComitteeEvaluation,
            minimumLiveCommomEvaluation: edition.minimumLiveCommomEvaluation,
            maximumLiveCommomEvaluation: edition.maximumLiveCommomEvaluation,
            minimumOnlineComitteeEvaluation: edition.minimumOnlineComitteeEvaluation,
            maximumOnlineComitteeEvaluation: edition.maximumOnlineComitteeEvaluation,
            minimumOnlineCommomEvaluation: edition.minimumOnlineCommomEvaluation,
            maximumOnlineCommomEvaluation: edition.maximumOnlineCommomEvaluation,
        });
    }
    static toPrismaModel(edition: editionEvaluationCountDomain) {
        return {
            editionId: edition.edition.id,
            minimumLiveComitteeEvaluation: edition.minimumLiveComitteeEvaluation,
            maximumLiveComitteeEvaluation: edition.maximumLiveComitteeEvaluation,
            minimumLiveCommomEvaluation: edition.minimumLiveCommomEvaluation,
            maximumLiveCommomEvaluation: edition.maximumLiveCommomEvaluation,
            minimumOnlineComitteeEvaluation: edition.minimumOnlineComitteeEvaluation,
            maximumOnlineComitteeEvaluation: edition.maximumOnlineComitteeEvaluation,
            minimumOnlineCommomEvaluation: edition.minimumOnlineCommomEvaluation,
            maximumOnlineCommomEvaluation: edition.maximumOnlineCommomEvaluation,
        };
    }
}