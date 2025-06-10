import { IAvaliadorRepository } from "../../../domain/irepository/IAvaliadorRepository";

export class FindAvaliadorByIdUseCase {
  constructor(
    private avaliadorRepository: IAvaliadorRepository
  ) {}

  async execute(id: number) {

    return await this.avaliadorRepository.findById(id);

  }

}