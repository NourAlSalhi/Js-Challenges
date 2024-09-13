const reverseString = require("./index");

test("return reversin string", () => {
    expect(reverseString('react')).toBe('tcaer');
});
