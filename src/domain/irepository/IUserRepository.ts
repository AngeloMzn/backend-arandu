import { User } from "../entities/User";

export interface IUserRepository {
    findByEmail(email: string): Promise<User | null>;
    save(user: User): Promise<User>;
    findById(id: number): Promise<User | null>;
}