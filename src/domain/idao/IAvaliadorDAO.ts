import { Avaliador } from "../entities/Avaliador";

export interface IAvaliadorDAO{
    findByCPF(CPF: string): Promise<Avaliador | null>;
    save(avaliador: Avaliador): Promise<Avaliador>;
    findById(id: number): Promise<Avaliador | null>;
}

