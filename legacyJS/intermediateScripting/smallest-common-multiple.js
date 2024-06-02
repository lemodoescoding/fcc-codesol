function smallestCommons(arr) {
  let max = Math.max(...arr),
      min = Math.min(...arr),
      range = max - min
  
  let rangeArr = []
  rangeArr.push(min)
  
  for(let i = 1; i <= range; i++){
    rangeArr.push(rangeArr[i - 1] + 1)
  }

  let smallestCom = max
  while(true){
    if(checkDiv(smallestCom, rangeArr) === false){
      smallestCom += max
      continue
    }

    break
  }

  return smallestCom
}

function checkDiv(num, divs){
  for(let i = 0; i < divs.length; i++){
    if(num % divs[i] === 0) {
      continue
    } else {
      return false
    }
  }

  return true
}

smallestCommons([1, 5]);