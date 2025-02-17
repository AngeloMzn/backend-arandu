import { OrganizadorDAO } from "../../../infra/dao/OrganizadorDAO";
import { OrganizadorRepository } from "../../../infra/repository/OrganizadorRepository";
import { FindOrganizadorByIdController } from "./FindOrganizadorByIdController";

import { FindOrganizadorByIdUseCase } from "./FindOrganizadorByIdUseCase";

const organizadorDao = new OrganizadorDAO();

const organizadorRepository = new OrganizadorRepository(organizadorDao);

const findOrganizadorByIdUseCase = new FindOrganizadorByIdUseCase(organizadorRepository);

const findOrganizadorByIdController = new FindOrganizadorByIdController(findOrganizadorByIdUseCase);

export { findOrganizadorByIdController, findOrganizadorByIdUseCase};