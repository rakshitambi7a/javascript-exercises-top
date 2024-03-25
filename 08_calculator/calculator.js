function add(a,b){
  return a+b;
}
function subtract(a,b){
  return a-b;
}
function sum(array){
  return array.reduce((sum,number) => sum+=number, 0);
}
function multiply(array){
  return array.reduce((product,number)=> product*=number, 1);
}
function power(a,b){
  return Math.pow(a,b);
}
function factorial(a){
  if(a == 0){
    return 1;
  }
  return a*factorial(a-1);
}
// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
