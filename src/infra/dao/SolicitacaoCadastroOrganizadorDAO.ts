import { SolicitacaoCadastroOrganizador } from "../../domain/entities/SolicitacaoCadastroOrganizador";
import { ISolicitacaoCadastroOrganizadorDAO } from "../../domain/idao/ISolicitacaoCadastroOrganizadorDAO";
import { db } from "../config/db/db";
import { SolicitacaoCadastroOrganizadorPrismaMapper } from "../prismaMappers/SolicitacaoCadastroOrganizadorMapper";

export class SolicitacaoCadastroOrganizadorDAO
  implements ISolicitacaoCadastroOrganizadorDAO
{
  async save(
    solicitacaoCadastroOrganizador: SolicitacaoCadastroOrganizador
  ): Promise<SolicitacaoCadastroOrganizador> {
    try {
      const solicitacaoCadastroOrganizadorModel = await SolicitacaoCadastroOrganizadorPrismaMapper.toPrismaModel(
        solicitacaoCadastroOrganizador
      );
  const solicitacaoCadastroOrganizadorFromPrisma = await db.solicitacaoCadastroOrganizador.create({
    data: solicitacaoCadastroOrganizadorModel,
    include: {
      organizador: true,
    },
  });
      return SolicitacaoCadastroOrganizadorPrismaMapper.toDomain(solicitacaoCadastroOrganizadorFromPrisma);
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
