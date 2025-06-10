//=============importação do prisma===============

import { Edition } from '../../domain/entities/Edition';
import { IEditionDAO } from '../../domain/idao/IEditionDAO';
import { db } from '../config/db/db';
import { EditionPrismaMapper } from '../prismaMappers/EditionMapper';
//================================================
export class EditionDAO implements IEditionDAO {

  constructor() {}
  findAll(): Promise<Edition[]> {
    return db.edition.findMany()
  }
  
  async findById(id: number): Promise<Edition | null> {
    try {
      const edition = await db.edition.findUnique({
        where: {
          id: id
        }
      });
      if (edition) {
        return EditionPrismaMapper.toDomain(edition);
      }
      return null;
    } catch (error: any) {
      console.error('Error finding Edition:', error);
      throw new Error(`Database error: ${error.message}`);
    }
  }

  async save(edition: Edition) {
    try {
      const editionModel = EditionPrismaMapper.toPrismaModel(edition);
      
      const editionFromPrisma = await db.edition.create({
        data: editionModel
      });
      
      return EditionPrismaMapper.toDomain(editionFromPrisma);
    } catch (error: any) {
      console.error('Error creating Edition:', error);
      throw new Error(`Failed to create Edition: ${error.message}`);
    }
  }

}