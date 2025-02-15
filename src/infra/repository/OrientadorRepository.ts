import { Orientador } from "../../domain/entities/Orientador";
import { IOrientadorRepository } from "../../domain/irepository/IOrientadorRepository";
import { OrientadorDAO } from "../dao/OrientadorDAO";

export class OrientadorRepository implements IOrientadorRepository {
    
    constructor(private orientadorDao: OrientadorDAO) {}
    
    async findByCPF(CPF: string): Promise<Orientador | null> {
        return this.orientadorDao.findByCPF(CPF);
    }

    async save(orientador: Orientador): Promise<Orientador> {
        return this.orientadorDao.save(orientador);
    }
}