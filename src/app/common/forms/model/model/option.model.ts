import {OptionInterface} from '../interfaces/option.interface';

export class OptionModel<T = string> implements Required<OptionInterface<T>> {
    public label: string;
    public value: T;

    constructor(options?: Partial<OptionInterface<T>>) {
        options = options || {};
        this.label = options.label || null;
        this.value = options.value || null;
    }
}
