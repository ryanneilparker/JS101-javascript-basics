/*
Multiples of 3 and 5
Write a function that computes the sum of all numbers between 1 and some other number, inclusive, 
that are multiples of 3 or 5. 
For instance, if the supplied number is 20, the result should be 98 (3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 + 20).

You may assume that the number passed in is an integer greater than 1.

PROBLEM
inputs: int
outputs: int
requirements: compute the sum of all multiples of 3 and 5 between 1 and a given number, inclusive

DATA
input int: 5
series array: [1, 2, 3, 4, 5]
multiples array: [3, 5]
sum int: 8

ALGO
generate series form 1 to input
filter out multiples of 3 and 5
reduce multiples to sum
return sum
*/

function multisum(num) {
  series = [];

  for (let i = 1; i <= num; i++) {
    series.push(i);
  }

  let multiples = series.filter(num => {
    return num % 3 === 0 || num % 5 === 0;
  })

  let sum = multiples.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  })

  return sum;
}


console.log(multisum(3) === 3);
console.log(multisum(5) === 8);
console.log(multisum(10) === 33);
console.log(multisum(1000) === 234168);