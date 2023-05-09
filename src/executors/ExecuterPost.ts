import { ICrudPost } from "../interfaces/ICrudPost";
import { Post } from "../model/bean/Post";

export class ExecuterPost {

    constructor(
        private daoPost: ICrudPost
    ) { }

    async create(post: Post) {
        await this.daoPost.create(post);
    }

    async read(): Promise<Post[]> {
        const postOut: Post[] = await this.daoPost.read();
        return postOut;
    }

    async readPost(id: string): Promise<Post | null> {
        const postOut: Post | null = await this.daoPost.readPost(id);
        return postOut;
    }

    async update(post: Post): Promise<Post> {
        const postOut: Post = await this.daoPost.update(post);
        return postOut;
    }

    async delete(id: string): Promise<Post> {
        const postOut: Post = await this.daoPost.delete(id);
        return postOut;
    }

    async filter(search: string): Promise<Post[]> {
        const postOut: Post[] = await this.daoPost.filter(search);
        return postOut;
    }
}