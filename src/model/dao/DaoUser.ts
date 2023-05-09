import { ICrudUser } from "../../interfaces/ICrudUser";
import { User } from "../bean/User";
import { db } from "./db";

export class DaoUser implements ICrudUser {

    async create(user: User): Promise<User> {
        let newUser: User = new User(user);

        await db.user.create({
            data: user
        }).then(async (user) => {
            newUser = user;
            await db.$disconnect()
        }).catch(async (e) => {
            console.error(e)
            await db.$disconnect()
            process.exit(1)
        })

        return newUser;
    }

    async read(): Promise<User[]> {
        let users: User[] = [];

        await db.user.findMany().then(async (result) => {
            users = result;
            await db.$disconnect();
        }).catch(async (e) => {
            console.error(e);
            await db.$disconnect();
            process.exit(1);
        })

        return users;
    }

    async readUser(id: string): Promise<User | null> {
        let userReturned: User | null = null;

        await db.user.findUnique({
            where: {
                id: id
            },
        }).then(async (user) => {
            userReturned = user;
            await db.$disconnect()
        }).catch(async (e) => {
            console.error(e)
            await db.$disconnect()
            process.exit(1)
        })

        return userReturned;
    }

    async update(user: User): Promise<User> {
        let userUpdated: User = new User({ email: "", name: "" });

        await db.user.update({
            where: {
                id: user.id
            },
            data: user
        }).then(async (result) => {
            userUpdated = result;
            await db.$disconnect()
        }).catch(async (e) => {
            console.error(e)
            await db.$disconnect()
            process.exit(1)
        })

        return userUpdated;
    }

    async delete(id: string): Promise<User> {
        let userDeleted: User = new User({ email: "", name: "" });

        await db.user.delete({
            where: {
                id
            }
        }).then(async (user) => {
            userDeleted = user;
            await db.$disconnect()
        }).catch(async (e) => {
            console.error(e)
            await db.$disconnect()
            process.exit(1)
        })

        return userDeleted;
    }

}