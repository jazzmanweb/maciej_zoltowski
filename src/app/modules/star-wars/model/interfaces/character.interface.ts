import {GenderEnum} from '../enums/gender.enum';

export interface CharacterInterface {
    name?: string;
    species?: string;
    gender?: GenderEnum;
    homeworld?: string;
}
