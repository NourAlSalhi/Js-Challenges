//Write a function called countVowels that takes in a string and returns the number of vowels in the string.
const countVowels = (str) => {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (
      char == "a" ||
      char == "o" ||
      char == "e" ||
      char == "u" ||
      char == "i"
    ) {
      count++;
    }
  }
  return count;
};
module.exports = countVowels;