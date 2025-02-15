import { IUserRepository } from "../../../domain/irepository/IUserRepository";
import { LoginUserDTO } from "./LoginUserDTO";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export class LoginUserUseCase {
    constructor(private userRepository : IUserRepository){}

    async execute(data: LoginUserDTO){
        const user = await this.userRepository.findByEmail(data.email);

        if(!user){
            throw new Error("Usuário ou Senha inválido.");
        }

        const matchPassword = await bcrypt.compare(data.password, user.password);

        if(!matchPassword){
            throw new Error("Senha Inválida.")
        }

        const token = jwt.sign({email: user.email, role: user.role}, "secretkey", {expiresIn: "1h"});
    
        return {token, user: {email: user.email, name: user.name, role: user.role}};
    }
}




