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