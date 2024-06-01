function sumPrimes(num) {
  let result = 0

  let i = 2
  while(true){
    if(i > num) break
    if(isPrime(i) == true){
      result += i
    }

    i++
  }

  return result
}

function isPrime(n){
  if(n <= 1) return false

  for(let i = 2; i < n; i++)
    if(n % i === 0) return false
  
  return true
}

sumPrimes(10);