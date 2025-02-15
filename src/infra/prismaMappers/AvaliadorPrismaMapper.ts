import { Avaliador } from "../../domain/entities/Avaliador";
import { User } from "../../domain/entities/User";
import { Avaliador as PrismaAvaliador, User as PrismaUser, Address as PrismaAddress } from "@prisma/client";

export const avaliadorPrismaMapper = {
  toDomain(user: PrismaUser, prismaModel: PrismaAvaliador & { address?: PrismaAddress | null }): Avaliador {
    return new Avaliador(
      {
        name: user.name ?? "",
        email: user.email,
        password: user.password,
        role: user.role,
        CPF: user.CPF || "000.000.000-00",
        phoneNumber: user.phoneNumber || "00000000000",
      },
      {
        CPF: user.CPF || "000.000.000-00",
        birthDate: prismaModel.birthDate,
        gender: prismaModel.gender,
        ethnicity: prismaModel.ethnicity,
        disability: prismaModel.disability || undefined,
        needsAssistance: prismaModel.needsAssistance || undefined,
        shirtSize: prismaModel.shirtSize,
        institutionName: prismaModel.institutionName,
        institutionType: prismaModel.institutionType,
        institutionalBond: prismaModel.institutionalBond,
        educationLevel: prismaModel.educationLevel,
        course: prismaModel.course,
        knowledgeArea: prismaModel.knowledgeArea,
        knowledgeSubArea: prismaModel.knowledgeSubArea,
        institutionalProofFile: prismaModel.institutionalProofFile,
        address: prismaModel.address
          ? {
              CEP: prismaModel.address.CEP,
              country: prismaModel.address.country,
              state: prismaModel.address.state,
              city: prismaModel.address.city,
              street: prismaModel.address.street,
              number: prismaModel.address.number,
              district: prismaModel.address.district,
              complement: prismaModel.address.complement || undefined,
            }
          : undefined,
        evaluatedOtherFairs: prismaModel.evaluatedOtherFairs,
        otherFairsNames: prismaModel.otherFairsNames || undefined,
        wasOnlineEvaluator: prismaModel.wasOnlineEvaluator,
        onlineEvaluationYears: prismaModel.onlineEvaluationYears || [],
        wasLiveEvaluator: prismaModel.wasLiveEvaluator,
        liveEvaluationYears: prismaModel.liveEvaluationYears || [],
        agreedWithRegulation: prismaModel.agreedWithRegulation,
      }
    );
  },

  toPrismaModel(domainEntity: Avaliador): { user: PrismaUser; avaliador: PrismaAvaliador; address?: PrismaAddress } {
    return {
      user: {
        id: domainEntity.id,
        name: domainEntity.name,
        email: domainEntity.email,
        password: domainEntity.password,
        role: domainEntity.role,
        CPF: domainEntity.CPF || "000.000.000-00",
        phoneNumber: domainEntity.phoneNumber || "00000000000",
        createdAt: domainEntity.createdAt,
        updatedAt: domainEntity.updatedAt,
      },
      avaliador: {
        id: domainEntity.id,
        userId: domainEntity.id,
        CPF: domainEntity.CPF || "000.000.000-00",
        birthDate: domainEntity.birthDate,
        gender: domainEntity.gender,
        ethnicity: domainEntity.ethnicity,
        disability: domainEntity.disability || null,
        needsAssistance: domainEntity.needsAssistance || null,
        shirtSize: domainEntity.shirtSize,
        institutionName: domainEntity.institutionName,
        institutionType: domainEntity.institutionType,
        institutionalBond: domainEntity.institutionalBond,
        educationLevel: domainEntity.educationLevel,
        course: domainEntity.course,
        knowledgeArea: domainEntity.knowledgeArea,
        knowledgeSubArea: domainEntity.knowledgeSubArea,
        institutionalProofFile: domainEntity.institutionalProofFile,
        evaluatedOtherFairs: domainEntity.evaluatedOtherFairs,
        otherFairsNames: domainEntity.otherFairsNames || null,
        wasOnlineEvaluator: domainEntity.wasOnlineEvaluator,
        onlineEvaluationYears: domainEntity.onlineEvaluationYears || [],
        wasLiveEvaluator: domainEntity.wasLiveEvaluator,
        liveEvaluationYears: domainEntity.liveEvaluationYears || [],
        agreedWithRegulation: domainEntity.agreedWithRegulation,
      },
      address: domainEntity.address
        ? {
            id: domainEntity.id,
            orientadorId: null,
            avaliadorId: domainEntity.id,
            CEP: domainEntity.address.CEP,
            country: domainEntity.address.country,
            state: domainEntity.address.state,
            city: domainEntity.address.city,
            street: domainEntity.address.street,
            number: domainEntity.address.number,
            district: domainEntity.address.district,
            complement: domainEntity.address.complement || null,
          }
        : undefined,
    };
  },
};