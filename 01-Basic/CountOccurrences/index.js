//Write a function called countOccurrences() that takes in a string and a character and returns the number of occurrences of that character in the string.

const countOccurrences = (str, char) => {
  return str.split('').filter(c => c === char).length;
};
module.exports = countOccurrences;