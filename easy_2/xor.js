/*
XOR
In this exercise, you will write a function named xor that takes two arguments, 
and returns true if exactly one of its arguments is truthy, false otherwise.
 Note that we are looking for a boolean result instead of a truthy/falsy value as returned by || and &&.
*/

function xor (val1, val2) {
  if ((val1 && !val2) || (val2 && !val1)) {
    return true;
  }
  return false;
}

console.log(xor(5, 0) === true);
console.log(xor(false, true) === true);
console.log(xor(1, 1) === false);
console.log(xor(true, true) === false);