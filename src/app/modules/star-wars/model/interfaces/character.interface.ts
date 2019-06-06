import {GenderEnum} from '../enums/gender.enum';

export interface CharacterInterface {
    id?: number;
    name?: string;
    species?: string;
    gender?: GenderEnum;
    homeworld?: string;
}
