import { Response, Request } from "express";
import { CreateOrientadorUseCase } from "./CreateOrientadorUseCase";

export class CreateOrientadorController {
  constructor(private createOrientadorUseCase: CreateOrientadorUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const {
      email,
      name,
      password,
      role,
      CPF,
      phoneNumber,
      birthDate,
      gender,
      ethnicity,
      disability,
      needsAssistance,
      shirtSize,
      institutionName,
      institutionType,
      institutionalBond,
      educationLevel,
      course,
      knowledgeArea,
      knowledgeSubArea,
      projectMentorshipYears,
      institutionalProofFile,
      address,
    } = req.body;

    if (
      !email ||
      !name ||
      !password ||
      !CPF ||
      !institutionName ||
      !institutionType
    ) {
      return res.status(400).json({
        message: "Campos obrigatórios ausentes.",
      });
    }

    const birthDateObject = new Date(birthDate);
    if (isNaN(birthDateObject.getTime())) {
      return res.status(400).json({
        message: "Data de nascimento inválida.",
      });
    }

    try {
      await this.createOrientadorUseCase.execute({
        email,
        name,
        password,
        role,
        CPF,
        phoneNumber,
        birthDate: birthDateObject,
        gender,
        ethnicity,
        disability,
        needsAssistance,
        shirtSize,
        institutionName,
        institutionType,
        institutionalBond,
        educationLevel,
        course,
        knowledgeArea,
        knowledgeSubArea,
        projectMentorshipYears,
        institutionalProofFile,
        address,
      });

      return res.status(201).send("Orientador criado com sucesso!");
    } catch (error: any) {
      const errorMessage = error?.message || "Erro inesperado.";
      return res.status(400).json({ message: errorMessage });
    }
  }
}