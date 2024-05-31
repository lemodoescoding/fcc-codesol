function myReplace(str, before, after) {
  str = str.split(/\s/g)
  
  str = str.map((e) => {
    if(e === before){
      if(/[A-Z]/.test(e[0])){
        return after[0].toUpperCase() + after.substring(1, after.length)
      }

      return after.toLowerCase()
    }

    return e
  })

  return str.join(' ')
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");