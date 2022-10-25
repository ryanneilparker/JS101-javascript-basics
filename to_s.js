/*
Write a function that converts a non-negative integer value (e.g., 0, 1, 2, 3, and so on) to the string representation of that integer.

You may not use any of the standard conversion functions available in JavaScript, 
such as String(), Number.prototype.toString, or an expression such as '' + number. 
Your function should do this the old-fashioned way and construct the string by analyzing and manipulating the number.

PROBLEM
inputs: int
outputs: string
requirements: convert an integer into its string representation, including the sign

DATA
input int: 123
digits array: [1, 2, 3]
chars array: ['1', '2', '3']
output string '123'

ALGO
break the number into an array of its digits
  modulo the number by increasing orders of 10
  add the digits to a new array and reverse
convert each didit to its string equivalent
join the array of chars back into a string
*/

function integerToString(input) {
  let digits = [];
  let order = 1;

  if(input === 0) {
    return '0';
  }

  while (input != 0) {
    digits.push(Math.floor(input, Math.pow(10, order)));

    input = input - digits[order - 1];

    order ++;
  }

  return digits.reverse().join();
}

console.log(integerToString(4321) == "4321");
console.log(integerToString(0) == "0");
console.log(integerToString(5000) == "5000");
console.log(integerToString(1234567890) == "1234567890");
