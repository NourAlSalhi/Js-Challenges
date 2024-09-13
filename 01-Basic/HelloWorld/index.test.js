import helloWorld from './index';

test("Returning 'Hello World!' as a string", () => {
    const result = helloWorld();
    expect(result).toBe('Hello World!');
  });