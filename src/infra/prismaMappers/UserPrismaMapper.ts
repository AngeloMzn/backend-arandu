import { User as userPrisma } from "@prisma/client";
import { User as UserDomain } from "../../domain/entities/User";

export class userPrismaMapper {
    static toDomain(user: userPrisma) {
        return new UserDomain({
            name: user.name ?? '',
            email: user.email,
            password: user.password,
            role: user.role
        });
    }
    static toPrismaModel(user: UserDomain) {
        return {
            id: user.id,
            name: user.name,
            email: user.email,
            password: user.password,
            role: user.role
        };
    }
}