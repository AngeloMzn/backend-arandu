//=============importação do prisma===============

import { Edition } from '../../domain/entities/Edition';
import { User } from '../../domain/entities/User';
import { IEditionDAO } from '../../domain/idao/IEditionDAO';
import { IUserDAO } from '../../domain/idao/IUserDAO';
import { db } from '../config/db/db';
import { EditionPrismaMapper } from '../prismaMappers/EditionMapper';
//================================================
export class EditionDAO implements IEditionDAO {

  constructor() {}

  async save(edition: Edition) {

    
    console.error( "XERECAAAAAAAAA: "+ edition.id);
    
    const editionModel = EditionPrismaMapper.toPrismaModel(edition);
    

    const editionFromPrisma = db.edition.create({
        data: editionModel
    });
    
    return EditionPrismaMapper.toDomain(await editionFromPrisma);
  }

}