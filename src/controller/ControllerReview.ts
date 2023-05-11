import { Request, Response } from "express";
import { ExecuterReview } from "../executors/ExecuterReview";
import { Review } from "../model/bean/Review";

export class ControllerReview {
    constructor(
        private executerReview: ExecuterReview
    ) { }

    async create(req: Request, res: Response): Promise<Response> {
        try {
            const { profileId, postId, obs, } = req.body;
            const newReview = new Review({ profileId, postId, dateReference: new Date(), obs });
            const reviewCreated = await this.executerReview.create(newReview);
            return res.status(200).json({ message: "Review created sussessfully", reviewCreated });
        } catch (error) {
            return res.status(204).json(error)
        }
    }

    async read(req: Request, res: Response): Promise<Response> {
        try {
            const reviews = await this.executerReview.read();
            return res.status(200).json({ message: "reviews", reviews })
        } catch (error) {
            return res.json(error)
        }
    }

    async update(req: Request, res: Response): Promise<Response> {
        try {
            const { profileId, postId, dateReference, obs, id } = req.body;
            const review = new Review({ profileId, postId, dateReference, obs }, id);
            const reviewUpdated = await this.executerReview.update(review);
            return res.status(200).json({ message: "Review uptaded sussessfully", reviewUpdated })
        } catch (error) {
            return res.json(error)
        }
    }

    async delete(req: Request, res: Response): Promise<Response> {
        try {
            const review = await this.executerReview.delete(req.params.id);
            return res.status(200).json({ message: "Review deleted", review })
        } catch (error) {
            return res.json(error)
        }
    }

}
