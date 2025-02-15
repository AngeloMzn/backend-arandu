import { User } from "./User";

interface OrientadorProps {
  CPF: string;
  birthDate: Date;
  gender: string;
  ethnicity: string;
  disability?: string;
  needsAssistance?: boolean;
  shirtSize: string;
  institutionName: string;
  institutionType: string;
  institutionalBond: string;
  educationLevel: string;
  course: string;
  knowledgeArea: string;
  knowledgeSubArea: string;
  projectMentorshipYears: number;
  institutionalProofFile: string;
  address?: {
    CEP: string;
    country: string;
    state: string;
    city: string;
    street: string;
    number: string;
    district: string;
    complement?: string;
  };
}

export class Orientador extends User {
  public CPF!: string;
  public birthDate!: Date;
  public gender!: string;
  public ethnicity!: string;
  public disability?: string;
  public needsAssistance?: boolean;
  public shirtSize!: string;
  public institutionName!: string;
  public institutionType!: string;
  public institutionalBond!: string;
  public educationLevel!: string;
  public course!: string;
  public knowledgeArea!: string;
  public knowledgeSubArea!: string;
  public projectMentorshipYears!: number;
  public institutionalProofFile!: string;
  public address?: {
    CEP: string;
    country: string;
    state: string;
    city: string;
    street: string;
    number: string;
    district: string;
    complement?: string;
  };

  constructor(
    userProps: Omit<User, "id" | "createdAt" | "updatedAt">,
    orientadorProps: OrientadorProps
  ) {
    super(userProps);
    Object.assign(this, orientadorProps);
  }
}