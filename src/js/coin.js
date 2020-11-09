export const coinCounterRecursion = (num) => {
  if (isNaN(num)) {
    return "Please enter a number."
  };
  if (num === 0) {
    return "";
  } else if (num/25 >= 1) {
    const quarters = Math.floor(num/25);
    return `${quarters} quarters ` + coinCounterRecursion(num - quarters*25);
  } else if (num/10 >= 1) {
    const dimes = Math.floor(num/10);
    return `${dimes} dimes ` + coinCounterRecursion(num - dimes*10);
  } else if (num/5 >= 1) {
    const nickels = Math.floor(num/5);
    return `${nickels} nickels ` + coinCounterRecursion(num - nickels*5);
  } else {
    const pennies = num
    return `${pennies} pennies ` + coinCounterRecursion(0);
  };
}

export const coinCounterClosure1 = (num) => {
  const quarters =  Math.floor(num/25);
  const dimes = Math.floor((num - quarters*25)/10);
  const nickels = Math.floor((num - quarters*25 - dimes*10)/5);
  const pennies = Math.floor((num - quarters*25 - dimes*10 - nickels*5));
  return function displayChange(){ 
    return `${quarters} quarters ${dimes} dimes ${nickels} nickels ${pennies} pennies`; 
  }
}

export const coinCounterClosure2 = (num) => {
  const quarters =  Math.floor(num/25);
  const dimes = Math.floor((num - quarters*25)/10);
  const nickels = Math.floor((num - quarters*25 - dimes*10)/5);
  const pennies = Math.floor((num - quarters*25 - dimes*10 - nickels*5));
  return function displayParticularChange(coin) { 
    if (coin.toLowerCase === "quarters") {
      return quarters;
    } else if (coin.toLowerCase === "dimes") {
      return dimes;
    } else if (coin.toLowerCase === "nickels") {
      return nickels;
    } else {
      return pennies;
    }
  }
}
