import {CharacterInterface} from '../interfaces/character.interface';

export class CharacterModel implements Required<CharacterInterface> {
    public id: number;
    public name: string;
    public species: string;
    public gender: string;
    public homeworld: string;

    constructor(options?: CharacterInterface) {
        options = options || {};
        this.id = options.id || null;
        this.name = options.name || null;
        this.species = options.species || null;
        this.gender = options.gender || null;
        this.homeworld = options.homeworld || null;
    }
}
