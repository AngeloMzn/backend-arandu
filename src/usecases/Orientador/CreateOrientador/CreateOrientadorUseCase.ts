import { Orientador } from "../../../domain/entities/Orientador";
import { IOrientadorRepository } from "../../../domain/irepository/IOrientadorRepository";
import { CreateOrientadorDTO } from "./CreateOrientadorDTO";
import { IEmailService } from "../../../infra/providers/emailProvider/IEmailProvider";
import bcrypt from "bcryptjs";

export class CreateOrientadorUseCase {
  constructor(
    private orientadorRepository: IOrientadorRepository,
    private emailService: IEmailService
  ) {}

  async execute(data: CreateOrientadorDTO) {
    const orientadorExists = await this.orientadorRepository.findByCPF(data.CPF);

    if (orientadorExists) {
      throw new Error("Já existe um cadastro com esse orientador");
    }
    
    const hashPassword = await bcrypt.hash(data.password, 10);

    const userProps = {
      email: data.email,
      name: data.name,
      password: hashPassword,
      role: "orientador",
      CPF: data.CPF,
      phoneNumber: data.phoneNumber,
    };

    const orientadorProps = {
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
      projectMentorshipYears: data.projectMentorshipYears,
      institutionalProofFile: data.institutionalProofFile,
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


    const orientador = new Orientador(userProps, orientadorProps);
    const loginUrl = "https://fetecms.com.br/login";
    await this.emailService.sendEmail({
      to: 'adrianodutra03@gmail.com',
      name: data.name,
      subject: "Cadastro concluído",
      body: `<p>Olá, ${data.name}.</p>
             <p>Seu cadastro no Sistema Fetec MS 2025 acaba de ser concluído!!! Clique no botão abaixo para fazer o login no nosso site:</p>
             <a href="${loginUrl}" style="padding: 10px 20px; background-color: #6B4C35; color: white; text-decoration: none; border-radius: 5px;">LOGIN</a>
             <p>Se precisar de ajuda ou em caso de dúvidas, mandar mensagem para <pessoa responsável>.</p>
             <p>Para manter sua conta segura, não encaminhe este e-mail para ninguém.</p>`,
    });
    await this.orientadorRepository.save(orientador);
  }
}