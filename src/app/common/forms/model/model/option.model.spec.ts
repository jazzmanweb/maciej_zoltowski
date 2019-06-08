import {OptionModel} from './option.model';
import {OptionInterface} from '../interfaces/option.interface';

class TestClass {
    constructor(public id: string,
                public value: string) {
    }
}

describe('OptionModel<T>', () => {
    const falsyObjects = [undefined, null];
    describe('should return class instance like for literal {}', () => {
        falsyObjects.forEach((item) => {
            it(`${typeof item === 'string' ? '\'' + item + '\'' : item}`, () => {
                const result = new OptionModel(item);
                const expected = new OptionModel({});
                expect(result).toEqual(expected);
            });
        });
    });

    it('should has same field as given interface', () => {
        const input: OptionInterface = {
            label: 'A',
            value: 'B',
        };

        const output = new OptionModel(input);
        expect(output.label).toEqual(input.label);
        expect(output.value).toEqual(input.value);
    });

    it('should be generic', () => {
        const input: OptionInterface<TestClass> = {
            label: 'A',
            value: new TestClass('C', 'D'),
        };

        const output = new OptionModel<TestClass>(input);
        expect(output.label).toEqual(input.label);
        expect(output.value).toEqual(input.value);
    });

    it('should has null for falsy values', () => {
        const input: OptionInterface = {
            label: '',
            value: '',
        };

        const output = new OptionModel(input);
        expect(output.label).toEqual(null);
        expect(output.value).toEqual(null);
    });
});
