function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  const a = 2 * Math.PI

  return arr.map(e => {
    let alt = e.avgAlt + earthRadius
    let b = Math.sqrt(Math.pow(alt, 3) / GM)
    let res = Math.round(a * b)

    return {name: e.name, orbitalPeriod: res}
  })
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);