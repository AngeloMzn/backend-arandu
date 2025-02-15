//=============importação do prisma===============

import { User } from '../../domain/entities/User';
import { IUserDAO } from '../../domain/idao/IUserDAO';
import { db } from '../config/db/db';
import { userPrismaMapper } from '../prismaMappers/UserPrismaMapper';
//================================================
export class UserDAO implements IUserDAO {

  constructor() {}

  async findByEmail(email: string): Promise<User | null> {

    const userFromPrisma = db.user.findUnique({
      where: { email: email },
    });
    
    const user = await userFromPrisma;
    if (!user) {
      return null;
    }
    return userPrismaMapper.toDomain(user);
  }

  async save(user: User) {
    
    const userModel = userPrismaMapper.toPrismaModel(user);
    
    const userFromPrisma = db.user.create({
      data: userModel,
    });

    return userPrismaMapper.toDomain(await userFromPrisma);
  }

}