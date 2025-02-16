import { SolicitacaoCadastroOrganizador as solicitacaoCadastroOrganizadorPrisma } from "@prisma/client";
import { SolicitacaoCadastroOrganizador as solicitacaoCadastroOrganizadorDomain } from "../../domain/entities/SolicitacaoCadastroOrganizador";

export class OrganizadorPrismaMapper {
  static async toDomain(solicitacaoCadastroOrganizador: ) {
    const organizador = await findUserByIdUseCase.execute(organizador.userId);
    if (!user) {
      throw new Error(`Organizador with ID ${organizador.userId} not found`);
    }
    return new solicitacaoCadastroOrganizadorDomain({
        
    });
  }
  static async toPrismaModel(solicitacaoCadastroOrganizadorDomain: solicitacaoCadastroOrganizadorDomain) {
    return {
   ,
    };
  }
}

