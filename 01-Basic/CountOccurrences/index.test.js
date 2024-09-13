const countOccurrences = require("./index");

test("Counts occurrences of a character in a string", () => {
    const result = countOccurrences('hello world', 'l');
    expect(result).toBe(3);
});
