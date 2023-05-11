import { Profile } from "../model/bean/Profile";

describe('Profile', () => {
    describe('constructor', () => {
        it('should create a new profile with given properties and generated id', () => {
            const name = 'John Doe';
            const bio = 'Lorem ipsum dolor sit amet';
            const photoUrl = 'https://example.com/photo.jpg';
            const userId = '123';
            const profile = new Profile({ name, bio, photoUrl, userId });

            expect(profile.name).toBe(name);
            expect(profile.bio).toBe(bio);
            expect(profile.photoUrl).toBe(photoUrl);
            expect(profile.userId).toBe(userId);
            expect(profile.id).toBeTruthy();
        });

        it('should create a new profile with given properties and id', () => {
            const id = '456';
            const name = 'Jane Doe';
            const bio = 'Lorem ipsum dolor sit amet';
            const photoUrl = 'https://example.com/photo.jpg';
            const userId = '789';
            const profile = new Profile({ name, bio, photoUrl, userId }, id);

            expect(profile.name).toBe(name);
            expect(profile.bio).toBe(bio);
            expect(profile.photoUrl).toBe(photoUrl);
            expect(profile.userId).toBe(userId);
            expect(profile.id).toBe(id);
        });

        it('should create a new profile with null values for bio and photoUrl', () => {
            const name = 'John Doe';
            const userId = '123';
            const profile = new Profile({ name, bio: null, photoUrl: null, userId });

            expect(profile.name).toBe(name);
            expect(profile.bio).toBeNull();
            expect(profile.photoUrl).toBeNull();
            expect(profile.userId).toBe(userId);
        });
    });
});
