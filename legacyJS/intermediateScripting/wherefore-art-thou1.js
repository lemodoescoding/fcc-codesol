function whatIsInAName(collection, source) {
  return collection.filter(e => {
    for(const srcProp in source){
      if(e[srcProp] !== source[srcProp]) return false
    }

    return true
  })
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });