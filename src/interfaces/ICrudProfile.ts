import { Profile } from "../model/bean/Profile";

export interface ICrudProfile {
    create(profile: Profile): Promise<Profile>
    read(): Promise<Profile[]>
    readProfile(id: string): Promise<Profile | null>
    update(profile: Profile): Promise<Profile>
    delete(id: string): Promise<Profile>

    filter(search: string): Promise<Profile[]>
}