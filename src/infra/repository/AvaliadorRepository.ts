import { Avaliador } from "../../domain/entities/Avaliador";
import { IAvaliadorRepository } from "../../domain/irepository/IAvaliadorRepository";
import { AvaliadorDAO } from "../dao/AvaliadorDAO";

export class AvaliadorRepository implements IAvaliadorRepository{
    constructor(private avaliadorDAO: AvaliadorDAO){}

    findByCPF(CPF: string): Promise<Avaliador | null> {
        return this.avaliadorDAO.findByCPF(CPF);
    }
    save(avaliador: Avaliador): Promise<Avaliador> {
        return this.avaliadorDAO.save(avaliador);
    }
    
}








