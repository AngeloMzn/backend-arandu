import { CreateSolicitacaoCadastroOrganizadorUseCase } from "./CreateSolicitacaoCadastroOrganizadorUseCase";
import { CreateSolicitacaoCadastroOrganizadorController } from "./CreateSolicitacaoCadastroOrganizadorController";
import { SolicitacaoCadastroOrganizadorDAO } from "../../../infra/dao/SolicitacaoCadastroOrganizadorDAO";
import { SolicitacaoCadastroOrganizadorRepository } from "../../../infra/repository/SolicitacaoCadastroOrganizadorRepository";

const solicitacaoCadastroOrganizadorDAO = new SolicitacaoCadastroOrganizadorDAO();

const organizadorRepository = new SolicitacaoCadastroOrganizadorRepository(solicitacaoCadastroOrganizadorDAO);

const createSolicitacaoCadastroOrganizadorUseCase = new CreateSolicitacaoCadastroOrganizadorUseCase(organizadorRepository);

const createSolicitacaoCadastroOrganizadorController = new CreateSolicitacaoCadastroOrganizadorController(createSolicitacaoCadastroOrganizadorUseCase);

export { createSolicitacaoCadastroOrganizadorController, createSolicitacaoCadastroOrganizadorUseCase};