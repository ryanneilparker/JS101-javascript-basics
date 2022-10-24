/*
UTF-16 String Value
Write a function that determines and returns the UTF-16 string value of a string passed in as an argument. 
The UTF-16 string value is the sum of the UTF-16 values of every character in the string. 
(You may use String.prototype.charCodeAt() to determine the UTF-16 value of a character.)

PROBLEM
inputs: string
outputs: int
requirements: determine the UTF value of each index and return the sum of these values

DATA
input string: 'test'
char array: ['t', 'e', 's', 't']
value array: [1, 2, 3, 4]
ouput int: 11

ALGO
break string into an array of letters
convert letters to values
sum values
return sum
*/

function utf16Value(string) {
  let chars = Array.from(string);
  let values = [];

  if (string === '') {
    return 0;
  }

  for(let i = 0; i < chars.length; i++) {
    values.push(string.charCodeAt(i));
  }

  return values.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  })
}

console.log(utf16Value('Four score') === 984);
console.log(utf16Value('Launch School') === 1251);
console.log(utf16Value('a') === 97);
console.log(utf16Value('') === 0);

// The next three lines demonstrate that the code
// works with non-ASCII characters from the UTF-16
// character set.
const OMEGA = "\u03A9";             // UTF-16 character 'Ω' (omega)
utf16Value(OMEGA);                  // 937
utf16Value(OMEGA + OMEGA + OMEGA);  // 2811