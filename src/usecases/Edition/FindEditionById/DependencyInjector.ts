import { EditionDAO } from "../../../infra/dao/EditionDAO";
import { UserDAO } from "../../../infra/dao/UserDAO";
import { EditionRepository } from "../../../infra/repository/EditionRepository";
import { UserRepository } from "../../../infra/repository/UserRepository";
import {FindEditionByIdController } from "./FindEditionByIdController";
import { FindEditionByIdUseCase } from "./FindEditionByIdUseCase";


const editionDAO = new EditionDAO();

const editionRepository = new EditionRepository(editionDAO);

const findEditionByIdUseCase = new FindEditionByIdUseCase(editionRepository);

const findEditionByIdController = new FindEditionByIdController(findEditionByIdUseCase);


export { findEditionByIdController, findEditionByIdUseCase};