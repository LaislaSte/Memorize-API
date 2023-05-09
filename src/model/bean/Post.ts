import { uuid } from "uuidv4";

export class Post {
    public readonly id: string;
    public createdAt?: Date;
    public updatedAt?: Date;
    public title: string;
    public content: string | null;
    public imgURL: string | null;
    public tag: string;
    public authorId: string;

    constructor(post: Omit<Post, 'id'>, id?: string) {
        this.title = post.title;
        this.createdAt = post.createdAt;
        this.tag = post.tag;
        this.content = post.content;
        this.imgURL = post.imgURL;
        this.authorId = post.authorId;
        this.updatedAt = post.updatedAt;
        if (id) {
            this.id = id;
        } else {
            this.id = uuid();
        }
    }
}