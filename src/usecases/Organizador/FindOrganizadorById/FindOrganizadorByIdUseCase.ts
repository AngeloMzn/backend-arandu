import { IOrganizadorRepository } from "../../../domain/irepository/IOrganizadorRepository";
import { CreateOrganizadorDTO } from "./DTO/CreateOrganizadorDTO";
import { OrganizadorMapper } from "./Mappers/OrganizadorMapper";

export class FindOrganizadorByIdUseCase {
  constructor(
    private organizadorRepository: IOrganizadorRepository
  ) {}

  async execute(id: number) {

    return await this.organizadorRepository.findById(organizador);

  }

}