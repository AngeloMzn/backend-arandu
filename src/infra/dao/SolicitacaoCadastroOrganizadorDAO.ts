import { SolicitacaoCadastroOrganizador } from "../../domain/entities/SolicitacaoCadastroOrganizador";
import { ISolicitacaoCadastroOrganizadorDAO } from "../../domain/idao/ISolicitacaoCadastroOrganizadorDAO";
import { db } from "../config/db/db";

export class SolicitacaoCadastroOrganizadorDAO
  implements ISolicitacaoCadastroOrganizadorDAO
{
  async save(
    solicitacaoCadastroOrganizador: SolicitacaoCadastroOrganizador
  ): Promise<SolicitacaoCadastroOrganizador> {
    try {
      const solicitacaoCadastroOrganizadorModel = await OrganizadorPrismaMapper.toPrismaModel(
        solicitacaoCadastroOrganizador
      );
      const organizadorFromPrisma = await db.organizador.create({
        data: organizadorModel,
      });

      return OrganizadorPrismaMapper.toDomain(organizadorFromPrisma);
    } catch (error: any) {
      console.error("Erro ao criar organizador:", error);
      throw new Error(`Erro ao criar organizador: ${error.message}`);
    }
  }
  update(
    organizador: SolicitacaoCadastroOrganizador
  ): Promise<SolicitacaoCadastroOrganizador> {
    throw new Error("Method not implemented.");
  }
  findAll(): Promise<SolicitacaoCadastroOrganizador[]> {
    throw new Error("Method not implemented.");
  }
}
