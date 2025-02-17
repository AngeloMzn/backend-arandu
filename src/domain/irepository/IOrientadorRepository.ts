import { Orientador } from "../entities/Orientador";

export interface IOrientadorRepository{
    findByCPF(CPF: string): Promise<Orientador | null>;
    save(orientador: Orientador): Promise<Orientador>;
    findById(id: number): Promise<Orientador | null>;
}