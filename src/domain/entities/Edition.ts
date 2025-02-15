import { EditionWeight } from "./EditionWeight";
import { EditionEvaluationCount } from "./EditionEvaluationCount";

export class Edition {
    public readonly id?: number;
    public name!: string
    public year!: number
    public registrationStart!: Date
    public registrationEnd!: Date
    public fixesStart!: Date
    public fixesEnd!: Date
    public onlineEvaluationStart!: Date
    public onlineEvaluationEnd!: Date
    public liveEvaluationStart!: Date
    public liveEvaluationEnd!: Date
    public editionWeight?: EditionWeight
    public editionEvaluationCount?: EditionEvaluationCount

    public readonly createdAt!: Date;
    public updatedAt!: Date;

    constructor(props: Omit<Edition,'createdAt' | 'updatedAt' | 'editionWeight' | 'editionEvaluationCount'>, id?: number) {
        Object.assign(this, props);
        if(id){
            this.id = id;
        }
    }
}