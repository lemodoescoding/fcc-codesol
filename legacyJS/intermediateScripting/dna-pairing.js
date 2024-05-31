function pairElement(str) {
  return str.split('').map(e => {
    return getDNAPairs(e)
  })
}

function getDNAPairs(strand){
  switch(strand){
    case "A":
      return ["A", "T"]
    case "T":
      return ["T", "A"]
    case "G":
      return ["G", "C"]
    case "C":
      return ["C", "G"]
  }
}

pairElement("GCG");