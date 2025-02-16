import { Organizador } from "@prisma/client";

export class SolicitacaoCadastroOrganizador {
  private id!: number;
  private justification!: string;
  private organizador!: Organizador;
  private data: Date = new Date();
  private createdAt!: Date;
  private updatedAt!: Date;

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
