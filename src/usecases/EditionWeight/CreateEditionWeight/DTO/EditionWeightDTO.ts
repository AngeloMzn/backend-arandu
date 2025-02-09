import { Edition } from "../../../../domain/entities/Edition"

export interface CreateEditionWeightDTO {
    edition:                      Edition
    liveComitteeEvaluationWeight:   number
    liveCommomEvaluationWeight:     number
    onlineComitteeEvaluationWeight: number
    onlineCommomEvaluationWeight:   number
}