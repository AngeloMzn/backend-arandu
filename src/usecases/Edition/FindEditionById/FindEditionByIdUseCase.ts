import { IEditionRepository } from "../../../domain/irepository/IEditionRepository";
import { EditionDTO } from "./DTO/EditionDTO";
import { EditionMapper } from "./mappers/EditionMapper";

export class FindEditionByIdUseCase {
  constructor(
    private editionRepository: IEditionRepository
  ) {
    
  }
  async execute(id:number) {
    return this.editionRepository.findById(id);
  }

}