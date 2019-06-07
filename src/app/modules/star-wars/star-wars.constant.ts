import {OptionModel} from '../../common/forms/model/model/option.model';

export const GENDER_LIST: OptionModel<string>[] = [
    new OptionModel({
        label: 'n/a',
        value: 'n/a',
    }),
    new OptionModel({
        label: 'Male',
        value: 'male',
    }),
    new OptionModel({
        label: 'Female',
        value: 'female',
    }),
];
