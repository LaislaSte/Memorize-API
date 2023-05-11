import { Review } from "../model/bean/Review";
import { ICrudReview } from "../interfaces/ICrudReview";
import moment from "moment";

export class ExecuterReview {

    constructor(
        private daoReview: ICrudReview
    ) { }

    async create(review: Review) {
        await this.daoReview.create(review);
    }

    async read(): Promise<Review[]> {
        const reviewOut: Review[] = await this.daoReview.read();
        return reviewOut;
    }

    async update(review: Review): Promise<Review> {
        let counter: number = review.counter ? review.counter : 0;
        let newDate = moment()

        switch (counter) {
            case 0:
                newDate = newDate.add(1, 'd');
                break;
            case 1:
                newDate = newDate.add(2, 'd');
                break;
            case 2:
                newDate = newDate.add(3, 'd');
                break;
            case 3:
                newDate = newDate.add(5, 'd');
                break;
            case 4:
                newDate = newDate.add(7, 'd');
                break;
            case 5:
                newDate = newDate.add(14, 'd');
                break;

            default:
                if (counter > 5) {
                    counter = counter
                    newDate = newDate.add(15, 'day');
                }
        }


        const reviewOut: Review = await this.daoReview.update(new Review({
            counter: counter + 1,
            postId: review.postId,
            profileId: review.profileId,
            dateReference: newDate.toDate(),
            obs: review.obs
        }));
        return reviewOut;
    }

    async delete(id: string): Promise<Review> {
        const reviewOut: Review = await this.daoReview.delete(id);
        return reviewOut;
    }

}