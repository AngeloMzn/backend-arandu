import { Edition } from "../../domain/entities/Edition";
import { IEditionRepository } from "../../domain/irepository/IEditionRepository";
import { EditionDAO } from "../dao/EditionDAO";

export class EditionRepository implements IEditionRepository {
    
    constructor(private editionDAO: EditionDAO) {}
  findAll(): Promise<Edition[]> {
    return this.editionDAO.findAll();
  }
    
    findById(id: number): Promise<Edition | null> {
      return this.editionDAO.findById(id);
    }
 
    async save(edition: Edition): Promise<Edition> {
        return this.editionDAO.save(edition);
    }
}

