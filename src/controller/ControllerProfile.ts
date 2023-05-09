import { Request, Response } from "express";
import { ExecuterProfile } from "../executors/ExecuterProfile";
import { Profile } from "../model/bean/Profile";

export class ControllerProfile {
    constructor(
        private executerProfile: ExecuterProfile
    ) { }

    async create(req: Request, res: Response): Promise<Response> {
        try {
            const { name, bio, photoUrl, userId } = req.body;
            const newProfile = new Profile({ name, bio, photoUrl, userId });
            const profileCreated = await this.executerProfile.create(newProfile);
            return res.status(200).json({ message: "Profile created sussessfully", profileCreated });
        } catch (error) {
            return res.status(204).json(error)
        }
    }

    async readProfile(req: Request, res: Response): Promise<Response> {
        try {
            const profile = await this.executerProfile.readProfile(req.params.id);
            if (profile) {
                return res.status(200).json({ message: "Profile founded", profile })
            } else {
                return res.status(204).json({ message: "Profile does not exists" })
            }
        } catch (error) {
            return res.json(error)
        }
    }

    async read(req: Request, res: Response): Promise<Response> {
        try {
            const profiles = await this.executerProfile.read();
            return res.status(200).json({ message: "Profiles", profiles })
        } catch (error) {
            return res.json(error)
        }
    }

    async update(req: Request, res: Response): Promise<Response> {
        try {
            const { name, bio, photoUrl, userId } = req.body;
            const id = req.params.id;
            const profile = new Profile({ name, bio, photoUrl, userId }, id);
            const profileUpdated = await this.executerProfile.update(profile);
            return res.status(200).json({ message: "Profile uptaded sussessfully", profileUpdated })
        } catch (error) {
            return res.json(error)
        }
    }

    async delete(req: Request, res: Response): Promise<Response> {
        try {
            const profile = await this.executerProfile.delete(req.params.id);
            return res.status(200).json({ message: "Profile deleted", profile })
        } catch (error) {
            return res.json(error)
        }
    }

    async filter(req: Request, res: Response): Promise<Response> {
        try {
            const { search } = req.body;
            const profiles = await this.executerProfile.filter(search);
            return res.status(200).json({ message: "Profiles", profiles })
        } catch (error) {
            return res.json(error)
        }
    }
}