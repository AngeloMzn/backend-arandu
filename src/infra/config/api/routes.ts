import { Router, Request, Response } from "express";
import { createUserController } from "../../../usecases/User/CreateUser/DependencyInjector";
import { createEditionController } from "../../../usecases/Edition/CreateEdition/DependencyInjector";
import { loginUserController } from "../../../usecases/User/LoginUser/DependencyInjector";
import { addressController } from "../../../usecases/addressProvider/DependencyInjector";
import { createOrientadorController } from "../../../usecases/Orientador/CreateOrientador/DependencyInjector";
import { createAvaliadorController } from "../../../usecases/Avaliador/CreateAvaliador/DependencyInjector";
import { createOrganizadorController } from "../../../usecases/Organizador/CreateOrganizador/DependencyInjector";
import { findAvaliadorByIdController } from "../../../usecases/Avaliador/FindAvaliadorById/DependencyInjector";

const router = Router();

// rotas de usuário
router.post('/user/signup', (req: Request, res: Response) => {
    createUserController.handle(req, res);
});

router.post('/user/singin', (req: Request, res: Response) => {
    loginUserController.handle(req, res);
});

router.post('/orientador/singup', (req: Request, res: Response) => {
    createOrientadorController.handle(req, res);
});

router.post('/avaliador/signup', (req: Request, res: Response) => {
    createAvaliadorController.handle(req, res);
});

router.post('/organizador/signup', (req: Request, res: Response) => {
    createOrganizadorController.handle(req, res);
});

router.get('/', (request: Request, response: Response) => {
    response.status(201).send("ta funfando pohaaaaaa");
});

// rotas avaliador

router.get('/avaliador/:id', (request: Request, response: Response) => {
    findAvaliadorByIdController.handle(request, response);
});

// rotas da edição
router.post('/edtion/create', (req: Request, res: Response) => {
    createEditionController.handle(req, res);
});


//ROTAS API
router.get('/cep/:cep', (req: Request, res: Response) => {
    addressController.handle(req, res);
});

export { router };