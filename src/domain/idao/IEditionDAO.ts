import { Edition } from "../entities/Edition";

export interface IEditionDAO {
    save(edition: Edition): Promise<Edition>;
}