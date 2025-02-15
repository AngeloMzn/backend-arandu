import { UserEdition } from "@prisma/client";

export class User {
  public readonly id!: number;
  public name!: string | null;
  public email!: string;
  public password!: string;
  public role!: string;
  public CPF!: string;
  public phoneNumber!: string;
  public readonly createdAt!: Date;
  public updatedAt!: Date;
  public editions?: UserEdition[];

  constructor(props: Omit<User, 'id' | 'createdAt' | 'updatedAt'>) {
    Object.assign(this, props);
  }
}