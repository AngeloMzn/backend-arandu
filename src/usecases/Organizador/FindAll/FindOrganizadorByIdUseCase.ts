import { IOrganizadorRepository } from "../../../domain/irepository/IOrganizadorRepository";

export class FindAllOrganizadorUseCase {
  constructor(
    private organizadorRepository: IOrganizadorRepository
  ) {}

  async execute() {

    return await this.organizadorRepository.findAll();

  }

}