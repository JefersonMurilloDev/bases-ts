import { buildMakePerson } from '../../src/js-foundation/05-factory';

describe('js-foundation/05-factory.ts', () => {

    const getUUID = () => '1758492668142';
    const getAge = () => 25;

    test('buildMakePerson should return a function', () => {
        const buildPerson = buildMakePerson({ getUUID, getAge });
        expect(buildPerson).toBeDefined();
        expect(typeof buildPerson).toBe('function');
    });

    test('buildMakePerson should return a person', () => {
        const buildPerson = buildMakePerson({ getUUID, getAge });
        const person = buildPerson({ name: 'John Doe', birthdate: '2000-02-21' });
        console.log(person);
        expect(person).toBeDefined();
        expect(person.name).toBe('John Doe');
        expect(person.age).toBe(25);
        expect(person.id).toBe('1758492668142');
    });
});