function truthCheck(collection, pre) {
  return collection.every(e => {
    return e.hasOwnProperty(pre) && Boolean(e[pre])
  })
}

truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot");