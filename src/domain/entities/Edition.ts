import { uuid } from "uuidv4";
import { EditionWeight } from "./EditionWeight";
import { EditionEvaluationCount } from "./EditionEvaluationCount";

export class Edition{
    public readonly id!: string;
   public  name!:                  string
   public  year!:                  number
   public  registrationStart!:     Date
   public  registrationEnd!:       Date
   public  fixesStart!:            Date
   public  fixesEnd!:              Date
   public  onlineEvaluationStart!: Date
   public  onlineEvaluationEnd!:   Date
   public  liveEvaluationStart!:   Date
   public  liveEvaluationEnd!:     Date
   public editionWeight?:          EditionWeight
   public  editionEvaluationCount?: EditionEvaluationCount 

    public readonly createdAt!: Date;
    public updatedAt!: Date;

    constructor(props: Omit<Edition, 'id' | 'createdAt' | 'updatedAt' | 'editionWeight' | 'editionEvaluationCount'>, id?: string){
        Object.assign(this, props);
        if(id === '' || !id){
            this.id =  uuid();
        }
    }
}