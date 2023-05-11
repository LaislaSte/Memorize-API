import { Review } from "../model/bean/Review";

export interface ICrudReview {
    create(review: Review): Promise<Review>
    read(): Promise<Review[]>
    update(review: Review): Promise<Review>
    delete(id: string): Promise<Review>
}