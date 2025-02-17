import { User } from "../../../../domain/entities/User";
import { CreateUserDTO } from "../DTO/CreateUserDTO";

export class UserMapper {
  public static toDomain(createUserDTO: CreateUserDTO) {
    return new User({
      name: createUserDTO.name,
      email: createUserDTO.email,
      password: createUserDTO.password,
      CPF: createUserDTO.CPF,
      phoneNumber: createUserDTO.phoneNumber,
      role: createUserDTO.role,
    });
  }

  public static toDTO(req: any) {
    return {
      name: req.name,
      email: req.email,
      password: req.password,
      CPF: req.cpf,
      phoneNumber: req.phoneNumber,
      role: req.role,
    };
  }
}
