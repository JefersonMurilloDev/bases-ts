import { characters } from '../../src/js-foundation/02-destructuring';

describe('js-foundation/02-destructuring.ts', () => {

    test('characters should contain Flash, Superman, Green Lantern and Batman', () => {

        console.log(characters);
        
        expect(characters).toContain('Flash');
        expect(characters).toContain('Superman');
        expect(characters).toContain('Green Lantern');
        expect(characters).toContain('Batman');
    });

    test('characters should contain Spiderman', () => {
        const characters = ['Flash','Superman', 'Green Lantern', 'Batman', 'Spiderman'];
        console.log(characters);
        
        expect(characters).toContain('Spiderman');
    });
});