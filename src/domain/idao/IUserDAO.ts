import { User } from "../entities/User";

export interface IUserDAO {
    findByEmail(email: string): Promise<User | boolean>;
    save(user: User): Promise<User>;
}