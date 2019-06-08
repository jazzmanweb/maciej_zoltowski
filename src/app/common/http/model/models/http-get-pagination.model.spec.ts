import {HttpGetPaginationModel} from './http-get-pagination.model';
import {HttpGetPaginationInterface} from '../interfaces/http-get-pagination.interface';

class TestClass {
    constructor(public id: string,
                public value: string) {
    }
}

describe('HttpGetPaginationModel<T>', () => {
    const falsyObjects = [undefined, null];
    describe('should return class instance like for literal {}', () => {
        falsyObjects.forEach((item) => {
            it(`${typeof item === 'string' ? '\'' + item + '\'' : item}`, () => {
                const result = new HttpGetPaginationModel(item);
                const expected = new HttpGetPaginationModel({});
                expect(result).toEqual(expected);
            });
        });
    });

    it('should has same field as given interface', () => {
        const input: HttpGetPaginationInterface<TestClass> = {
            total: 100,
            body: new TestClass('C', 'D'),
        };

        const output = new HttpGetPaginationModel<TestClass>(input);
        expect(output.total).toBe(+input.total);
        expect(output.body).toEqual(input.body);
    });

    it('should be generic', () => {
        const input: HttpGetPaginationInterface<string> = {
            total: 100,
            body: 'C',
        };

        const output = new HttpGetPaginationModel<string>(input);
        expect(output.total).toBe(+input.total);
        expect(output.body).toEqual(input.body);
    });

    describe('parseInt', () => {
        const obj = new HttpGetPaginationModel();

        it('should return number from number', () => {
            const input: number = 100;
            const output = obj.parseInt(input);
            expect(output).toBe(input);
        });

        it('should return number from string', () => {
            const input: number = 100;
            const output = obj.parseInt('' + input);
            expect(output).toEqual(input);
        });

        it('should return 0 from falsy', () => {
            expect(obj.parseInt(undefined)).toEqual(0);
            expect(obj.parseInt(null)).toEqual(0);
            expect(obj.parseInt('')).toEqual(0);
        });
    });
});
