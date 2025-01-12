import { Router, Request, Response } from "express";
import { createUserController } from "../../../usecases/CreateUser/DependencyInjector";

const router = Router();

router.post('/user/signup', (req: Request, res: Response) => {
    console.log("salve");
    createUserController.handle(req, res);
});

router.get('/', (request: Request, response: Response) => {
    response.status(201).send("ta funfando pohaaaaaa");
});

export { router };