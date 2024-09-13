const { PrintHelloWorld } = require('./index');

test("Returning 'Hello World!' as a string", () => {
  const result = PrintHelloWorld();
  expect(result).toBe("Hello World!");
});
