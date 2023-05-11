import { Review } from '../model/bean/Review';
import { uuid } from 'uuidv4';

describe('Review', () => {
    let review: Review;
    const reviewData = {
        profileId: '1',
        postId: '2',
        dateReference: new Date(),
        obs: 'test observation',
        counter: 1
    };
    const reviewId = uuid();

    beforeEach(() => {
        review = new Review(reviewData, reviewId);
    });

    it('should create a review object with an id', () => {
        expect(review.id).toBeDefined();
        expect(typeof review.id).toBe('string');
    });

    it('should create a review object without an id', () => {
        const newReview = new Review(reviewData);
        expect(review.id).not.toEqual(newReview.id);
    });

    it('should set properties from the provided data', () => {
        expect(review.profileId).toBe(reviewData.profileId);
        expect(review.postId).toBe(reviewData.postId);
        expect(review.dateReference).toBe(reviewData.dateReference);
        expect(review.obs).toBe(reviewData.obs);
        expect(review.counter).toBe(reviewData.counter);
    });

    it('should set undefined as default value for counter', () => {
        const newReview = new Review({
            profileId: '1',
            postId: '2',
            dateReference: new Date(),
            obs: 'test observation',
        });
        expect(newReview.counter).toBeUndefined();
    });
});