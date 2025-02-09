import { EditionWeight } from "../../domain/entities/EditionWeight";
import { IEditionWeightDAO } from "../../domain/idao/IEditionWeightDAO";
import { db } from "../config/db/db";
import { EditionWeightPrismaMapper } from "../prismaMappers/EditionWeightMapper";


export class EditionDAO implements IEditionWeightDAO {

  constructor() { }

  findById(id: string): Promise<EditionWeight | null> {
    throw new Error("Method not implemented.");
  }

  async save(edition: EditionWeight) {


    const editionModel = EditionWeightPrismaMapper.toPrismaModel(edition);


    const editionFromPrisma = db.edition.create({
      data: editionModel
    });

    return EditionWeightPrismaMapper.toDomain(await editionFromPrisma);
  }

}