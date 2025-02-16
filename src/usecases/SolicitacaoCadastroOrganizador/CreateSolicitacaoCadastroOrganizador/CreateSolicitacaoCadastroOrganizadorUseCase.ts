import { IOrganizadorRepository } from "../../../domain/irepository/IOrganizadorRepository";
import { ISolicitacaoCadastroOrganizadorRepository } from "../../../domain/irepository/ISolicitacaoCadastroOrganizadorRepository";
import { CreateSolicitacaoCadastroOrganizadorDTO } from "./DTO/CreateSolicitacaoCadastroOrganizadorDTO";
import { SolicitacaoCadastroOrganizadorMapper } from "./Mappers/SolicitacaoCadastroOrganizadorMapper";

export class CreateSolicitacaoCadastroOrganizadorUseCase {
  constructor(
    private solicitacaoCadastroOrganizadorRepository: ISolicitacaoCadastroOrganizadorRepository
  ) {}

  async execute(data: CreateSolicitacaoCadastroOrganizadorDTO) {

    const solicitacaoCadastroOrganizador = SolicitacaoCadastroOrganizadorMapper.toDomain(data);
    return await this.solicitacaoCadastroOrganizadorRepository.save(solicitacaoCadastroOrganizador);
  }

}