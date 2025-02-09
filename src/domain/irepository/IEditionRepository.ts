import { Edition } from "../entities/Edition";


export interface IEditionRepository {
    save(edition: Edition): Promise<Edition>;
    findById(id: string): Promise<Edition | null>;
}