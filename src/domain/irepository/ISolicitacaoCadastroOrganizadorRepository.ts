import { SolicitacaoCadastroOrganizador } from "../entities/SolicitacaoCadastroOrganizador";

export interface ISolicitacaoCadastroOrganizadorRepository {
    save(solicitacaoCadastroOrganizador: SolicitacaoCadastroOrganizador ): Promise<SolicitacaoCadastroOrganizador>;
    update(organizador: SolicitacaoCadastroOrganizador): Promise<SolicitacaoCadastroOrganizador>;
    findAll(): Promise<SolicitacaoCadastroOrganizador[]>;
}