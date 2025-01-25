import { uuid } from "uuidv4";

export class EditionEvaluationCount{
    public readonly id!: string;

    public readonly createdAt!: Date;
    public updatedAt!: Date;

    constructor(props: Omit<EditionEvaluationCount, 'id' | 'createdAt' | 'updatedAt'>, id?: number){
        Object.assign(this, props);
        if(!id){
            this.id =  uuid();
        }
    }
}