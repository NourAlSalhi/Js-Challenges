const countVowels = require('./index');

describe('Count Vowels', () => {
    it('Should return 2 for "hello"', () => {
        expect(countVowels('hello')).toBe(2);
    });
    
    it('Should return 5 for "aeiou"', () => {
        expect(countVowels('aeiou')).toBe(5);
    });
    
    it('Should return 0 for "qwrty"', () => {
        expect(countVowels('qwrty')).toBe(0);
    });
    
    it('Should return 0 for ""', () => {
        expect(countVowels('')).toBe(0);
    });
    
    it('Should return 10 for "aeiouaeiou"', () => {
        expect(countVowels('aeiouaeiou')).toBe(10);
    });
})