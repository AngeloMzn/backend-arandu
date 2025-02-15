import { User } from "./User"; 

interface AvaliadorProps {
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
    evaluatedOtherFairs: boolean;
    otherFairsNames?: string;
    wasOnlineEvaluator: boolean;
    onlineEvaluationYears: number[];
    wasLiveEvaluator: boolean;
    liveEvaluationYears: number[];
    agreedWithRegulation: boolean;
  }
  
  export class Avaliador extends User {
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
    public evaluatedOtherFairs!: boolean;
    public otherFairsNames?: string;
    public wasOnlineEvaluator!: boolean;
    public onlineEvaluationYears!: number[];
    public wasLiveEvaluator!: boolean;
    public liveEvaluationYears!: number[];
    public agreedWithRegulation!: boolean;
  
    constructor(
      userProps: Omit<User, "id" | "createdAt" | "updatedAt">,
      avaliadorProps: AvaliadorProps
    ) {
      super(userProps);
      Object.assign(this, avaliadorProps);
    }
  }











