/*
Convert a String to a Number!
The parseInt() method converts a string of numeric characters (including an optional plus or minus sign) to an integer. 
The method takes 2 arguments where the first argument is the string we want to convert and the second argument should always be 10 for our purposes. 
parseInt() and the Number() method behave similarly. In this exercise, you will create a function that does the same thing.

Write a function that takes a string of digits and returns the appropriate number as an integer. You may not use any of the methods mentioned above.

For now, do not worry about leading + or - signs, nor should you worry about invalid characters; assume all characters will be numeric.

You may not use any of the standard conversion methods available in JavaScript, such as String() and Number(). Your function should do this the old-fashioned way and calculate the result by analyzing the characters in the string.

PROBLEM
inputs: string
outputs: int
requirements: convert a string of numerical digits into an integer and return it

DATA
input string: '123'
char array: ['1', '2', '3']
digit array: [1, 2, 3]
num array: [100, 20, 3]
sum int: 123

ALGO
split the input string into an array of chars
convert each char into its numerical equivalent
  compare each digit with a hash of the string and numeric reperesentations
multiple each digit in the array by its place value
  multiply each digit by 10 to the power of (array.length - 1 - index)
sum the array
return the number
*/

function stringToInteger(input) {
  str2int = {
    '1': 1,
    '2': 2,
    '3': 3,
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 7,
    '8': 8,
    '9': 9,
    '0': 0
  }

  let chars = Array.from(input);

  //console.log(chars);

  let digits = chars.map(digit => {
    return str2int[digit];
  })

  //console.log(digits);
  
  let nums = digits.map((num, index) => {
    return num * Math.pow(10, digits.length - 1 - index);
  })

  return nums.reduce((accumulator, num) => {
    return accumulator + num;
  })
}

console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true