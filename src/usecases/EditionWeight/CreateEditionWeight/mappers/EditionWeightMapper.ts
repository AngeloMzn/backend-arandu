import { EditionWeight } from "../../../../domain/entities/EditionWeight";
import { CreateEditionWeightDTO } from "../DTO/EditionWeightDTO";

export class EditionWeightMapper {
    public static toDomain(editionWeightDTO: CreateEditionWeightDTO) {
        return new EditionWeight({
            edition:                        editionWeightDTO.edition,
            liveComitteeEvaluationWeight:   editionWeightDTO.liveComitteeEvaluationWeight,
            liveCommomEvaluationWeight:     editionWeightDTO.liveCommomEvaluationWeight,
            onlineComitteeEvaluationWeight: editionWeightDTO.onlineComitteeEvaluationWeight,
            onlineCommomEvaluationWeight:   editionWeightDTO.onlineCommomEvaluationWeight
        })
    }

    public static toDTO(editionWeight: any){
    return {
        edition:                        editionWeight.edition,
        liveComitteeEvaluationWeight:   editionWeight.liveComitteeEvaluationWeight,
        liveCommomEvaluationWeight:     editionWeight.liveCommomEvaluationWeight,
        onlineComitteeEvaluationWeight: editionWeight.onlineComitteeEvaluationWeight,
        onlineCommomEvaluationWeight:   editionWeight.onlineCommomEvaluationWeight
    }
}
}
