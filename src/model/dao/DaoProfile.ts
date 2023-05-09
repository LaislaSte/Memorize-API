import { db } from "./db";
import { ICrudProfile } from "../../interfaces/ICrudProfile";
import { Profile } from "../bean/Profile";

export class DaoProfile implements ICrudProfile {
    async create(profile: Profile): Promise<Profile> {
        let newProfile: Profile = new Profile(profile);

        // thats how you insert on prisma a realation atribute
        // await prisma.mikrotik.create({
        //     data: {
        //       name: rebody.name,
        //       ip: rebody.ip,
        //       netmask: mask,
        //       gatway: rebody.gatway,
        //       password: rebody.password,
        //       Subrede: { connect: { id: 'id-subnet-desejavel } }
        //     }
        //   })

        await db.profile.create({
            data: newProfile
        }).then(async (profile) => {
            newProfile = profile;
            await db.$disconnect()
        }).catch(async (e) => {
            console.error(e)
            await db.$disconnect()
            process.exit(1)
        })

        return newProfile;
    }

    async read(): Promise<Profile[]> {
        let profiles: Profile[] = [];

        await db.profile.findMany()
            .then(async (result) => {
                profiles = result;
                await db.$disconnect();
            }).catch(async (e) => {
                console.error(e);
                await db.$disconnect();
                process.exit(1);
            })

        return profiles;
    }

    async readProfile(id: string): Promise<Profile | null> {
        let prof: Profile | null = null;

        await db.profile.findUnique({
            where: {
                id: id
            },
            include: {
                user: {
                    select: {
                        name: true,
                        email: true
                    }
                }
            }
        })
            .then(async (result) => {
                prof = result;
                await db.$disconnect();
            }).catch(async (e) => {
                console.error(e);
                await db.$disconnect();
                process.exit(1);
            })

        return prof;
    }

    async update(profile: Profile): Promise<Profile> {
        let prof: Profile = new Profile(profile);

        await db.profile.update({
            where: {
                id: profile.id
            },
            data: profile
        })
            .then(async (result) => {
                prof = result;
                await db.$disconnect();
            }).catch(async (e) => {
                console.error(e);
                await db.$disconnect();
                process.exit(1);
            })

        return prof;

    }

    async delete(id: string): Promise<Profile> {
        let profile: Profile = new Profile({ bio: "", name: "", photoUrl: "", userId: "" });

        await db.profile.delete({
            where: {
                id
            }
        })
            .then(async (result) => {
                profile = result;
                await db.$disconnect();
            }).catch(async (e) => {
                console.error(e);
                await db.$disconnect();
                process.exit(1);
            })

        return profile;

    }

    async filter(search: string): Promise<Profile[]> {
        let profiles: Profile[] = [];

        await db.profile.findMany({
            where: {
                OR: [
                    {
                        name: { contains: search }
                    },
                    {
                        bio: { contains: search }
                    }
                ]
            },
            include: {
                user: {
                    select: {
                        email: true
                    }
                }
            },
            orderBy: {
                name: 'asc'
            }

        })
            .then(async (result) => {
                profiles = result;
                await db.$disconnect();
            }).catch(async (e) => {
                console.error(e);
                await db.$disconnect();
                process.exit(1);
            })

        return profiles;
    }
}