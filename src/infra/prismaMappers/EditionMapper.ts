import { Edition as editionPrisma } from "@prisma/client";
import { Edition as editionDomain } from "../../domain/entities/Edition";
import { create } from "domain";

export class EditionPrismaMapper {
    static toDomain(edition: editionPrisma) {
        return new editionDomain({
            name: edition.name,
            year: edition.year,
            registrationStart: edition.registrationStart,
            registrationEnd: edition.registrationEnd,
            fixesStart: edition.fixesStart,
            fixesEnd: edition.fixesEnd,
            onlineEvaluationStart: edition.onlineEvaluationStart,
            onlineEvaluationEnd: edition.onlineEvaluationEnd,
            liveEvaluationStart: edition.liveEvaluationStart,
            liveEvaluationEnd: edition.liveEvaluationEnd,
        });
    }
    static toPrismaModel(edition: editionDomain) {
        return {
            id: edition.id,
            name: edition.name,
            year: edition.year,
            registrationStart:new Date(edition.registrationStart),
            registrationEnd: new Date(edition.registrationEnd),
            fixesStart: new Date(edition.fixesStart),
            fixesEnd: new Date(edition.fixesEnd),
            onlineEvaluationStart:new Date(edition.onlineEvaluationStart),
            onlineEvaluationEnd: new Date(edition.onlineEvaluationEnd),
            liveEvaluationStart: new Date(edition.liveEvaluationStart),
            liveEvaluationEnd: new Date(edition.liveEvaluationEnd),
        };
    }
}