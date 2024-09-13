const {GetSum} = require('./index');

test('GetSum(1, 2) should return 3', () => {
    const result = GetSum(1, 2);
    expect(result).toBe(3); // expect(result).toEqual(3);
});