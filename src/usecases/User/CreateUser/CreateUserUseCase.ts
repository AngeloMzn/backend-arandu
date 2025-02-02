import { User } from "../../../domain/entities/User";
import { IUserRepository } from "../../../domain/irepository/IUserRepository";
import { CreateUserDTO } from "./CreateUserDTO";
import bcrypt from "bcryptjs";
export class CreateUserUseCase {
  constructor(
    private userRepository: IUserRepository
  ) {
    
  }

  async execute(data: CreateUserDTO) {
    const userAlreadyExists = await this.userRepository.findByEmail(data.email);  
    
    if(userAlreadyExists) {
      throw new Error('Usuário já existe no sistema');
    }

    const hashPassword = await bcrypt.hash(data.password, 10);

    const user = new User({...data, password: hashPassword});
    await this.userRepository.save(user);

  }

}