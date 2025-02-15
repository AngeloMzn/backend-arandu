import { Avaliador } from "../entities/Avaliador";

export interface IAvaliadorRepository{
    findByCPF(CPF: string): Promise<Avaliador | null>;
    save(avaliador: Avaliador): Promise<Avaliador>;
}