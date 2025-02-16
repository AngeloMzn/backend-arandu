import { SolicitacaoCadastroOrganizador } from "../../domain/entities/SolicitacaoCadastroOrganizador";
import { ISolicitacaoCadastroOrganizadorRepository } from "../../domain/irepository/ISolicitacaoCadastroOrganizadorRepository";


export class SolicitacaoCadastroOrganizadorRepository implements ISolicitacaoCadastroOrganizadorRepository {
  
    constructor(private : ) {}

    save(solicitacaoCadastroOrganizador: SolicitacaoCadastroOrganizador): Promise<SolicitacaoCadastroOrganizador> {
        throw new Error("Method not implemented.");
    }
    update(organizador: SolicitacaoCadastroOrganizador): Promise<SolicitacaoCadastroOrganizador> {
        throw new Error("Method not implemented.");
    }
    findAll(): Promise<SolicitacaoCadastroOrganizador[]> {
        throw new Error("Method not implemented.");
    }

 
}
