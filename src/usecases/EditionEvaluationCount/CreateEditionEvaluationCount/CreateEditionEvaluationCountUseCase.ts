import { IEditionWeightRepository } from "../../../domain/irepository/iEditionWeightRepository";
import { CreateEditionEvaluationCountDTO } from "./DTO/EditionEvaluationCountDTO";
import { EditionEvaluationCountMapper } from "./mappers/EditionEvaluationCountMapper";

export class CreateEditionEvaluationCountUseCase {
  constructor(
    private editionEvaluationCountRepository: IEditionWeightRepository
  ) {
    
  }

  async execute(data: CreateEditionEvaluationCountDTO) {
    const edition = EditionEvaluationCountMapper.toDomain(data)
    this.editionEvaluationCountRepository.save(edition);
  }

}