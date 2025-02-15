export interface CreateOrientadorDTO {
    email: string;
    name: string;
    password: string;
    role: string;
    CPF: string;
    phoneNumber: string;
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