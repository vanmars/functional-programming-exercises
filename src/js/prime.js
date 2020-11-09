// Looping Solution
export const getPrimes = (num) => {
  let arr = [];
  for (let i=2; i<num; i++){ 
    arr.push(i); 
  };
  let prime = 2;
  while (prime < num) {
    arr = arr.filter(e => e % prime !== 0 || e === prime );
    prime ++;
  }
  return arr;
}

// Recursive Solution
export const getList = (num) => {
  let list = [];
  const generateList = (number) => {
    list.unshift(number)
    if (number === 2){
      return;
    } else {
      return generateList(number-1);
    }
  }
  generateList(num-1);
  return list;
}

export const getPrimesRecursive = (num) => {
  let arr = getList(num);
  const filterArray = (number) => {
    const prime = number;
    arr = arr.filter(e => e % prime !== 0 || e === prime );
    if (number === num-1) {
      return;
    } else {
      return filterArray(number+1);
    }
  }
  filterArray(2);
  return arr;
}
