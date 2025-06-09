import { Organizador } from "../entities/Organizador";

export interface IOrganizadorDAO {
    save(organizador: Organizador): Promise<Organizador>;
    update(organizador: Organizador): Promise<Organizador>;
    findAll(): Promise<Organizador[]>;
    findById(id: number): Promise<Organizador | null>;
    findAll(): Promise<Organizador[]>;
}