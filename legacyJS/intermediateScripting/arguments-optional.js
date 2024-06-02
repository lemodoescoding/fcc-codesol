function addTogether(...args) {
  if(args.length > 1){
    let [a,b] = arguments
    if(typeof a !== "number" || typeof b !== "number") return undefined

    return a + b
  }

  if(args.length == 1) {
    if(typeof args[0] !== "number") return undefined
    return (c) => addTogether(args[0], c)
  }
}

addTogether(2);