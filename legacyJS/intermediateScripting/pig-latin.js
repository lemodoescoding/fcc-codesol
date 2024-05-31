function translatePigLatin(str) {
  let regex = /([^aiueo]+)|([aiueo])/g
  let consonant = /[^aiueo]+/g
  
  str = str.match(regex)
  if(consonant.test(str[0]) === true){
    let shifted = str.shift()
    return str.concat(shifted).join('') + 'ay'
  }

  return str.join('') + 'way'
}

translatePigLatin("consonant");