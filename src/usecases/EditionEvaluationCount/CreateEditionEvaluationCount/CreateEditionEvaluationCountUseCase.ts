import { IEditionEvaluationCountRepository } from "../../../domain/irepository/IEditionEvaluationCountRepository";
import { CreateEditionEvaluationCountDTO } from "./DTO/EditionEvaluationCountDTO";
import { EditionEvaluationCountMapper } from "./mappers/EditionEvaluationCountMapper";

export class CreateEditionEvaluationCountUseCase {
  constructor(
    private editionEvaluationCountRepository: IEditionEvaluationCountRepository
  ) {
    
  }

  async execute(data: CreateEditionEvaluationCountDTO) {
    const editionEvaluationCount = EditionEvaluationCountMapper.toDomain(data)
    return this.editionEvaluationCountRepository.save(editionEvaluationCount);
  }

}