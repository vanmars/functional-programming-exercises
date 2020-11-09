export const  getOnes = (num) => {
  if (num === 1){
    return "I";
  } else if (num === 2){
    return "II";
  } else if(num === 3){
    return "III";
  } else if (num === 4){
    return "IV";
  } else if (num === 5){
    return "V";
  } else if (num === 6){
    return "VI";
  } else if (num === 7){
    return "VII";
  } else if (num === 8){
    return "VIII";
  } else if (num === 9){
    return "IX";
  } else {
    return "";
  } 
}

export const  getTens = (num) => {
  if (num === 1){
    return "X";
  } else if (num === 2){
    return "XX";
  } else if(num === 3){
    return "XXX";
  } else if (num === 4){
    return "XL";
  } else if (num === 5){
    return "L";
  } else if (num === 6){
    return "LX";
  } else if (num === 7){
    return "LXX";
  } else if (num === 8){
    return "LXXX";
  } else if (num === 9){
    return "XC";
  } else {
    return "";
  } 
}

export const  getHundreds = (num) => {
  if (num === 1){
    return "C";
  } else if (num === 2){
    return "CC";
  } else if(num === 3){
    return "CCC";
  } else if (num === 4){
    return "CD";
  } else if (num === 5){
    return "D";
  } else if (num === 6){
    return "DC";
  } else if (num === 7){
    return "DCC";
  } else if (num === 8){
    return "DCCC";
  } else if (num === 9){
    return "CM";
  } else {
    return "";
  } 
}

export const  getThousands = (num) => {
  if (num === 1){
    return "M";
  } else if (num === 2){
    return "MM";
  } else {
    return "MMM";
  }
}

export const getRoman = (num) => {                   // 1234                234             34           4       0
  // Termination Case
  if (typeof (num) !== 'number') {
    return "Please enter a number."
  }
  const arr = num.toString().split("");              // ['1','2','3','4']   ['2','3','4']   ['3','4']   ['4']    ['0']
  const workingDigit = parseInt(arr[0]);             // 1                   2               3            4       0       
  const nextNum =  parseInt(arr.slice(1).join(""))   // 234                 34              4            NaN     NaN
  // Base Case
  if (num === 0) {
    return ""
  // Other Recursion Cases
  } else if (arr.length === 4){
    return getThousands(workingDigit) + getRoman(nextNum);  // "M" + getRoman(234)
  } else if (arr.length === 3){
    return getHundreds(workingDigit) + getRoman(nextNum);   // "CC" + getRoman(34)
  } else if (arr.length === 2){
    return getTens(workingDigit) + getRoman(nextNum);       // "XXX" + getRoman(4)
  } else if (arr.length === 1){
    return getOnes(workingDigit) + getRoman(0);             // "IV" + getRoman(0)
  }
}