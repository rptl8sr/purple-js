// callback
function add(a, b) {
  return a + b;
}


function substract(a, b) {
  return a - b;
}


function calculate(operation, a, b) {
  console.log(`operation: ${operation.name}, a: ${a}, b: ${b}`);
  return operation(a, b);
}


console.log(`result: ${calculate(add, 1, 2)}`);
console.log(`result: ${calculate(substract, 1, 2)}`);


// function return
function power(pow) {
  return function(num)  {
    return num ** pow;
  }
}

const square = power(2);
const cube = power(3);
console.log(`square: ${square(5)}`);
console.log(`cube: ${cube(5)}`);

console.log(`4 ** 5: ${power(5)(4)}`);


// arrow function
const arrowPower = pow => num => num ** pow;

console.log(`4 ** 5: ${arrowPower(5)(4)}`);
