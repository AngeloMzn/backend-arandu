import { User } from "../../domain/entities/User";
import { IUserRepository } from "../../domain/irepository/IUserRepository";

class UserRepository implements IUserRepository {
    async findByEmail(email: string): Promise<User> {
        return new User({
            name: 'any_name',
            email: 'any_email',
            password: 'any_password',
            role: 'any_role'
        });
    }

    async save(user: User): Promise<void> {
        return;
    }
}

export const userRepository = new UserRepository();
