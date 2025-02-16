import { User } from "./User";

export class Organizador {
    public readonly id?: number;
    public board!: string;
    public user!: User;
    public isAccepted!: boolean;
    public readonly createdAt!: Date;
    public updatedAt!: Date;

    constructor(props: Omit<Organizador,'createdAt' | 'updatedAt' | 'editionWeight' | 'editionEvaluationCount'>, id?: number) {
        Object.assign(this, props);
        if(id){
            this.id = id;
        }
    }
}