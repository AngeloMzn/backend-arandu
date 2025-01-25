import { User } from "../../../domain/entities/User";
import { IUserRepository } from "../../../domain/irepository/IUserRepository";
import { CreateUserDTO } from "./CreateUserDTO";

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

    const user = new User(data);
    await this.userRepository.save(user);

  }

}