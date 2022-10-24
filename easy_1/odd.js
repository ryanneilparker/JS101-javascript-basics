/* Odd Numbers
Log all odd numbers from 1 to 99, inclusive, to the console, with each number on a separate line.

PROBLEM
inputs: none
ouputs: print all odd nums from 1..99
req: inclusive
*/

function printNums() {
  for(let i = 1; i <= 99; i += 2) {
    console.log(i);
  }
}

printNums();
