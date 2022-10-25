/*
Write a function that calculates and returns the index of the first Fibonacci number that has the number of digits specified by the argument. 
(The first Fibonacci number has an index of 1.)

You may assume that the argument is always an integer greater than or equal to 2.

PROBLEM
inputs: int
outputs: int
requirements: return the index of the first fib number that has the specified number of digits

ALGO
iterate through the fib series
break if a term has the specifie number of digits
*/

function numOfDigits(num) {
  return String(num).length;
}

function findFibonacciIndexByLength(num) {
  let fib;
  let currentFib = 1n;
  let previousFib = 1n;
  let index = 2n;

  while(numOfDigits(currentFib) < num) {
    fib = previousFib + currentFib;
    previousFib = currentFib;
    currentFib = fib;

    index += 1n;
  }

  return index;
}

console.log(findFibonacciIndexByLength(2n) === 7n);
console.log(findFibonacciIndexByLength(3n) === 12n);
console.log(findFibonacciIndexByLength(10n) === 45n);
console.log(findFibonacciIndexByLength(16n) === 74n);
console.log(findFibonacciIndexByLength(100n) === 476n);
console.log(findFibonacciIndexByLength(1000n) === 4782n);
console.log(findFibonacciIndexByLength(10000n) === 47847n);
