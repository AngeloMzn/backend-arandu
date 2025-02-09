import { EditionEvaluationCount } from "../entities/EditionEvaluationCount";

export interface IEditionEvaluationCountDAO {
    save(edition: EditionEvaluationCount): Promise<EditionEvaluationCount>;
    findById(id: number): Promise<EditionEvaluationCount | null>;
}