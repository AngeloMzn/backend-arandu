import { Organizador as organizadorPrisma, User } from "@prisma/client";
import { Organizador as organizadorDomain } from "../../domain/entities/Organizador";
import { findUserByIdUseCase } from "../../usecases/User/FindById/DependencyInjector";
import { UserMapper } from "../../usecases/Organizador/CreateOrganizador/Mappers/UserMapper";
import { userPrismaMapper } from "./UserPrismaMapper";

export class OrganizadorPrismaMapper {
  static async toDomain(organizador: organizadorPrisma & { user: User }) {
    const user = userPrismaMapper.toDomain(organizador.user);
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



