//Write a function called isPalindrome that takes in a string and returns true if the string is a palindrome and false if it is not.
function isPalindrome(str) {
  const formattedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reversedStr = formattedStr.split("").reverse().join("");
  return formattedStr === reversedStr;
}
module.exports = isPalindrome;
