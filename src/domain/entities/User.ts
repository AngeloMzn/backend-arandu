import { uuid } from "uuidv4";

export class User{
    public readonly id!: string;
    public name!: string;
    public email!: string;
    public password!: string;
    public role!: string;
    public readonly createdAt!: Date;
    public updatedAt!: Date;

    constructor(props: Omit<User, 'id' | 'createdAt' | 'updatedAt'>, id?: number){
        Object.assign(this, props);
        if(!id){
            this.id =  uuid();
        }
    }
}