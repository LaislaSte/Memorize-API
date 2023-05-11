import { Post } from '../model/bean/Post';

describe('Post', () => {
    describe('constructor', () => {
        it('should create a new post with given properties and generated id', () => {
            const title = 'Test Post';
            const createdAt = new Date();
            const tag = 'technology';
            const content = 'Lorem ipsum dolor sit amet';
            const imgURL = 'https://example.com/image.jpg';
            const authorId = '123';
            const post = new Post({ title, createdAt, tag, content, imgURL, authorId });

            expect(post.title).toBe(title);
            expect(post.createdAt).toBe(createdAt);
            expect(post.tag).toBe(tag);
            expect(post.content).toBe(content);
            expect(post.imgURL).toBe(imgURL);
            expect(post.authorId).toBe(authorId);
            expect(post.id).toBeTruthy();
        });

        it('should create a new post with given properties and id', () => {
            const id = '456';
            const title = 'Another Post';
            const createdAt = new Date();
            const tag = 'food';
            const content = 'Lorem ipsum dolor sit amet';
            const imgURL = 'https://example.com/image.jpg';
            const authorId = '789';
            const post = new Post({ title, createdAt, tag, content, imgURL, authorId }, id);

            expect(post.title).toBe(title);
            expect(post.createdAt).toBe(createdAt);
            expect(post.tag).toBe(tag);
            expect(post.content).toBe(content);
            expect(post.imgURL).toBe(imgURL);
            expect(post.authorId).toBe(authorId);
            expect(post.id).toBe(id);
        });

        it('should create a new post with null values for content and imgURL', () => {
            const title = 'Empty Post';
            const createdAt = new Date();
            const tag = 'miscellaneous';
            const authorId = '123';
            const post = new Post({ title, createdAt, tag, content: null, imgURL: null, authorId });

            expect(post.title).toBe(title);
            expect(post.createdAt).toBe(createdAt);
            expect(post.tag).toBe(tag);
            expect(post.content).toBeNull();
            expect(post.imgURL).toBeNull();
            expect(post.authorId).toBe(authorId);
            expect(post.id).toBeTruthy();
        });
    });
});
