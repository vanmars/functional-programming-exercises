import { getPrimes } from './../src/js/prime.js'

describe('getPrimes', () => {
test('returns an array of all prime numbers up to given number', () => {
    expect(getPrimes(14)).toEqual([2, 3, 5, 7, 11, 13])
  })
})