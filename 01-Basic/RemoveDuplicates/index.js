// Write a function called removeDuplicates that takes in an array and returns a new array with duplicates removed.

const removeDuplicates = (arr) => {
  let uniqueArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!uniqueArr.includes(arr[i])) {
      uniqueArr.push(arr[i]);
    }
  }
  return uniqueArr;
};
module.exports = removeDuplicates;