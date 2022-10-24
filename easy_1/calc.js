/*
Sum or Product of Consecutive Integers
Write a program that asks the user to enter an integer greater than 0, 
then asks if the user wants to determine the sum or the product 
of all numbers between 1 and the entered integer, inclusive.

PROBLEM
inputs: n > 0, operation
outputs: sum or product of series

EXAMPLE
sumProd(3, 'sum') => 1 + 2 + 3 = 6

DATA
num int: 3
operation string: 'sum'
output int: 6

ALGO
generate series from 1 to num
if sum
  reduce to sum
if prod
  reduce to prod
return output
*/

function sumProd(num, operation) {
  let array = [];
  let output;

  for(let i = 1; i <= num; i++) {
    array.push(i);
  }

  if (operation == 'sum') {
    output = array.reduce((accumulator, currentValue) => {
      return accumulator + currentValue
    });
  } else {
    output = array.reduce((accumulator, currentValue) => {
      return accumulator * currentValue
    });
    }

  return output;
}

console.log(sumProd(5, 'prod'));

