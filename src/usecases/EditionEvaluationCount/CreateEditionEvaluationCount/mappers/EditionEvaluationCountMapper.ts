import { CreateEditionEvaluationCountDTO } from "../../CreateEditionEvaluationCount/DTO/EditionEvaluationCountDTO"; // Ensure this path is correct and the file exists
import { EditionEvaluationCount } from "../../../../domain/entities/EditionEvaluationCount";

export class EditionEvaluationCountMapper {
    public static toDomain(editionEvaluationCountDTO: CreateEditionEvaluationCountDTO) {
        return new EditionEvaluationCount({
            edition:                         editionEvaluationCountDTO.edition,
            minimumOnlineComitteeEvaluation: editionEvaluationCountDTO.minimumOnlineComitteeEvaluation,
            minimumOnlineCommomEvaluation:   editionEvaluationCountDTO.minimumOnlineCommomEvaluation,
            minimumLiveComitteeEvaluation:   editionEvaluationCountDTO.minimumLiveComitteeEvaluation,
            minimumLiveCommomEvaluation:     editionEvaluationCountDTO.minimumLiveCommomEvaluation,
            maximumOnlineComitteeEvaluation: editionEvaluationCountDTO.maximumOnlineComitteeEvaluation,
            maximumOnlineCommomEvaluation:   editionEvaluationCountDTO.maximumOnlineCommomEvaluation,
            maximumLiveComitteeEvaluation:   editionEvaluationCountDTO.maximumLiveComitteeEvaluation,
            maximumLiveCommomEvaluation:     editionEvaluationCountDTO.maximumLiveCommomEvaluation
        })
    }

    public static toDTO(EditionEvaluationCount: any){
        return {
            edition:                         EditionEvaluationCount.edition,
            minimumOnlineComitteeEvaluation: EditionEvaluationCount.minimumOnlineComitteeEvaluation,
            minimumOnlineCommomEvaluation:   EditionEvaluationCount.minimumOnlineCommomEvaluation,
            minimumLiveComitteeEvaluation:   EditionEvaluationCount.minimumLiveComitteeEvaluation,
            minimumLiveCommomEvaluation:     EditionEvaluationCount.minimumLiveCommomEvaluation,
            maximumOnlineComitteeEvaluation: EditionEvaluationCount.maximumOnlineComitteeEvaluation,
            maximumOnlineCommomEvaluation:   EditionEvaluationCount.maximumOnlineCommomEvaluation,
            maximumLiveComitteeEvaluation:   EditionEvaluationCount.maximumLiveComitteeEvaluation,
            maximumLiveCommomEvaluation:     EditionEvaluationCount.maximumLiveCommomEvaluation
        }
    }
}

