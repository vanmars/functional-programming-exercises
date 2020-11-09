import {getOnes, getTens, getHundreds, getThousands, getRoman} from './../src/js/romanNumerals.js'

describe('getOnes', () => {
test('should return roman numeral given digit in ones place', () => {
    expect(getOnes(6)).toEqual("VI");
  })
})

describe('getTens', () =>{
test('should return roman numeral given digit in tens place', () => {
    expect(getTens(6)).toEqual("LX");
  })

})

describe('getHundreds', () =>{
test('should return roman numeral given digit in hundreds place', () => {
    expect(getHundreds(6)).toEqual("DC");
  })
})

describe('getThousands', () =>{
test('should return roman numeral given digit in thousands place', () => {
    expect(getThousands(3)).toEqual("MMM");
  })
})