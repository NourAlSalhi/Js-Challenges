//Write a function called arrayIntersection that takes in two arrays and returns an array containing the intersection of the two input arrays

const arrIntersection = (arr1, arr2) => {
  const arr = [];
  for (let i = 0; i <= arr1.length; i++) {
    if (arr2.includes(arr1[i]) && !arr.includes(arr1[i])) {
      arr.push(arr1[i]);
    }
  }
  return arr;
};
