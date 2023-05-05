import { Request, Response } from "express";
import { ExecuterUser } from "../executors/ExecuterUser";
import { User } from "../model/bean/User";

export class ControllerUser {
    constructor(
        private executerUser: ExecuterUser
    ) { }

    async create(req: Request, res: Response): Promise<Response> {
        try {
            const { name, email } = req.body;
            const newUser = new User({ name, email });
            const userCreated = await this.executerUser.create(newUser);
            return res.status(200).json({ message: "user created sussessfully", userCreated });
        } catch (error) {
            return res.status(204).json(error)
        }
    }

    async readUser(req: Request, res: Response): Promise<Response> {
        try {
            const user = await this.executerUser.readUser(req.params.id);
            if (user) {
                return res.status(200).json({ message: "user founded", user })
            } else {
                return res.status(204).json({ message: "user does not exists" })
            }
        } catch (error) {
            return res.json(error)
        }
    }

    async read(req: Request, res: Response): Promise<Response> {
        try {
            const users = await this.executerUser.read();
            return res.status(200).json({ message: "users", users })
        } catch (error) {
            return res.json(error)
        }
    }

    async update(req: Request, res: Response): Promise<Response> {
        try {
            const { id, name, email } = req.body;
            const user = new User({ name, email }, id)
            const userUpdated = await this.executerUser.update(user);
            return res.status(200).json({ message: "user uptaded sussessfully", userUpdated })
        } catch (error) {
            return res.json(error)
        }
    }

    async delete(req: Request, res: Response): Promise<Response> {
        try {
            const user = await this.executerUser.delete(req.params.id);
            return res.status(200).json({ message: "user deleted", user })
        } catch (error) {
            return res.json(error)
        }
    }

}
