function rot13(str) {
  str = str.split('')
  let alphabets = Array(26).fill(0).map((_, i) => String.fromCharCode(65 + i))

  str = str.map(e => {
    if(!alphabets.includes(e)) return e
    
    let indexInit = alphabets.indexOf(e)
    if(indexInit - 13 < 0){
      return 26 + (indexInit - 13)
    }

    return indexInit - 13
  }).map(e => {
    if(Number.isInteger(e)) return alphabets[e]
    return e
  }).join('')

  return str
}

rot13("SERR PBQR PNZC");