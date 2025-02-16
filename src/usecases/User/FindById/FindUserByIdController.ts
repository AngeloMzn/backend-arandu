import { Request, Response } from "express";
import { FindUserByIdUseCase } from "./FindUserByIdUseCase";

export class CreateUserController{
    constructor(
        private findUserByIdUseCase: FindUserByIdUseCase
    ){}

    async handle(req: Request, res: Response): Promise<Response>{
        const id  = Number(req.params.id);

        try {
            await this.findUserByIdUseCase.execute(
              id
            );
            return res.status(201).send("ta funfando pohaaaaaa");
        } catch (error: any) {
            return res.status(400).json({
                message: error.message || 'Unexpected error.'
            });
        }
    }
}