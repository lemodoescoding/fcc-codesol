const AVAILABLE_CURRENCY = [
  ["PENNY", 1],
  ["NICKEL", 5],
  ["DIME", 10],
  ["QUARTER", 25],
  ["ONE", 100],
  ["FIVE", 500],
  ["TEN", 1000],
  ["TWENTY", 2000],
  ["ONE HUNDRED", 10000]
];

function checkCashRegister(price, cash, cid) {
  let changeOriginal = Math.round(cash * 100) - Math.round(price * 100)
  let amountToReturn = changeOriginal

  if(changeOriginal / 100 === cid.reduce((accu, curr) => accu + curr[1], 0)) return {status: 'CLOSED', change: cid}

  let cashOnHand = []
  let cashToGive = []

  cid.forEach(denom => {
    cashOnHand[denom[0]] = denom[1] * 100
  })

  let indexCash = 0

  for(let i = AVAILABLE_CURRENCY.length - 1; i >= 0 && amountToReturn > 0; i--){
    const [moneyType, moneyValue] = AVAILABLE_CURRENCY[i]
    if(amountToReturn - moneyValue >= 0){
      cashToGive.push([moneyType, 0])

      while(amountToReturn - moneyValue >= 0 && cashOnHand[moneyType] > 0){
        // cashToGive[moneyType] += moneyValue
        cashOnHand[moneyType] -= moneyValue
        cashToGive[indexCash][1] += moneyValue
        amountToReturn -= moneyValue

      }

      indexCash++
    }
  }

  cashToGive = cashToGive.map(e => {
    return [e[0], e[1] / 100]
  })

  if(amountToReturn === 0) return {status: 'OPEN', change: cashToGive}

  return {status: 'INSUFFICIENT_FUNDS', change: []}
}


// let res = checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])

let res = checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])

console.log(res)