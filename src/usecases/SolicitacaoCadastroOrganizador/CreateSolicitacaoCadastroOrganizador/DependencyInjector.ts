import { CreateOrganizadorUseCase } from "./CreateSolicitacaoCadastroOrganizadorUseCase";
import { OrganizadorDAO } from "../../../infra/dao/OrganizadorDAO";
import { OrganizadorRepository } from "../../../infra/repository/OrganizadorRepository";
import { CreateOrganizadorController } from "./CreateSolicitacaoCadastroOrganizadorController";
import { createUserUseCase } from "../../User/CreateUser/DependencyInjector";

const organizadorDao = new OrganizadorDAO();

const organizadorRepository = new OrganizadorRepository(organizadorDao);

const createOrganizadorUseCase = new CreateOrganizadorUseCase(organizadorRepository);

const createOrganizadorController = new CreateOrganizadorController(createOrganizadorUseCase, createUserUseCase);

export { createOrganizadorController, createOrganizadorUseCase};