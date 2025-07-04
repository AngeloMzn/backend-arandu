import { User as userPrisma } from "@prisma/client";
import { User as UserDomain } from "../../domain/entities/User";

export class userPrismaMapper {
    static toDomain(user: userPrisma) {
        return new UserDomain({
            id: user.id,
            name: user.name ?? '',
            email: user.email,
            password: user.password,
            role: user.role,
            CPF: user.CPF || "000.000.000-00",
            phoneNumber: user.phoneNumber || "00000000000",
        });
    }

    static toPrismaModel(user: UserDomain) {
        return {
            id: user.id,
            name: user.name,
            email: user.email,
            password: user.password,
            role: user.role,
            CPF: user.CPF,
            phoneNumber: user.phoneNumber,
            createdAt: user.createdAt,
            updatedAt: user.updatedAt
        };
    }
}