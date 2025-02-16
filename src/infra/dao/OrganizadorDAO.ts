import { Organizador } from "../../domain/entities/Organizador";
import { IOrganizadorDAO } from "../../domain/idao/IOrganizadorDAO";
import { db } from "../config/db/db";
import { OrganizadorPrismaMapper } from "../prismaMappers/OrganizationPrismaMapper";

export class OrganizadorDAO implements IOrganizadorDAO {
  async save(organizador: Organizador): Promise<Organizador> {
    try {
      const organizadorModel = await OrganizadorPrismaMapper.toPrismaModel(organizador);
      const organizadorFromPrisma = await db.organizador.create({
        data: organizadorModel,
      });

      return OrganizadorPrismaMapper.toDomain(organizadorFromPrisma);
    } catch (error: any) {
      console.error("Erro ao criar organizador:", error);
      throw new Error(`Erro ao criar organizador: ${error.message}`);
    }
  }
  update(organizador: Organizador): Promise<Organizador> {
    throw new Error("Method not implemented.");
  }
}
