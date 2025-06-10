import { AvaliadorDAO } from "../../../infra/dao/AvaliadorDAO";
import { AvaliadorRepository } from "../../../infra/repository/AvaliadorRepository";
import { FindAvaliadorByIdController } from "./FindAvaliadorByIdController";
import { FindAvaliadorByIdUseCase } from "./FindAvaliadorByIdUseCase";


const avaliadorDao = new AvaliadorDAO();

const avaliadorRepository = new AvaliadorRepository(avaliadorDao);

const findAvaliadorByIdUseCase = new FindAvaliadorByIdUseCase(avaliadorRepository);

const findAvaliadorByIdController = new FindAvaliadorByIdController(findAvaliadorByIdUseCase);

export { findAvaliadorByIdController, findAvaliadorByIdUseCase};