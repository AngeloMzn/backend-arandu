import { AvaliadorDAO } from "../../../infra/dao/AvaliadorDAO";
import { AvaliadorRepository } from "../../../infra/repository/AvaliadorRepository";
import { CreateAvaliadorUseCase } from "./CreateAvaliadorUseCase";
import { CreateAvaliadorController } from "./CreateAvaliadorController";
import { EmailProvider } from "../../../infra/providers/emailProvider/EmailProvider";

const avaliadorDAO = new AvaliadorDAO();

const avaliadorRepository = new AvaliadorRepository(avaliadorDAO);

const emailService = new EmailProvider();

const createAvaliadorUseCase = new CreateAvaliadorUseCase(avaliadorRepository, emailService);

const createAvaliadorController = new CreateAvaliadorController(createAvaliadorUseCase);

export { createAvaliadorUseCase, createAvaliadorController };