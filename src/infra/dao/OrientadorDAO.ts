import { Orientador } from "../../domain/entities/Orientador";
import { IOrientadorDAO } from "../../domain/idao/IOrientadorDAO";
import { db } from "../config/db/db";
import { orientadorPrismaMapper } from "../prismaMappers/OrientadorPrismaMapper";

export class OrientadorDAO implements IOrientadorDAO {
  async findByCPF(CPF: string): Promise<Orientador | null> {
    const userFromPrisma = await db.user.findUnique({
      where: { CPF: CPF },
    });

    if (!userFromPrisma) {
      return null;
    }

    const orientadorFromPrisma = await db.orientador.findUnique({
      where: { CPF: CPF },
      include: { address: true },
    });

    if (!orientadorFromPrisma) {
      return null;
    }

    return orientadorPrismaMapper.toDomain(userFromPrisma, orientadorFromPrisma);
  }

  async save(orientador: Orientador): Promise<Orientador> {
    const { user, orientador: orientadorModel, address } = orientadorPrismaMapper.toPrismaModel(orientador);
    let userFromPrisma;
    let orientadorFromPrisma;

    const existingUser = await db.user.findUnique({
      where: { email: user.email },
    });
  
    if (existingUser){
      userFromPrisma = await db.user.update({
        where: { CPF: user.CPF },
        data: user,
      });
    }
    else{
      userFromPrisma = await db.user.create({
        data: user,
      });
    }
  
    const existingOrientador = await db.orientador.findUnique({
      where: { CPF: orientadorModel.CPF },
    });
  
    if (existingOrientador){
      orientadorFromPrisma = await db.orientador.update({
        where: { CPF: orientadorModel.CPF },
        data: orientadorModel,
      });
    }
    else{
      orientadorFromPrisma = await db.orientador.create({
        data: {
          CPF: orientadorModel.CPF,
          birthDate: orientadorModel.birthDate,
          gender: orientadorModel.gender,
          ethnicity: orientadorModel.ethnicity,
          disability: orientadorModel.disability,
          needsAssistance: orientadorModel.needsAssistance,
          shirtSize: orientadorModel.shirtSize,
          institutionName: orientadorModel.institutionName,
          institutionType: orientadorModel.institutionType,
          institutionalBond: orientadorModel.institutionalBond,
          educationLevel: orientadorModel.educationLevel,
          course: orientadorModel.course,
          knowledgeArea: orientadorModel.knowledgeArea,
          knowledgeSubArea: orientadorModel.knowledgeSubArea,
          projectMentorshipYears: orientadorModel.projectMentorshipYears,
          institutionalProofFile: orientadorModel.institutionalProofFile,
          user: {
            connect: { id: userFromPrisma.id },
          },
        },
      });
    }
  
    if (address) {
      const addressData = {
        ...address,
        orientadorId: orientadorFromPrisma.id,
      };
  
      const existingAddress = await db.address.findUnique({
        where: { orientadorId: orientadorFromPrisma.id },
      });
  
      if (existingAddress){
        await db.address.update({
          where: { orientadorId: orientadorFromPrisma.id },
          data: addressData,
        });
      }
      else{
        await db.address.create({
          data: addressData,
        });
      }
    }

    return orientadorPrismaMapper.toDomain(user, orientadorFromPrisma);
  }
}