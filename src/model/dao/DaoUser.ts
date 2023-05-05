import { ICrudUser } from "../../interfaces/ICrudUser";
import { User } from "../bean/User";


import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export class DaoUser implements ICrudUser {

    async create(user: User): Promise<User> {
        let newUser: User = new User(user);

        await prisma.user.create({
            data: user
        }).then(async (user) => {
            newUser = user;
            await prisma.$disconnect()
        }).catch(async (e) => {
            console.error(e)
            await prisma.$disconnect()
            process.exit(1)
        })

        return newUser;
    }

    async read(): Promise<User[]> {
        let users: User[] = [];

        await prisma.user.findMany().then(async (result) => {
            users = result;
            await prisma.$disconnect();
        }).catch(async (e) => {
            console.error(e);
            await prisma.$disconnect();
            process.exit(1);
        })

        return users;
    }

    async readUser(id: string): Promise<User | null> {
        let userReturned: User | null = null;

        await prisma.user.findUnique({
            where: {
                id: id
            }
        }).then(async (user) => {
            userReturned = user;
            await prisma.$disconnect()
        }).catch(async (e) => {
            console.error(e)
            await prisma.$disconnect()
            process.exit(1)
        })

        return userReturned;
    }

    async update(user: User): Promise<User> {
        let userUpdated: User = new User(user);

        await prisma.user.update({
            where: {
                id: user.id
            },
            data: user
        }).then(async () => {
            await prisma.$disconnect()
        }).catch(async (e) => {
            console.error(e)
            await prisma.$disconnect()
            process.exit(1)
        })

        return userUpdated;
    }

    async delete(id: string): Promise<User> {
        let userDeleted: User = new User({ email: "", name: "" });

        await prisma.user.delete({
            where: {
                id
            }
        }).then(async (user) => {
            userDeleted = user;
            await prisma.$disconnect()
        }).catch(async (e) => {
            console.error(e)
            await prisma.$disconnect()
            process.exit(1)
        })

        return userDeleted;
    }

}