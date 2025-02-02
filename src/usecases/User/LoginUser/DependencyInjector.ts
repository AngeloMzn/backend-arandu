import { UserDAO } from "../../../infra/dao/UserDAO";
import { UserRepository } from "../../../infra/repository/UserRepository";
import { LoginUserUseCase } from "./LoginUserUseCase";
import { LoginUserController } from "./LoginUserController";

const userDao = new UserDAO();

const userRepository = new UserRepository(userDao);

const loginUserUseCase = new LoginUserUseCase(userRepository);

const loginUserController = new LoginUserController(loginUserUseCase);

export { loginUserController, loginUserUseCase };