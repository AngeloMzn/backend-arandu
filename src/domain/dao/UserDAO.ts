//=============importação do prisma===============
import { User } from '@prisma/client';
import { db } from '../../infra/config/db/db';
//================================================
class UserDAO {


  async createUser(data: User) {
    return db.user.create({
      data,
    });
  }

  async findUserByEmail(email: string) {
    return db.user.findUnique({
      where: {
        email,
      },
    });
  }
}