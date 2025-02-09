//=============importação do prisma===============

import { EditionEvaluationCount } from '../../domain/entities/EditionEvaluationCount';
import { IEditionEvaluationCountDAO } from '../../domain/idao/IEditionEvaluationCountDAO';
import { db } from '../config/db/db';
import { EditionEvaluationCountPrismaMapper } from '../prismaMappers/EditionEvaluationCountMapper';
//================================================
export class EditionEvaluationCountDAO implements IEditionEvaluationCountDAO {

    constructor() { }
    
    async findById(id: number): Promise<EditionEvaluationCount | null> {
        try {
            const editionEvaluationCount = await db.editionEvaluationCount.findUnique({
                where: { id: id }
            });
            
            if (editionEvaluationCount) {
                return EditionEvaluationCountPrismaMapper.toDomain(editionEvaluationCount);
            }
            return null;
        } catch (error: any) {
            console.error('Error finding EditionEvaluationCount:', error);
            throw new Error(`Database error while finding EditionEvaluationCount: ${error.message}`);
        }
    }

    async save(editionEvaluationCount: EditionEvaluationCount) {
        try {
            const editionEvaluationCountModel = EditionEvaluationCountPrismaMapper.toPrismaModel(editionEvaluationCount);
            console.log('Attempting to create EditionEvaluationCount:', editionEvaluationCountModel);

            const editionFromPrisma = await db.editionEvaluationCount.create({
                data: editionEvaluationCountModel
            });

            return EditionEvaluationCountPrismaMapper.toDomain(editionFromPrisma);
        } catch (error: any) {
            console.error('Error creating EditionEvaluationCount:', error);
            throw new Error(`Failed to create EditionEvaluationCount: ${error.message}`);
        }
    }

}