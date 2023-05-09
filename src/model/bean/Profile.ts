import { uuid } from "uuidv4";

export class Profile {
    public readonly id: string;
    public name: string;
    public bio: string | null;
    public photoUrl: string | null;
    public userId: string;

    constructor(
        profile: Omit<Profile, 'id'>, id?: string
    ) {
        this.name = profile.name;
        this.bio = profile.bio;
        this.photoUrl = profile.photoUrl;
        this.userId = profile.userId;

        if (id) {
            this.id = id;
        } else {
            this.id = uuid();
        }
    }

}

