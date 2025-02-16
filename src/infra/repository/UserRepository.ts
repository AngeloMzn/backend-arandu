import { User } from "../../domain/entities/User";
import { IUserRepository } from "../../domain/irepository/IUserRepository";
import { UserDAO } from "../dao/UserDAO";

export class UserRepository implements IUserRepository {
    
    constructor(private userDao: UserDAO) {}
    
    findById(id: number): Promise<User | null> {
        return this.userDao.findById(id);
    }
    
    async findByEmail(email: string): Promise<User | null> {
        return this.userDao.findByEmail(email);
    }

    async save(user: User): Promise<User> {
        return this.userDao.save(user);
    }
}

