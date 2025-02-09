//=============importação do prisma===============

import { Edition } from '../../domain/entities/Edition';
import { IEditionDAO } from '../../domain/idao/IEditionDAO';
import { db } from '../config/db/db';
import { EditionPrismaMapper } from '../prismaMappers/EditionMapper';
//================================================
export class EditionDAO implements IEditionDAO {

  constructor() {}
  
  findById(id: string): Promise<Edition | null> {
    return db.edition.findUnique({
      where: {
        id: id
      }
    }).then((edition) => {
      if (edition) {
        return EditionPrismaMapper.toDomain(edition);
      }
      return null;
    });
  }

  async save(edition: Edition) {

    const editionModel = EditionPrismaMapper.toPrismaModel(edition);
    
    const editionFromPrisma = db.edition.create({
        data: editionModel
    });
    
    return EditionPrismaMapper.toDomain(await editionFromPrisma);
  }

}