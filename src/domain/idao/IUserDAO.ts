import { User } from "../entities/User";

export interface IUserDAO {
    findByEmail(email: string): Promise<User | null>;
    save(user: User): Promise<User>;
    findById(id: number): Promise<User | null>;
}