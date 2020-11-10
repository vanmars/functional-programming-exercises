const addPrefix = (prefix) => {
  return function(name){
    return `${prefix} ${name}`
  }
}

const prefixSir = addPrefix("Sir")
const prefixDoc = addPrefix("Dr.")
const prefixMs = addPrefix("Ms.")
const prefixMiss = addPrefix("Miss")
const prefixMrs = addPrefix("Mrs.")
const prefixMister = addPrefix("Mr.")
const prefixDuchess = addPrefix("Duchess")
const prefixDuke = addPrefix("Duke")

// For Quick Testing
console.log(prefixSir("Vanessa"))
console.log(prefixDoc("Vanessa"))
console.log(prefixMs("Vanessa"))
console.log(prefixMiss("Vanessa"))
console.log(prefixMrs("Vanessa"))
console.log(prefixMister("Vanessa"))
console.log(prefixDuchess("Vanessa"))
console.log(prefixDuke("Vanessa"))