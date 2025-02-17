import { Organizador } from "@prisma/client";

export class SolicitacaoCadastroOrganizador {
  public id!: number;
  public justification?: string;
  situation?: string;
  public organizador!: Organizador;
  public data: Date = new Date();
  public createdAt!: Date;
  public updatedAt!: Date;

  constructor(
    props: Omit<SolicitacaoCadastroOrganizador, "createdAt" | "updatedAt">,
    id?: number
  ) {
    Object.assign(this, props);
    if (id) {
      this.id = id;
    }
  }
}
