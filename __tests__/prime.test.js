import { getPrimes, getList, getList2, getPrimesRecursive } from './../src/js/prime.js'

describe('getPrimes', () => {
test('returns an array of all prime numbers up to given number', () => {
    expect(getPrimes(14)).toEqual([2, 3, 5, 7, 11, 13]);
  })
})

describe('getList', () => {
test('returns an array of all numbers from 2 up to number', () => {
    expect(getList(14)).toEqual([2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);
  })
})

describe('getList2', () => {
  test('returns an array of all numbers from 2 up to number', () => {
      expect(getList2(14)).toEqual([2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);
    })
  })

describe('getPrimesRecursive', () => {
test('returns an array of all prime numbers up to given number', () => {
    expect(getPrimesRecursive(14)).toEqual([2, 3, 5, 7, 11, 13]);
  })
})