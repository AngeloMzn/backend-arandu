import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { any } from "zod";

export class CreateUserController{
    constructor(
        private createUserUseCase: CreateUserUseCase
    ){}

    async handle(request: Request, response: Response): Promise<Response>{
        const { name, email, password, role } = request.body;

        try {
            await this.createUserUseCase.execute({
                name,
                email,
                password,
                role
            });

            return response.status(201).send();
        } catch (error: any) {
            return response.status(400).json({
                message: error.message || 'Unexpected error.'
            });
        }
    }
}