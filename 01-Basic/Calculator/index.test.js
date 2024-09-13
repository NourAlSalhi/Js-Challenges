const {calculator} = require('./index');

describe('calculator', () => {
    test('calculator(1, 2, "+") should return 3', () => {
        const result = calculator(1, 2, "+");
        expect(result).toBe(3); 
    });

    test('calculator(1, 2, "-") should return -1', () => {
        const result = calculator(1, 2, "-");
        expect(result).toBe(-1); 
    });

    test('calculator(1, 2, "*") should return 2', () => {
        const result = calculator(1, 2, "*");
        expect(result).toBe(2); 
    })
    test('calculator(1, 2, "/") should return 0.5', () => {
        const result = calculator(1, 2, "/");
        expect(result).toBe(0.5); 
    })
})