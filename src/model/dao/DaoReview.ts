import { ICrudReview } from "../../interfaces/ICrudReview";
import { Review } from "../bean/Review";
import { db } from "./db";

export class DaoReview implements ICrudReview {

    async create(review: Review): Promise<Review> {
        let newReview: Review = new Review(review);

        await db.review.create({
            data: review
        }).then(async (review) => {
            newReview = review;
            await db.$disconnect()
        }).catch(async (e) => {
            console.error(e)
            await db.$disconnect()
            process.exit(1)
        })

        return newReview;
    }

    async read(): Promise<Review[]> {
        let reviews: Review[] = [];

        await db.review.findMany().then(async (result) => {
            reviews = result;
            await db.$disconnect();
        }).catch(async (e) => {
            console.error(e);
            await db.$disconnect();
            process.exit(1);
        })

        return reviews;
    }

    async readUser(id: string): Promise<Review | null> {
        let reviewReturned: Review | null = null;

        await db.review.findUnique({
            where: {
                id: id
            },
        }).then(async (review) => {
            reviewReturned = review;
            await db.$disconnect()
        }).catch(async (e) => {
            console.error(e)
            await db.$disconnect()
            process.exit(1)
        })

        return reviewReturned;
    }

    async update(review: Review): Promise<Review> {
        let userUpdated: Review = new Review({ dateReference: review.dateReference, obs: "", postId: "", profileId: "", counter: 0 });

        await db.review.update({
            where: {
                id: review.id
            },
            data: review
        }).then(async (result) => {
            userUpdated = result;
            await db.$disconnect()
        }).catch(async (e) => {
            console.error(e)
            await db.$disconnect()
            process.exit(1)
        })

        return userUpdated;
    }

    async delete(id: string): Promise<Review> {
        let userDeleted: Review = new Review({ dateReference: new Date(), obs: "", postId: "", profileId: "", counter: 0 });

        await db.review.delete({
            where: {
                id
            }
        }).then(async (review) => {
            userDeleted = review;
            await db.$disconnect()
        }).catch(async (e) => {
            console.error(e)
            await db.$disconnect()
            process.exit(1)
        })

        return userDeleted;
    }

}