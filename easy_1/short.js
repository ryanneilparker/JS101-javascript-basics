/*
Short Long Short
Write a function that takes two strings as arguments, 
determines the length of the two strings, 
and then returns the result of concatenating the shorter string, 
the longer string, 
and the shorter string once again. 
You may assume that the strings are of different lengths.

PROBLEMS
inputs: 2 strings
outputs: string
requirments: determine the shortest string, then concatenate in the form SLS
questions: validation? (no), same length? (irrelevant)

DATA
string1 string: 'short'
string2 string: 'longer'
strings array: ['short', 'longer']
newString string: 'shortlongershort'

ALGO
init array
add shortest string to array
add longest string to array
concatenate strings
return new string
*/

function shortLongShort(string1, string2) {
  let newString = [];

  if (string1.length < string2.length) {
    newString = string1 + string2 + string1;
  } else {
    newString = string2 + string1 + string2;
  }

  return newString;
}


console.log(shortLongShort('abc', 'defgh') === "abcdefghabc");
console.log(shortLongShort('abcde', 'fgh') === "fghabcdefgh");
console.log(shortLongShort('', 'xyz') === "xyz");
