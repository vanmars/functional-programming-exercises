import { coinCounterRecursion, coinCounterClosure1, coinCounterClosure2 } from './../src/js/coin.js'

describe('coinCounterRecursion', () => {
  test('should a return a string with number of quarters, dimes, nickels, and pennies for change', () => {
    expect(coinCounterRecursion(91)).toEqual("3 quarters 1 dimes 1 nickels 1 pennies ");
    expect(coinCounterRecursion("blah")).toEqual("Please enter a number.");
  })
})

describe('coinCounterClosure1', () => {
  test('should return a string with number of quarters, dimes, nickels, and pennies for change', () => {
    expect(coinCounterClosure1(91)()).toEqual("3 quarters 1 dimes 1 nickels 1 pennies");
  })
})

// describe('coinCounterClosure2', () => {
//   test('should correctly return number of quarters, dimes, nickels, and pennies for change', () => {
//     expect(coinCounterClosure2(92)("quarters")).toEqual(3);
//     expect(coinCounterClosure2(92)("dimes")).toEqual(1);
//     expect(coinCounterClosure2(92)("nickels")).toEqual(1);
//     expect(coinCounterClosure2(92)("pennies")).toEqual(2);
//   })
// })