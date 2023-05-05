
import { User } from "../model/bean/User"
export interface ICrudUser {
    create(user: User): Promise<User>;
    read(): Promise<User[]>;
    readUser(id: string): Promise<User | null>;
    update(user: User): Promise<User>;
    delete(id: string): Promise<User>;

}