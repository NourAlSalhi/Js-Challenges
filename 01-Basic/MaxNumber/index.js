//Write a function called findMaxNumber that takes in an array of numbers and returns the largest number in the array.
//If the array is empty, return 0.

const findMaxNumber = (arr) => {
    if (arr.length === 0) {
        return 0;
    }
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
};
module.exports = findMaxNumber;
