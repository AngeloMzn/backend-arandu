import { EditionWeight } from "../entities/EditionWeight";

export interface IEditionWeightDAO {
    save(edition: EditionWeight): Promise<EditionWeight>;
    findById(id: string): Promise<EditionWeight | null>;
}