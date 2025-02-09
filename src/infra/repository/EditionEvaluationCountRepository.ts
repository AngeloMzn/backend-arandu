import { Edition } from "../../domain/entities/Edition";
import { EditionEvaluationCount } from "../../domain/entities/EditionEvaluationCount";
import { IEditionEvaluationCountRepository } from "../../domain/irepository/IEditionEvaluationCountRepository";
import { EditionEvaluationCountDAO } from "../dao/EditionEvaluationCountDAO";

export class EditionEvaluationCountRepository implements IEditionEvaluationCountRepository {
    
    constructor(private editionEvaluationCountDAO : EditionEvaluationCountDAO ) {}
   
    save(editionEvaluationCount: EditionEvaluationCount): Promise<EditionEvaluationCount> {
        return this.editionEvaluationCountDAO.save(editionEvaluationCount);
    }
    
}

