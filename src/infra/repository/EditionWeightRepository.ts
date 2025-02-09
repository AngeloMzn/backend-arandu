import { EditionWeight } from "../../domain/entities/EditionWeight";
import { IEditionWeightRepository } from "../../domain/irepository/iEditionWeightRepository";
import { EditionDAO } from "../dao/EditionDAO";
import { EditionWeightDAO } from "../dao/EditionWeightDAO";

export class EditionWeightRepository implements IEditionWeightRepository {
    
    constructor(private editionWeightDAO: EditionWeightDAO) {}
 
    async save(editionWeight: EditionWeight): Promise<EditionWeight> {
        return this.editionWeightDAO.save(editionWeight);
    }
}

