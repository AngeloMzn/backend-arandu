import { EditionWeightDAO } from "../../../infra/dao/EditionWeightDAO";
import { EditionWeightRepository } from "../../../infra/repository/EditionWeightRepository";
import { CreateEditionController } from "./CreateEditionWeight";
import { CreateEditionWeightUseCase } from "./CreateEditionWeightUseCase";


const editionWeightDAO = new EditionWeightDAO();

const editionWeightRepository = new EditionWeightRepository(editionWeightDAO);

const createEditionWeightUseCase = new CreateEditionWeightUseCase(editionWeightRepository);

const createEditionWeightController = new CreateEditionController(createEditionWeightUseCase);


export { createEditionWeightController, createEditionWeightUseCase};