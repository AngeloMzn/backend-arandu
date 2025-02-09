import { uuid } from "uuidv4";
import { Edition } from "./Edition"; // Adjust the path as necessary

export class EditionEvaluationCount{
    public readonly id!: string;
    minimumOnlineComitteeEvaluation!: number;
    minimumOnlineCommomEvaluation!:   number;
    minimumLiveComitteeEvaluation!:   number;
    minimumLiveCommomEvaluation!:     number;
    maximumOnlineComitteeEvaluation!: number;
    maximumOnlineCommomEvaluation!:   number;
    maximumLiveComitteeEvaluation!:   number;
    maximumLiveCommomEvaluation!:     number;
    public edition!: Edition;
    public readonly createdAt!: Date;
    public updatedAt!: Date;

    constructor(props: Omit<EditionEvaluationCount, 'id' | 'createdAt' | 'updatedAt'>, id?: number){
        Object.assign(this, props);
        if(!id){
            this.id =  uuid();
        }
    }
}