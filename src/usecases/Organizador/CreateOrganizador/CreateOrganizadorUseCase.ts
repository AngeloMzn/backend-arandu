import { IOrganizadorRepository } from "../../../domain/irepository/IOrganizadorRepository";
import { CreateOrganizadorDTO } from "./DTO/CreateOrganizadorDTO";
import { OrganizadorMapper } from "./Mappers/OrganizadorMapper";

export class CreateOrganizadorUseCase {
  constructor(
    private organizadorRepository: IOrganizadorRepository
  ) {}

  async execute(data: CreateOrganizadorDTO) {

    const organizador = OrganizadorMapper.toDomain(data);
    return await this.organizadorRepository.save(organizador);

  }

}