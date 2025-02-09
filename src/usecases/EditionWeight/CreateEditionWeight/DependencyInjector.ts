import { EditionDAO } from "../../../infra/dao/EditionDAO";
import { UserDAO } from "../../../infra/dao/UserDAO";
import { EditionRepository } from "../../../infra/repository/EditionRepository";
import { UserRepository } from "../../../infra/repository/UserRepository";
import { CreateEditionController } from "./CreateEditionWeight";
import { CreateEditionUseCase } from "./CreateEditionWeightUseCase";


const editionDAO = new EditionDAO();

const editionRepository = new EditionRepository(editionDAO);

const createEditionUseCase = new CreateEditionUseCase(editionRepository);

const createEditionController = new CreateEditionController(createEditionUseCase);


export { createEditionController, createEditionUseCase};