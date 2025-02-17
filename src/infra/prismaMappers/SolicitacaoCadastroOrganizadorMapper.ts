import { SolicitacaoCadastroOrganizador as solicitacaoCadastroOrganizadorPrisma, Organizador } from "@prisma/client";
import { SolicitacaoCadastroOrganizador as solicitacaoCadastroOrganizadorDomain } from "../../domain/entities/SolicitacaoCadastroOrganizador";

export class SolicitacaoCadastroOrganizadorPrismaMapper {
  static async toDomain(solicitacaoCadastroOrganizador: solicitacaoCadastroOrganizadorPrisma & { organizador: Organizador }) {
    return new solicitacaoCadastroOrganizadorDomain({
      justification: solicitacaoCadastroOrganizador.justification,
      organizador: solicitacaoCadastroOrganizador.organizador,
      situation: solicitacaoCadastroOrganizador.situation,
      data: solicitacaoCadastroOrganizador.date,
      id: solicitacaoCadastroOrganizador.id,
    });
  }
  static async toPrismaModel(solicitacaoCadastroOrganizadorDomain: solicitacaoCadastroOrganizadorDomain) {
    return {
      justification: solicitacaoCadastroOrganizadorDomain.justification ?? '',
      organizadorId: solicitacaoCadastroOrganizadorDomain.organizador.id,
      situation: solicitacaoCadastroOrganizadorDomain.situation ?? '',
    };
  }
}

