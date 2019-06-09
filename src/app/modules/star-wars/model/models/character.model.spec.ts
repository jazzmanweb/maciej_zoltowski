import {CharacterModel} from './character.model';
import {CharacterInterface} from '../interfaces/character.interface';

describe('CharacterModel', () => {
    const falsyObjects = [undefined, null];
    describe('should return class instance like for literal {}', () => {
        falsyObjects.forEach((item) => {
            it(`${typeof item === 'string' ? '\'' + item + '\'' : item}`, () => {
                const result = new CharacterModel(item);
                const expected = new CharacterModel({});
                expect(result).toEqual(expected);
            });
        });
    });

    it('should has same field as given interface', () => {
        const input: CharacterInterface = {
            id: 1,
            name: 'x',
            species: 'x',
            gender: 'x',
            homeworld: 'x',
        };

        const output = new CharacterModel(input);
        expect(output.id).toEqual(input.id);
        expect(output.name).toEqual(input.name);
        expect(output.species).toEqual(input.species);
        expect(output.gender).toEqual(input.gender);
        expect(output.homeworld).toEqual(input.homeworld);
    });

    it('should has null for falsy values', () => {
        const input: CharacterInterface = {
            id: 0,
            name: '',
            species: '',
            gender: '',
            homeworld: '',
        };

        const output = new CharacterModel(input);
        expect(output.id).toEqual(null);
        expect(output.name).toEqual(null);
        expect(output.species).toEqual(null);
        expect(output.gender).toEqual(null);
        expect(output.homeworld).toEqual(null);
    });
});
