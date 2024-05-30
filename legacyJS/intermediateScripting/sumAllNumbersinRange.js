function sumAll(arr) {
  arr.sort((a,b) => a-b)
  let items = []

  for(let i = 0; i < (arr[1] - arr[0]) + 1; i++){
    items.push(arr[0] + i)
  }

  console.log(items)

  return items.reduce((accu, curr) => accu + curr)
}

sumAll([1, 4]);