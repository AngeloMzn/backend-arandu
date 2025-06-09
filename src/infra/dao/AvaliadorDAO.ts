import { Avaliador } from "../../domain/entities/Avaliador";
import { IAvaliadorDAO } from "../../domain/idao/IAvaliadorDAO";
import { db } from "../config/db/db";
import { avaliadorPrismaMapper } from "../prismaMappers/AvaliadorPrismaMapper";

export class AvaliadorDAO implements IAvaliadorDAO {
  findById(id: number): Promise<Avaliador | null> {
    return db.avaliador.findUnique({
      where: { id: id },
      include: { address: true, user: true },
    }).then(avaliadorFromPrisma => {
      if (!avaliadorFromPrisma || !avaliadorFromPrisma.user) {
        return null;
      }
      return avaliadorPrismaMapper.toDomain(avaliadorFromPrisma.user, avaliadorFromPrisma);
    });
  }
  
  async findByCPF(CPF: string): Promise<Avaliador | null> {
    const userFromPrisma = await db.user.findUnique({
      where: { CPF: CPF },
    });

    if (!userFromPrisma) {
      return null;
    }

    const avaliadorFromPrisma = await db.avaliador.findUnique({
      where: { CPF: CPF },
      include: { address: true },
    });

    if (!avaliadorFromPrisma) {
      return null;
    }

    return avaliadorPrismaMapper.toDomain(userFromPrisma, avaliadorFromPrisma);
  }

  async save(avaliador: Avaliador): Promise<Avaliador> {
    const { user, avaliador: avaliadorModel, address } = avaliadorPrismaMapper.toPrismaModel(avaliador);
    let userFromPrisma;
    let avaliadorFromPrisma;

    const existingUser = await db.user.findUnique({
      where: { email: user.email },
    });

    if (existingUser) {
      userFromPrisma = await db.user.update({
        where: { CPF: user.CPF },
        data: user,
      });
    } else {
      userFromPrisma = await db.user.create({
        data: user,
      });
    }

    const existingAvaliador = await db.avaliador.findUnique({
      where: { CPF: avaliadorModel.CPF },
    });

    if (existingAvaliador) {
      avaliadorFromPrisma = await db.avaliador.update({
        where: { CPF: avaliadorModel.CPF },
        data: avaliadorModel,
      });
    } else {
      avaliadorFromPrisma = await db.avaliador.create({
        data: {
          CPF: avaliadorModel.CPF,
          birthDate: avaliadorModel.birthDate,
          gender: avaliadorModel.gender,
          ethnicity: avaliadorModel.ethnicity,
          disability: avaliadorModel.disability,
          needsAssistance: avaliadorModel.needsAssistance,
          shirtSize: avaliadorModel.shirtSize,
          institutionName: avaliadorModel.institutionName,
          institutionType: avaliadorModel.institutionType,
          institutionalBond: avaliadorModel.institutionalBond,
          educationLevel: avaliadorModel.educationLevel,
          course: avaliadorModel.course,
          knowledgeArea: avaliadorModel.knowledgeArea,
          knowledgeSubArea: avaliadorModel.knowledgeSubArea,
          institutionalProofFile: avaliadorModel.institutionalProofFile,
          evaluatedOtherFairs: avaliadorModel.evaluatedOtherFairs,
          otherFairsNames: avaliadorModel.otherFairsNames || null,
          wasOnlineEvaluator: avaliadorModel.wasOnlineEvaluator,
          onlineEvaluationYears: avaliadorModel.onlineEvaluationYears || [],
          wasLiveEvaluator: avaliadorModel.wasLiveEvaluator,
          liveEvaluationYears: avaliadorModel.liveEvaluationYears || [],
          agreedWithRegulation: avaliadorModel.agreedWithRegulation,
          user: {
            connect: { id: userFromPrisma.id },
          },
        },
      });
    }

    if (address) {
      const addressData = {
        ...address,
        avaliadorId: avaliadorFromPrisma.id,
        orientadorId: null,
      };

      const existingAddress = await db.address.findUnique({
        where: { avaliadorId: avaliadorFromPrisma.id },
      });

      if (existingAddress) {
        await db.address.update({
          where: { avaliadorId: avaliadorFromPrisma.id },
          data: addressData,
        });
      } else {
        await db.address.create({
          data: addressData,
        });
      }
    }

    return avaliadorPrismaMapper.toDomain(user, avaliadorFromPrisma);
  }
}