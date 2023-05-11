import { User } from "../model/bean/User"
import { uuid } from 'uuidv4';

let id: string;
jest.mock('uuidv4', () => ({
    id: jest.fn().mockReturnValue('mocked-uuid'),
}));

describe('User', () => {
    let user: User;

    beforeEach(() => {
        user = new User({
            name: 'John Doe',
            email: 'johndoe@example.com',
            active: true,
        });
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should create a user with a generated UUID', () => {
        expect(user.id).toBe('mocked-uuid');
        expect(id).toHaveBeenCalledTimes(1);
    });

    it('should create a user with a provided ID', () => {
        const customId = 'custom-id';
        user = new User(
            {
                name: 'Jane Smith',
                email: 'janesmith@example.com',
                active: false,
            },
            customId
        );
        expect(user.id).toBe(customId);
        expect(id).not.toHaveBeenCalled();
    });

    it('should set properties correctly', () => {
        expect(user.name).toBe('John Doe');
        expect(user.email).toBe('johndoe@example.com');
        expect(user.active).toBe(true);
    });

    it('should set active property to false if not provided', () => {
        user = new User({
            name: 'Jane Smith',
            email: 'janesmith@example.com',
        });
        expect(user.active).toBe(false);
    });
});
