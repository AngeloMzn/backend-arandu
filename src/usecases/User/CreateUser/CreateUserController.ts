import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController{
    constructor(
        private createUserUseCase: CreateUserUseCase
    ){}

    async handle(req: Request, res: Response): Promise<Response>{
        const { name, email, password, role, CPF, phoneNumber } = req.body;

        try {
            await this.createUserUseCase.execute({
                name,
                email,
                password,
                role,
                CPF,
                phoneNumber
            });

            return res.status(201).send("ta funfando pohaaaaaa");
        } catch (error: any) {
            return res.status(400).json({
                message: error.message || 'Unexpected error.'
            });
        }
    }
}