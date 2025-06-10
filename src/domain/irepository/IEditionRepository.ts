import { Edition } from "../entities/Edition";


export interface IEditionRepository {
    save(edition: Edition): Promise<Edition>;
    findById(id: number): Promise<Edition | null>;
    findAll(): Promise<Edition[]>;
}