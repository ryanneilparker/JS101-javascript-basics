/*
Stringy Strings
Write a function that takes one argument, a positive integer, 
and returns a string of alternating '1's and '0's, 
always starting with a '1'. 
The length of the string should match the given integer.

PROBLEM
inputs: int
ouputs: string
requirements: create a string of binary digits the length of the input int, start with 1

ALGO
init a flag to 1
init an empty string
int times do
  append flag to string
  flip flag
return string
*/

function stringy(input) {
  let flag = 1;
  let string = '';

  for (let i = 0; i < input; i ++) {
    string += flag;

    flag = flag === 1 ? 0 : 1
  }

  return string;
}

console.log(stringy(6) === "101010");
console.log(stringy(9) === "101010101");
console.log(stringy(4) === "1010");
console.log(stringy(7) === "1010101");
