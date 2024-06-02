function palindrome(str) {
  str = str.toLowerCase()
        .replace(/[^a-zA-Z0-9]+/g, '')
  
  let reversed = str.split('').reverse().join('')

  return str == reversed
}

palindrome("_eye");