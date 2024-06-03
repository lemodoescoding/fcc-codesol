function rot13(str) {
  let alphabets = Array(26).fill(0).map((_, i) => String.fromCharCode(65 + i))

  str = str.split('').map(e => {
    if(!alphabets.includes(e)) return e
    
    let indexInit = alphabets.indexOf(e)

    return (indexInit - 13 < 0) ? alphabets[26 + (indexInit - 13)] : alphabets[indexInit - 13]
  }).join('')

  return str
}

rot13("SERR PBQR PNZC");