import { UserDAO } from "../../../infra/dao/UserDAO";
import { UserRepository } from "../../../infra/repository/UserRepository";
import { CreateUserController } from "./FindUserByIdController";
import { FindUserByIdUseCase } from "./FindUserByIdUseCase";

const userDao = new UserDAO();

const userRepository = new UserRepository(userDao);

const findUserByIdUseCase = new FindUserByIdUseCase(userRepository);

const findUserByIdController = new CreateUserController(findUserByIdUseCase);

export { findUserByIdController, findUserByIdUseCase};