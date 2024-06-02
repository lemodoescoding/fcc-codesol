function smallestCommons(arr) {
  const [min, max] = arr.sort((a, b) => a-b)
  
  const range = Array(max - min + 1)
                .fill(0)
                .map((_, i) => i + min)

  let smallestCom = max
  while(true){
    // if(checkDiv(smallestCom, rangeArr) === false){
    //   smallestCom += max
    //   continue
    // }
    if(range.every(e => smallestCom % e === 0) == true){
      return smallestCom
    }

    smallestCom += max
  }
}

smallestCommons([1, 5]);