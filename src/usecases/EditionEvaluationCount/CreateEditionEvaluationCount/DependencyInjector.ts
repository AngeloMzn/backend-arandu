import { EditionEvaluationCountDAO } from "../../../infra/dao/EditionEvaluationCountDAO";
import { EditionEvaluationCountRepository } from "../../../infra/repository/EditionEvaluationCountRepository";
import { CreateEditionEvaluationCountController } from "./CreateEditionEvaluationCountController";
import { CreateEditionEvaluationCountUseCase } from "./CreateEditionEvaluationCountUseCase";


const editionEvaluationCountDAO = new EditionEvaluationCountDAO();

const editionEvaluationCountRepository  = new EditionEvaluationCountRepository(editionEvaluationCountDAO);

const createEditionEvaluationCountUseCase = new CreateEditionEvaluationCountUseCase(editionEvaluationCountRepository);

const createEditionEvaluationCountController = new CreateEditionEvaluationCountController(createEditionEvaluationCountUseCase);


export { createEditionEvaluationCountController , createEditionEvaluationCountUseCase};