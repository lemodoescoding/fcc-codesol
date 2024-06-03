function telephoneCheck(str) {
  let regex1 = /^(1\s?)?\d{3}(\s|-)?\d{3}(\s|-)?\d{4}$/g,
      regex2 = /^(1\s?)?\(\d{3}\)(\s)?\d{3}(\s|-)?\d{4}$/g
  return regex1.test(str) ? true : regex2.test(str) ? true : false
}

telephoneCheck("555-555-5555");