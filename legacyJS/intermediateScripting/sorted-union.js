function uniteUnique(...arr) {
  let newArr = []

  arr.forEach(e => {
    e.forEach(m => {
      if(!newArr.includes(m)) newArr.push(m)
    })
  })

  return newArr
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);