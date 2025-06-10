import { EditionDAO } from "../../../infra/dao/EditionDAO";
import { UserDAO } from "../../../infra/dao/UserDAO";
import { EditionRepository } from "../../../infra/repository/EditionRepository";
import { UserRepository } from "../../../infra/repository/UserRepository";
import {FindAllEditionByIdController } from "./FindAllEditionByIdController";
import { FindAllEditionByIdUseCase } from "./FindEditionByIdUseCase";


const editionDAO = new EditionDAO();

const editionRepository = new EditionRepository(editionDAO);

const findAllUseCase = new FindAllEditionByIdUseCase(editionRepository);

const findAllEditionByIdController = new FindAllEditionByIdController(findAllUseCase);


export { findAllEditionByIdController, findAllUseCase};