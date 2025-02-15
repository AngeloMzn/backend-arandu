import { Avaliador } from "../../../domain/entities/Avaliador";
import { IAvaliadorRepository } from "../../../domain/irepository/IAvaliadorRepository";
import { CreateAvaliadorDTO } from "./CreateAvaliadorDTO";
import { IEmailService } from "../../../infra/providers/emailProvider/IEmailProvider";
import bcrypt from "bcryptjs";
import { db } from "../../../infra/config/db/db";

export class CreateAvaliadorUseCase {
  constructor(
    private avaliadorRepository: IAvaliadorRepository,
    private emailService: IEmailService
  ) {}

  async execute(data: CreateAvaliadorDTO) {
    const avaliadorExists = await this.avaliadorRepository.findByCPF(data.CPF);

    if (avaliadorExists) {
      throw new Error("Já existe um cadastro com esse avaliador");
    }

    const existingUser = await db.user.findUnique({
        where: { CPF: data.CPF },
    });
      
    if (existingUser) {
        throw new Error("CPF já cadastrado.");
    }

    const hashPassword = await bcrypt.hash(data.password, 10);

    const userProps = {
      email: data.email,
      name: data.name,
      password: hashPassword,
      role: "avaliador",
      CPF: data.CPF,
      phoneNumber: data.phoneNumber,
    };

    const avaliadorProps = {
      CPF: data.CPF,
      birthDate: data.birthDate,
      gender: data.gender,
      ethnicity: data.ethnicity,
      disability: data.disability,
      needsAssistance: data.needsAssistance,
      shirtSize: data.shirtSize,
      institutionName: data.institutionName,
      institutionType: data.institutionType,
      institutionalBond: data.institutionalBond,
      educationLevel: data.educationLevel,
      course: data.course,
      knowledgeArea: data.knowledgeArea,
      knowledgeSubArea: data.knowledgeSubArea,
      institutionalProofFile: data.institutionalProofFile,
      evaluatedOtherFairs: data.evaluatedOtherFairs,
      otherFairsNames: data.otherFairsNames ?? undefined,
      wasOnlineEvaluator: data.wasOnlineEvaluator,
      onlineEvaluationYears: data.onlineEvaluationYears || [],
      wasLiveEvaluator: data.wasLiveEvaluator,
      liveEvaluationYears: data.liveEvaluationYears || [],
      agreedWithRegulation: data.agreedWithRegulation,
      address: data.address
        ? {
            CEP: data.address.CEP,
            country: data.address.country,
            state: data.address.state,
            city: data.address.city,
            street: data.address.street,
            number: data.address.number,
            district: data.address.district,
            complement: data.address.complement || undefined,
          }
        : undefined,
    };

    const avaliador = new Avaliador(userProps, avaliadorProps);
    const loginUrl = "https://fetecms.com.br/login";
    await this.emailService.sendEmail({
      to: "adrianodutra03@gmail.com",
      name: data.name,
      subject: "Cadastro concluído",
      body: `<p>Olá, ${data.name}.</p>
             <p>Seu cadastro no Sistema Fetec MS 2025 acaba de ser concluído!!! Clique no botão abaixo para fazer o login no nosso site:</p>
             <a href="${loginUrl}" style="padding: 10px 20px; background-color: #6B4C35; color: white; text-decoration: none; border-radius: 5px;">LOGIN</a>
             <p>Se precisar de ajuda ou em caso de dúvidas, mandar mensagem para <pessoa responsável>.</p>
             <p>Para manter sua conta segura, não encaminhe este e-mail para ninguém.</p>`,
    });
    await this.avaliadorRepository.save(avaliador);
  }
}