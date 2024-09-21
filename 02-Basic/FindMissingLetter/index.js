const findMissingLetter = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    const currentCharCode = arr[i].charCodeAt(0);
    const nextCharCode = arr[i + 1].charCodeAt(0);
    if (nextCharCode - currentCharCode > 1) {
      return String.fromCharCode(currentCharCode + 1);
    }
  }
  return null;
};
