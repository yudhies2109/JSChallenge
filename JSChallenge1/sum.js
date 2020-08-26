function sum(){
  let x = 0;
  for(let i = 0; i < arguments.length; i++ ){
    x = x + arguments[i];
  }
  return x;
}

console.log(sum(1, 2, 7));
