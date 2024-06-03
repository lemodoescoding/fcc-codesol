function convertToRoman(num) {
  let res = ''
  while(num > 0){
    [num, res] = checkSub(num, res)
  }

  return res
}

function checkSub(num, str){
  const romanNums = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  }

  for(const roman in romanNums){
    let n = parseInt(romanNums[roman])
    if(num - n >= 0){
      return [num -= n, str += roman]
    }
  }
}

convertToRoman(36);