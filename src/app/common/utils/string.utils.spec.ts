import {removeFirstCharIfExist, removeLastCharIfExist} from './string.utils';

describe('String utils', () => {
    const falsyStrings = [undefined, null, '', ' '];

    describe('removeLastCharIfExist', function () {
        describe('should return not changed for for wrong input data', () => {
            falsyStrings.forEach((item) => {
                it(`${typeof item === 'string' ? '\'' + item + '\'' : item}`, () => {
                    const result = removeLastCharIfExist(item, '/');

                    expect(result).toEqual(item);
                });
            });
        });

        it('should remove last given char', () => {
            const input = 'xxxxxxxxxxx/';
            const output = 'xxxxxxxxxxx';
            const result = removeLastCharIfExist(input, '/');

            expect(result).toEqual(output);
        });

        it('should remove only one char', () => {
            const input = 'xxxxxxxxxxx//';
            const output = 'xxxxxxxxxxx/';
            const result = removeLastCharIfExist(input, '/');

            expect(result).toEqual(output);
        });

        it('should return not changed if not found char', () => {
            const input = 'xxxxxxxxxxx_';
            const output = 'xxxxxxxxxxx_';
            const result = removeLastCharIfExist(input, '/');

            expect(result).toEqual(output);
        });
    });

    describe('removeFirstCharIfExist', function () {
        describe('should return not changed for for wrong input data', () => {
            falsyStrings.forEach((item) => {
                it(`${typeof item === 'string' ? '\'' + item + '\'' : item}`, () => {
                    const result = removeFirstCharIfExist(item, '/');

                    expect(result).toEqual(item);
                });
            });
        });

        it('should remove first given char', () => {
            const input = '/xxxxxxxxxxx';
            const output = 'xxxxxxxxxxx';
            const result = removeFirstCharIfExist(input, '/');

            expect(result).toEqual(output);
        });

        it('should remove only one char', () => {
            const input = '//xxxxxxxxxxx';
            const output = '/xxxxxxxxxxx';
            const result = removeFirstCharIfExist(input, '/');

            expect(result).toEqual(output);
        });

        it('should return not changed if not found char', () => {
            const input = 'xxxxxxxxxxx_';
            const output = 'xxxxxxxxxxx_';
            const result = removeFirstCharIfExist(input, '/');

            expect(result).toEqual(output);
        });
    });
});
