
import { db } from "./db";
import { ICrudPost } from "../../interfaces/ICrudPost";
import { Post } from "../bean/Post";

export class DaoPost implements ICrudPost {
    async create(post: Post): Promise<Post> {
        let newPost: Post = new Post(post);

        await db.post.create({
            data: newPost
        }).then(async (post) => {
            newPost = post;
            await db.$disconnect()
        }).catch(async (e) => {
            console.error(e)
            await db.$disconnect()
            process.exit(1)
        })

        return newPost;
    }

    async read(): Promise<Post[]> {
        let posts: Post[] = [];

        await db.post.findMany({
            include: {
                author: {
                    select: {
                        name: true,
                        photoUrl: true
                    }
                }
            },
            orderBy: {
                createdAt: 'asc'
            }
        })
            .then(async (result) => {
                posts = result;
                await db.$disconnect();
            }).catch(async (e) => {
                console.error(e);
                await db.$disconnect();
                process.exit(1);
            })

        return posts;
    }

    async readPost(id: string): Promise<Post | null> {
        let post: Post | null = null;

        await db.post.findUnique({
            where: {
                id: id
            },
            include: {
                author: {
                    select: {
                        name: true,
                        photoUrl: true
                    }
                }
            }
        })
            .then(async (result) => {
                post = result;
                await db.$disconnect();
            }).catch(async (e) => {
                console.error(e);
                await db.$disconnect();
                process.exit(1);
            })

        return post;
    }

    async update(post: Post): Promise<Post> {
        let pos: Post = new Post(post);

        await db.post.update({
            where: {
                id: post.id
            },
            data: post
        })
            .then(async (result) => {
                pos = result;
                await db.$disconnect();
            }).catch(async (e) => {
                console.error(e);
                await db.$disconnect();
                process.exit(1);
            })

        return pos;

    }

    async delete(id: string): Promise<Post> {
        let post: Post = new Post({ authorId: "", content: "", createdAt: new Date(), imgURL: "", tag: "", title: "", updatedAt: new Date() }, id);

        await db.post.delete({
            where: {
                id
            }
        })
            .then(async (result) => {
                post = result;
                await db.$disconnect();
            }).catch(async (e) => {
                console.error(e);
                await db.$disconnect();
                process.exit(1);
            })

        return post;

    }

    async filter(search: string): Promise<Post[]> {
        let posts: Post[] = [];

        await db.post.findMany({
            where: {
                OR: [
                    {
                        title: { contains: search }
                    },
                    {
                        author: {
                            name: { contains: search }
                        }
                    },
                    {
                        content: { contains: search }
                    }
                ]
            },
            include: {
                author: {
                    select: {
                        name: true,
                        photoUrl: true
                    }
                }
            },
            orderBy: {
                createdAt: 'asc'
            }

        })
            .then(async (result) => {
                posts = result;
                await db.$disconnect();
            }).catch(async (e) => {
                console.error(e);
                await db.$disconnect();
                process.exit(1);
            })

        return posts;
    }
}