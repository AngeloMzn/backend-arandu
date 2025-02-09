import { EditionWeight } from "../../domain/entities/EditionWeight";
import { IEditionWeightRepository } from "../../domain/irepository/iEditionWeightRepository";
import { EditionDAO } from "../dao/EditionDAO";

export class EditionWeightRepository implements IEditionWeightRepository {
    
    constructor(private editionDAO: EditionDAO) {}
 
    async save(editionWeight: EditionWeight): Promise<EditionWeight> {
        return this.editionDAO.save(editionWeight);
    }
}

