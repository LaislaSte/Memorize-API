import { uuid } from "uuidv4";

export class Review {
    public readonly id: string;
    public profileId: string;
    public postId: string;
    public dateReference: Date;
    public obs: string;
    public counter?: number;

    constructor(
        review: Omit<Review, 'id'>, id?: string
    ) {
        this.profileId = review.profileId;
        this.postId = review.postId;
        this.dateReference = review.dateReference;
        this.obs = review.obs;
        this.counter = review.counter;

        if (id) {
            this.id = id;
        } else {
            this.id = uuid();
        }
    }

}

