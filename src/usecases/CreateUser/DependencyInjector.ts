import { UserDAO } from "../../infra/dao/UserDAO";
import { UserRepository } from "../../infra/repository/UserRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const userDao = new UserDAO();

const userRepository = new UserRepository(userDao);

const createUserUseCase = new CreateUserUseCase(userRepository);

const createUserController = new CreateUserController(createUserUseCase);

export { createUserController, createUserUseCase};