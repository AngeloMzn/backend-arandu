import { Router, Request, Response } from "express";

const router = Router();

router.get('/user/signup', (request: Request, response: Response) => {
    response.status(201).send("user");
});

router.get('/', (request: Request, response: Response) => {
    response.status(201).send("ta funfando pohaaaaaa");
});

export { router };