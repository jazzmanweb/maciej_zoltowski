import {PaginationModel} from './pagination.model';
import {PaginationInterface} from '../interfaces/pagination.interface';

describe('PaginationModel', () => {
    const falsyObjects = [undefined, null];
    describe('should return class instance like for literal {}', () => {
        falsyObjects.forEach((item) => {
            it(`${typeof item === 'string' ? '\'' + item + '\'' : item}`, () => {
                const result = new PaginationModel(item);
                const expected = new PaginationModel({});
                expect(result).toEqual(expected);
            });
        });
    });

    it('should has same field as given interface for some page', () => {
        const input: PaginationInterface = {
            page: 50,
            limit: 10,
            total: 101,
            isFirst: false,
            isLast: false,
        };

        const output = new PaginationModel(input);
        expect(output.page).toEqual(input.page);
        expect(output.limit).toEqual(input.limit);
        expect(output.total).toEqual(input.total);
        expect(output.isFirst).toEqual(input.isFirst);
        expect(output.isLast).toEqual(input.isLast);
    });

    it('should has same field as given interface for first page', () => {
        const input: PaginationInterface = {
            page: 1,
            limit: 10,
            total: 101,
            isFirst: true,
            isLast: false,
        };

        const output = new PaginationModel(input);
        expect(output.page).toEqual(input.page);
        expect(output.limit).toEqual(input.limit);
        expect(output.total).toEqual(input.total);
        expect(output.isFirst).toEqual(input.isFirst);
        expect(output.isLast).toEqual(input.isLast);
    });

    it('should has same field as given interface for last page', () => {
        const input: PaginationInterface = {
            page: 11,
            limit: 10,
            total: 101,
            isFirst: false,
            isLast: true,
        };

        const output = new PaginationModel(input);
        expect(output.page).toEqual(input.page);
        expect(output.limit).toEqual(input.limit);
        expect(output.total).toEqual(input.total);
        expect(output.isFirst).toEqual(input.isFirst);
        expect(output.isLast).toEqual(input.isLast);
    });
});
