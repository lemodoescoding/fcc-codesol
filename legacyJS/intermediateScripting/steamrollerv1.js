function steamrollArray(arr) {
  let newArr = []
  flattenArray(0, arr, newArr)

  return newArr
}

function flattenArray(index, inputArr, outputArr){
  if(index >= inputArr.length) return
  if(Array.isArray(inputArr[index])) {
    flattenArray(0, inputArr[index], outputArr)
  } else {
    outputArr.push(inputArr[index])
  }

  flattenArray(index + 1, inputArr, outputArr)
}

steamrollArray([1, [2], [3, [[4]]]]);