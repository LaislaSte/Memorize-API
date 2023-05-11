import { uuid } from "uuidv4";

export class User {

    public readonly id: string;
    public name: string;
    public email: string;
    public active?: boolean;

    constructor(props: Omit<User, 'id'>, id?: string) {
        this.email = props.email;
        this.name = props.name;
        if (props.active) {
            this.active = props.active;
        } else {
            this.active = false;
        }

        if (id) {
            this.id = id
        } else {
            this.id = uuid();
        }
    }

}