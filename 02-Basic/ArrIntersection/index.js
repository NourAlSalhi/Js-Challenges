const arrIntersection = (arr1,arr2) => {
    const arr = []
    for(let i=0; i <= arr1.length;i++) {
     if (arr2.includes(arr1[i]) && !arr.includes(arr1[i])) {
        arr.push(arr1[i]);
      }
    }
    return arr
  }