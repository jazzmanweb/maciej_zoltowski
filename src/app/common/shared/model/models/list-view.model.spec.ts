import {ListViewModel} from './list-view.model';
import {ListViewInterface} from '../interfaces/list-view.interface';

class TestClass {
    constructor(public id: string,
                public value: string) {
    }
}

describe('ListViewModel<T>', () => {
    const falsyObjects = [undefined, null];
    describe('should return class instance like for literal {}', () => {
        falsyObjects.forEach((item) => {
            it(`${typeof item === 'string' ? '\'' + item + '\'' : item}`, () => {
                const result = new ListViewModel(item);
                const expected = new ListViewModel({});
                expect(result).toEqual(expected);
            });
        });
    });

    it('should has same field as given interface', () => {
        const input: ListViewInterface<TestClass> = {
            header: 'HEADER',
            field: 'id',
            show: true,
            sortable: true,
        };

        const output = new ListViewModel(input);
        expect(output.header).toEqual(input.header);
        expect(output.field).toEqual(input.field);
        expect(output.show).toEqual(input.show);
        expect(output.sortable).toEqual(input.sortable);
    });

    it('should has same field as given interface v2', () => {
        const input: ListViewInterface<TestClass> = {
            header: 'ANOTHER',
            field: 'value',
            show: false,
            sortable: false,
        };

        const output = new ListViewModel(input);
        expect(output.header).toEqual(input.header);
        expect(output.field).toEqual(input.field);
        expect(output.show).toEqual(input.show);
        expect(output.sortable).toEqual(input.sortable);
    });
});
