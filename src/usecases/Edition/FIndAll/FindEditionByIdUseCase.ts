import { IEditionRepository } from "../../../domain/irepository/IEditionRepository";

export class FindAllEditionByIdUseCase {
  constructor(
    private editionRepository: IEditionRepository
  ) {
    
  }
  async execute(id:number) {
    return this.editionRepository.findById(id);
  }

}