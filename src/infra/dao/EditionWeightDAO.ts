import { EditionWeight } from "../../domain/entities/EditionWeight";
import { IEditionWeightDAO } from "../../domain/idao/IEditionWeightDAO";
import { db } from "../config/db/db";
import { EditionWeightPrismaMapper } from "../prismaMappers/EditionWeightMapper";

export class EditionWeightDAO implements IEditionWeightDAO {

  constructor() { }

  async findById(id: number): Promise<EditionWeight | null> {
    try {
      const editionWeight = await db.editionWeight.findUnique({
        where: { id: id }
      });
      
      if (editionWeight) {
        return EditionWeightPrismaMapper.toDomain(editionWeight);
      }
      return null;
    } catch (error: any) {
      console.error('Error finding EditionWeight:', error);
      throw new Error(`Database error: ${error.message}`);
    }
  }

  async save(editionWeight: EditionWeight) {
    try {
      const editionWeightModel = EditionWeightPrismaMapper.toPrismaModel(editionWeight);
      
      const editionFromPrisma = await db.editionWeight.create({
        data: editionWeightModel
      });

      return EditionWeightPrismaMapper.toDomain(editionFromPrisma);
    } catch (error: any) {
      console.error('Error creating EditionWeight:', error);
      throw new Error(`Database operation failed: ${error.message}`);
    }
  }

}

