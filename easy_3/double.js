/*
ddaaiillyy ddoouubbllee
Write a function that takes a string argument 
and returns a new string that contains the value of the original string 
with all consecutive duplicate characters collapsed into a single character.

PROBLEM
inputs: string
outputs: string
requirements: remove all consecutively repeating chars

DATA
input string: 'ttesst'
chars array: ['t', 't', 'e', 's', 's', 't']
newChars array: ['t', 'e', 's', 't']
output string: 'test'

ALGO
split input string into an array of chars
iterate through the array of chars
  if the current element == the previous element
  remove the current element
join the newchars back into a string and return
*/

function crunch(input) {
  chars = Array.from(input);
  newChars = [];

  for(let i = 1; i <= chars.length; i ++) {
    if(chars[i] != chars[i - 1]) {
      newChars.push(chars[i - 1]);
    }
  }

  return newChars.join('');
}

console.log(crunch('ddaaiillyy ddoouubbllee') === "daily double");
console.log(crunch('4444abcabccba') === "4abcabcba");
console.log(crunch('ggggggggggggggg') === "g");
console.log(crunch('a') === "a");
console.log(crunch('') === "");
