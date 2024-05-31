function destroyer(arr, ...target) {
  return arr.filter(e => {
    if(!target.includes(e)) return true
  })
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);