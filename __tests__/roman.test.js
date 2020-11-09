import { getOnes, getTens, getHundreds, getThousands, getRoman, getRomanWithClosure } from '../src/js/roman.js'

describe('getOnes', () => {
test('should return roman numeral given digit in ones place', () => {
    expect(getOnes(6)).toEqual("VI");
  })
})

describe('getTens', () => {
test('should return roman numeral given digit in tens place', () => {
    expect(getTens(6)).toEqual("LX");
  })

})

describe('getHundreds', () => {
test('should return roman numeral given digit in hundreds place', () => {
    expect(getHundreds(6)).toEqual("DC");
  })
})

describe('getThousands', () => {
test('should return roman numeral given digit in thousands place', () => {
    expect(getThousands(3)).toEqual("MMM");
  })
})

describe('getRoman', () => {
test('should convert number to roman numberal', () => {
    expect(getRoman(1234)).toEqual("MCCXXXIV");
    expect(getRoman("1234")).toEqual("Please enter a number.");
  })
})

describe('getRoman', () => {
test('should convert number to roman numeral', () => {
    expect(getRoman("1234")).toEqual("Please enter a number.");  
    expect(getRoman(1234)).toEqual("MCCXXXIV"); 
  })
})

  describe('getRomanWithClosure', () => {
  test('should convert number to roman numeral', () => {
      expect(getRomanWithClosure("1234")).toEqual("Please enter a number.");
      expect(getRomanWithClosure(1234)()).toEqual("MCCXXXIV");
      expect(getRomanWithClosure(123)()).toEqual("CXXIII");
    })
  })