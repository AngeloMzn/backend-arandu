import { IEditionWeightRepository } from "../../../domain/irepository/iEditionWeightRepository";
import { CreateEditionWeightDTO } from "./DTO/EditionWeightDTO";
import { EditionWeightMapper } from "./mappers/EditionWeightMapper";

export class CreateEditionWeightUseCase {
  constructor(
    private editionWeightRepository: IEditionWeightRepository
  ) {
    
  }

  async execute(data: CreateEditionWeightDTO) {
    const editionWeight = EditionWeightMapper.toDomain(data)
    this.editionWeightRepository.save(editionWeight);
  }

}