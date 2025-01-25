import { Router, Request, Response } from "express";
import { createUserController } from "../../../usecases/User/CreateUser/DependencyInjector";
import { createEditionController } from "../../../usecases/Edition/CreateEdition/DependencyInjector";

const router = Router();

router.post('/user/signup', (req: Request, res: Response) => {
    createUserController.handle(req, res);
});

router.get('/', (request: Request, response: Response) => {
    response.status(201).send("ta funfando pohaaaaaa");
});

// rotas da edição
router.post('/edtion/create', (req: Request, res: Response) => {
    createEditionController.handle(req, res);
});

export { router };