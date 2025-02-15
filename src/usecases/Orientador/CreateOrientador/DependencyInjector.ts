import { OrientadorDAO } from "../../../infra/dao/OrientadorDAO";
import { OrientadorRepository } from "../../../infra/repository/OrientadorRepository";
import { CreateOrientadorUseCase } from "./CreateOrientadorUseCase";
import { CreateOrientadorController } from "./CreateOrientadorController";
import { EmailProvider } from "../../../infra/providers/emailProvider/EmailProvider";

const orientadorDAO = new OrientadorDAO();

const orientadorRepository = new OrientadorRepository(orientadorDAO);

const emailService = new EmailProvider();

const createOrientadorUseCase = new CreateOrientadorUseCase(orientadorRepository, emailService);

const createOrientadorController = new CreateOrientadorController(createOrientadorUseCase);

export {createOrientadorUseCase, createOrientadorController};

