import { EditionWeight } from "../../domain/entities/EditionWeight";
import { IEditionWeightDAO } from "../../domain/idao/IEditionWeightDAO";
import { db } from "../config/db/db";
import { EditionWeightPrismaMapper } from "../prismaMappers/EditionWeightMapper";


export class EditionWeightDAO implements IEditionWeightDAO {

  constructor() { }

  findById(id: string): Promise<EditionWeight | null> {
    return db.editionWeight.findUnique({
      where: {
        id: id
      }
    }).then((editionWeight) => {
      if (editionWeight) {
        return EditionWeightPrismaMapper.toDomain(editionWeight);
      }
      return null;
    });
  }

  async save(editionWeight: EditionWeight) {

    const editionWeightModel = EditionWeightPrismaMapper.toPrismaModel(editionWeight);
    console.log(editionWeightModel)
    const editionFromPrisma = db.editionWeight.create({
      data: editionWeightModel
    });

    //retorna o objeto apenas com o id possivelmente
    return EditionWeightPrismaMapper.toDomain(await editionFromPrisma);
  }

}

