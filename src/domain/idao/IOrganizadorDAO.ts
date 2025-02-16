import { Organizador } from "../entities/Organizador";

export interface IOrganizadorDAO {
    save(organizador: Organizador): Promise<Organizador>;
    update(organizador: Organizador): Promise<Organizador>;
    findAll(): Promise<Organizador[]>;
}