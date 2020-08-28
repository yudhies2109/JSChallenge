function indexPrime(param1){
 function cekPrime(param1){
 
 let bilanganPrima = Math.sqrt(param1);
 
 for(let i = 2; i <= bilanganPrima; i++){
  if(param1 % i === 0)
  return false;
  }
  return true;
 }
 
 let mulai = 2;
 let count = 0;
 while(count != param1){
  if(cekPrime(mulai)){
   count++;
  }
  mulai++;
 }
 return mulai - 1
}

console.log(indexPrime(4))
console.log(indexPrime(500))
console.log(indexPrime(37786))
