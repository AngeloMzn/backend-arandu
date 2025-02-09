import { Edition } from "../../../../domain/entities/Edition"

export interface CreateEditionEvaluationCountDTO {
    edition: Edition;
    minimumOnlineComitteeEvaluation: number;
    minimumOnlineCommomEvaluation:   number;
    minimumLiveComitteeEvaluation:   number;
    minimumLiveCommomEvaluation:     number;
    maximumOnlineComitteeEvaluation: number;
    maximumOnlineCommomEvaluation:   number;
    maximumLiveComitteeEvaluation:   number;
    maximumLiveCommomEvaluation:     number;
    
}