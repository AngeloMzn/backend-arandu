import { IOrganizadorRepository } from "../../../domain/irepository/IOrganizadorRepository";

export class FindOrganizadorByIdUseCase {
  constructor(
    private organizadorRepository: IOrganizadorRepository
  ) {}

  async execute(id: number) {

    return await this.organizadorRepository.findById(id);

  }

}