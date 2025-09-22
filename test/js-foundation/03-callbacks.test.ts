import { getUserById } from '../../src/js-foundation/03-callbacks';

describe('js-foundation/03-callbacks.ts', () => {

    test('getUserById should return an error if the user does not exist', (done) => {
        
        const id = 10;

        getUserById(id, (err, user) => {
            expect( err ).toBe(`User not found with id ${id}`);
            expect( user ).toBeUndefined();
            done();
        });

    });

    test('getUserById should return a user if the user exists', (done) => {
        const id = 2;

        getUserById(id, (err, user) => {
            console.log(user);
            expect( err ).toBeUndefined();
            expect( user ).toBeDefined();
            done();
        });

    });
    
    
});