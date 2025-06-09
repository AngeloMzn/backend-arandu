import { OrganizadorDAO } from "../../../infra/dao/OrganizadorDAO";
import { OrganizadorRepository } from "../../../infra/repository/OrganizadorRepository";
import { FindAllOrganizadorController } from "./FindOrganizadorByIdController";
import { FindAllOrganizadorUseCase } from "./FindOrganizadorByIdUseCase";


const organizadorDao = new OrganizadorDAO();

const organizadorRepository = new OrganizadorRepository(organizadorDao);

const findOrganizadorByIdUseCase = new FindAllOrganizadorUseCase(organizadorRepository);

const findOrganizadorByIdController = new FindAllOrganizadorController(findOrganizadorByIdUseCase);

export { findOrganizadorByIdController, findOrganizadorByIdUseCase};