import { OrganizadorDAO } from "../../../infra/dao/OrganizadorDAO";
import { OrganizadorRepository } from "../../../infra/repository/OrganizadorRepository";
import { FindAvaliadorByIdController } from "./FindAvaliadorByIdController";
import { FindAvaliadorByIdUseCase } from "./FindAvaliadorByIdUseCase";


const organizadorDao = new OrganizadorDAO();

const organizadorRepository = new OrganizadorRepository(organizadorDao);

const findAvaliadorByIdUseCase = new FindAvaliadorByIdUseCase(organizadorRepository);

const findAvaliadorByIdController = new FindAvaliadorByIdController(findAvaliadorByIdUseCase);

export { findAvaliadorByIdController, findAvaliadorByIdUseCase};