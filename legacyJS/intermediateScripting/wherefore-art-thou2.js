function whatIsInAName(collection, source) {
  let newCol = []
  for(let i = 0; i < collection.length; i++){
    let foundMismatch = false
    for(const srcProp in source){
      if(collection[i][srcProp] !== source[srcProp]) foundMismatch = true
    }

    if(!foundMismatch) newCol.push(collection[i])
  }

  return newCol
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });