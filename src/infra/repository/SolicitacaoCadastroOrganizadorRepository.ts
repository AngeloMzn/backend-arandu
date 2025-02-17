import { SolicitacaoCadastroOrganizador } from "../../domain/entities/SolicitacaoCadastroOrganizador";
import { ISolicitacaoCadastroOrganizadorDAO } from "../../domain/idao/ISolicitacaoCadastroOrganizadorDAO";
import { ISolicitacaoCadastroOrganizadorRepository } from "../../domain/irepository/ISolicitacaoCadastroOrganizadorRepository";


export class SolicitacaoCadastroOrganizadorRepository implements ISolicitacaoCadastroOrganizadorRepository {
  
    constructor(private solicitacaoCadastroOrganizadorDAO : ISolicitacaoCadastroOrganizadorDAO ) {}

    save(solicitacaoCadastroOrganizador: SolicitacaoCadastroOrganizador): Promise<SolicitacaoCadastroOrganizador> {
        return this.solicitacaoCadastroOrganizadorDAO.save(solicitacaoCadastroOrganizador);
    }
    update(organizador: SolicitacaoCadastroOrganizador): Promise<SolicitacaoCadastroOrganizador> {
        throw new Error("Method not implemented.");
    }
    findAll(): Promise<SolicitacaoCadastroOrganizador[]> {
        throw new Error("Method not implemented.");
    }

 
}
