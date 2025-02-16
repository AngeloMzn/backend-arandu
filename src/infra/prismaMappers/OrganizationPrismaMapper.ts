import { Organizador as organizadorPrisma } from "@prisma/client";
import { Organizador as organizadorDomain } from "../../domain/entities/Organizador";
import { findUserByIdUseCase } from "../../usecases/User/FindById/DependencyInjector";

export class OrganizadorPrismaMapper {
  static async toDomain(organizador: organizadorPrisma) {
    const user = await findUserByIdUseCase.execute(organizador.userId);
    if (!user) {
      throw new Error(`User with ID ${organizador.userId} not found`);
    }
    return new organizadorDomain({
      board: organizador.board,
      user: user,
      isAccepted: organizador.isAccepted,
      id: organizador.id,
    });
  }
  static async toPrismaModel(organizador: organizadorDomain) {
    return {
      board: organizador.board,
      userId: organizador.user.id!,
      isAccepted: organizador.isAccepted,
    };
  }
}

