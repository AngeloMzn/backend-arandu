import { Organizador } from "../../domain/entities/Organizador";
import { IOrganizadorDAO } from "../../domain/idao/IOrganizadorDAO";
import { db } from "../config/db/db";
import { OrganizadorPrismaMapper } from "../prismaMappers/OrganizationPrismaMapper";

export class OrganizadorDAO implements IOrganizadorDAO {
  async findById(id: number): Promise<Organizador | null> {
    try {

      const organizadorFromPrisma = await db.organizador.findUnique({
        where: {
          id: id,
        },
        include: {
          user: true,
        },
      });

      if (!organizadorFromPrisma) {
        throw new Error("Organizador não encontrado");
      }

      return OrganizadorPrismaMapper.toDomain(organizadorFromPrisma);
    } catch (error: any) {
      console.error("Erro ao criar organizador:", error);
      throw new Error(`Erro ao criar organizador: ${error.message}`);
    }
  }
  async findAll(): Promise<Organizador[]> {
    try {
      const organizadoresFromPrisma = await db.organizador.findMany({
        include: {
          user: true,
        },
      });
      const organizadores = await Promise.all(
        organizadoresFromPrisma.map((organizador) =>
          OrganizadorPrismaMapper.toDomain(organizador)
        )
      );
      return organizadores;
    } catch (error: any) {
      console.error("Erro ao criar organizador:", error);
      throw new Error(`Erro ao criar organizador: ${error.message}`);
    }
  }
  async save(organizador: Organizador): Promise<Organizador> {
    try {
      const organizadorModel = await OrganizadorPrismaMapper.toPrismaModel(organizador);
      const organizadorFromPrisma = await db.organizador.create({
        data: organizadorModel,
        include: {
          user: true,
        },
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
