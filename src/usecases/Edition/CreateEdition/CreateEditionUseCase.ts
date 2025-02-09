import { IEditionRepository } from "../../../domain/irepository/IEditionRepository";
import { EditionDTO } from "./DTO/EditionDTO";
import { EditionMapper } from "./mappers/EditionMapper";

export class CreateEditionUseCase {
  constructor(
    private editionRepository: IEditionRepository
  ) {
    
  }

  async execute(data: EditionDTO) {
    const edition = EditionMapper.toDomain(data)
    return this.editionRepository.save(edition);
  }

}