function convertHTML(str) {
  str = str.split('')
  
  return( str.map(e => {
    if(/\w|\s/.test(e)) return e
    switch(e){
      case '&':
        return '&amp;'
      case '<':
        return '&lt;'
      case '>':
        return '&gt;'
      case '\"':
        return '&quot;'
      case '\'':
        return '&apos;'
    }
  }).join('') )
}

convertHTML("Dolce & Gabbana");