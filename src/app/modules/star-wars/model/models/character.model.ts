import {CharacterInterface} from '../interfaces/character.interface';
import {GenderEnum} from '../enums/gender.enum';

export class CharacterModel implements Required<CharacterInterface> {
    public name: string;
    public species: string;
    public gender: GenderEnum;
    public homeworld: string;

    constructor(options?: CharacterInterface) {
        options = options || {};
        this.name = options.name || null;
        this.species = options.species || null;
        this.gender = options.gender in GenderEnum ? options.gender : GenderEnum.NA;
        this.homeworld = options.homeworld || null;
    }
}
