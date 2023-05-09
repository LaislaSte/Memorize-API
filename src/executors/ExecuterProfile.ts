import { ICrudProfile } from "../interfaces/ICrudProfile";
import { Profile } from "../model/bean/Profile";

export class ExecuterProfile {

    constructor(
        private daoProfile: ICrudProfile
    ) { }

    async create(profile: Profile) {
        await this.daoProfile.create(profile);
    }

    async read(): Promise<Profile[]> {
        const profileOut: Profile[] = await this.daoProfile.read();
        return profileOut;
    }

    async readProfile(id: string): Promise<Profile | null> {
        const profileOut: Profile | null = await this.daoProfile.readProfile(id);
        return profileOut;
    }

    async update(profile: Profile): Promise<Profile> {
        const profileOut: Profile = await this.daoProfile.update(profile);
        return profileOut;
    }

    async delete(id: string): Promise<Profile> {
        const profileOut: Profile = await this.daoProfile.delete(id);
        return profileOut;
    }

    async filter(search: string): Promise<Profile[]> {
        const profileOut: Profile[] = await this.daoProfile.filter(search);
        return profileOut;
    }
}