import { Edition } from "../../domain/entities/Edition";
import { IEditionRepository } from "../../domain/irepository/IEditionRepository";
import { EditionDAO } from "../dao/EditionDAO";

export class EditionRepository implements IEditionRepository {
    
    constructor(private editionDAO: EditionDAO) {}
 
    async save(edition: Edition): Promise<Edition> {
        return this.editionDAO.save(edition);
    }
}

