import { uuid } from "uuidv4";
import { Edition } from "./Edition";

export class EditionWeight{
    public readonly id!: string;
    public liveComitteeEvaluationWeight!: number
    public liveCommomEvaluationWeight!: number
    public onlineComitteeEvaluationWeight!: number
    public onlineCommomEvaluationWeight!: number
    public edition!: Edition
    public readonly createdAt!: Date;
    public updatedAt!: Date;

    constructor(props: Omit<EditionWeight, 'id' | 'createdAt' | 'updatedAt'>, id?: number){
        Object.assign(this, props);
        if(!id){
            this.id =  uuid();
        }
    }
}