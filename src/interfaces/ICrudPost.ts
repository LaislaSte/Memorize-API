import { Post } from "../model/bean/Post";

export interface ICrudPost {
    create(post: Post): Promise<Post>
    read(): Promise<Post[]>
    readPost(id: string): Promise<Post | null>
    update(post: Post): Promise<Post>
    delete(id: string): Promise<Post>

    filter(search: string): Promise<Post[]>
}