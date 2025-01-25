import { EditionWeight } from "../entities/EditionWeight";


export interface IEditionWeightRepository {
    save(editionWeight: EditionWeight): Promise<EditionWeight>;
}