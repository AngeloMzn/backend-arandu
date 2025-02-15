import { Orientador } from "../entities/Orientador";

export interface IOrientadorDAO{
    findByCPF(CPF: string): Promise<Orientador | null>;
    save(orientador: Orientador): Promise<Orientador>;
}