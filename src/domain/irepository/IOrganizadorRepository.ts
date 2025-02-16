import { Organizador } from "../entities/Organizador";

export interface IOrganizadorRepository {
    save(organizador: Organizador): Promise<Organizador>;
    update(organizador: Organizador): Promise<Organizador>;
}