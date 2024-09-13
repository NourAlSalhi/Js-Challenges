const findMaxNumber = require('./index');

describe('findMaxNumber', () => {
    it('returns 0 if the array is empty', () => {
        expect(findMaxNumber([])).toBe(0);
    });
    it('returns the largest number in the array', () => {
        expect(findMaxNumber([1, 2, 3, 4, 5])).toBe(5);
        expect(findMaxNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBe(10);
        expect(findMaxNumber([10, 9, 8, 7, 6, 5, 4, 3, 2, 1])).toBe(10);
    });
    it('returns the largest number in the array when there are negative numbers', () => {
        expect(findMaxNumber([-1, -2, -3, -4, -5])).toBe(-1);
        expect(findMaxNumber([-1, -2, -3, -4, -5, 6, 7, 8, 9, 10])).toBe(10);
    });
    it('returns the largest number in the array when there are negative and positive numbers', () => {
        expect(findMaxNumber([-1, -2, -3, -4, -5, 6, 7, 8, 9, 10])).toBe(10);
        expect(findMaxNumber([10, 9, 8, 7, 6, 5, 4, 3, 2, -1, -2, -3, -4, -5])).toBe(10);
    });
});