function diffArray(arr1, arr2) {
  return arr1
    .concat(arr2)
    .filter(e => {
    if(!arr1.includes(e) || !arr2.includes(e)){
      return true
    }
  })
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);