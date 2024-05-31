function fearNotLetter(str) {
  for(let i = 0; i < str.length; i++){
    if(i == str.length - 1) return undefined

    let charCodeNow = str.charCodeAt(i)
    let charNext = String.fromCharCode(str.charCodeAt(i + 1))
    let shouldBe = String.fromCharCode(charCodeNow + 1)

    if(charNext !== shouldBe) return shouldBe
  }
}

fearNotLetter("abce");