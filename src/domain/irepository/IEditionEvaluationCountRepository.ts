import { EditionEvaluationCount } from "../entities/EditionEvaluationCount";


export interface IEditionEvaluationCountRepository {
    save(editionEvaluationCount: EditionEvaluationCount): Promise<EditionEvaluationCount>;
}