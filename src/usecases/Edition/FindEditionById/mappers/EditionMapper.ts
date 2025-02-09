import { Edition } from "../../../../domain/entities/Edition";
import { EditionWeight } from "../../../../domain/entities/EditionWeight";
import { EditionDTO } from "../DTO/EditionDTO";

export class EditionMapper {
    public static toDomain(editionDTO: EditionDTO) {
        return new Edition({
            name: editionDTO.name,
            year: editionDTO.year,
            registrationStart: editionDTO.registrationStart,
            registrationEnd: editionDTO.registrationEnd,
            fixesStart: editionDTO.fixesStart,
            fixesEnd: editionDTO.fixesEnd,
            onlineEvaluationStart: editionDTO.onlineEvaluationStart,
            onlineEvaluationEnd: editionDTO.onlineEvaluationEnd,
            liveEvaluationStart: editionDTO.liveEvaluationStart,
            liveEvaluationEnd: editionDTO.liveEvaluationEnd,
        })
    }

    public static toDTO(edition: any){
    return {
        name: edition.name,
        year: edition.year,
        registrationStart: edition.registrationStart,
        registrationEnd: edition.registrationEnd,
        fixesStart: edition.fixesStart,
        fixesEnd: edition.fixesEnd,
        onlineEvaluationStart: edition.onlineEvaluationStart,
        onlineEvaluationEnd: edition.onlineEvaluationEnd,
        liveEvaluationStart: edition.liveEvaluationStart,
        liveEvaluationEnd: edition.liveEvaluationEnd
    }
}
}
