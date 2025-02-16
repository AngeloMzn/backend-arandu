import { User } from "../../../domain/entities/User";
import { IUserRepository } from "../../../domain/irepository/IUserRepository";
export class FindUserByIdUseCase {
  constructor(
    private userRepository: IUserRepository
  ) {}

  async execute(id: number ) {
    return await this.userRepository.findById(id);
  }

}