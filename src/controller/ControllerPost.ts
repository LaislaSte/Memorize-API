import { Request, Response } from "express";
import { ExecuterPost } from "../executors/ExecuterPost";
import { Post } from "../model/bean/Post";

export class ControllerPost {
    constructor(
        private executerPost: ExecuterPost
    ) { }

    async create(req: Request, res: Response): Promise<Response> {
        try {
            const { title, content, imgURL, authorId, tag } = req.body;
            const newPost = new Post({
                title,
                content,
                imgURL,
                authorId,
                tag
            });
            const postCreated = await this.executerPost.create(newPost);
            return res.status(200).json({ message: "Post created sussessfully", postCreated });
        } catch (error) {
            return res.status(204).json(error)
        }
    }

    async readPost(req: Request, res: Response): Promise<Response> {
        try {
            const post = await this.executerPost.readPost(req.params.id);
            if (post) {
                return res.status(200).json({ message: "Post founded", post })
            } else {
                return res.status(204).json({ message: "Post does not exists" })
            }
        } catch (error) {
            return res.json(error)
        }
    }

    async read(req: Request, res: Response): Promise<Response> {
        try {
            const posts = await this.executerPost.read();
            return res.status(200).json({ message: "Posts", posts })
        } catch (error) {
            return res.json(error)
        }
    }

    async update(req: Request, res: Response): Promise<Response> {
        try {
            const { title, content, imgURL, authorId, tag } = req.body;
            const id = req.params.id;
            const post = new Post({
                title,
                content,
                imgURL,
                authorId,
                tag,
                updatedAt: new Date()
            }, id);

            const postUpdated = await this.executerPost.update(post);
            return res.status(200).json({ message: "Post uptaded sussessfully", postUpdated })
        } catch (error) {
            return res.json(error)
        }
    }

    async delete(req: Request, res: Response): Promise<Response> {
        try {
            const post = await this.executerPost.delete(req.params.id);
            return res.status(200).json({ message: "Post deleted", post })
        } catch (error) {
            return res.json(error)
        }
    }

    async filter(req: Request, res: Response): Promise<Response> {
        try {
            const { search } = req.body;
            const posts = await this.executerPost.filter(search);
            return res.status(200).json({ message: "Posts", posts })
        } catch (error) {
            return res.json(error)
        }
    }
}