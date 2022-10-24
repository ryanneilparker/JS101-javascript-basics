/*
Tip Calculator
Create a simple tip calculator. 
The program should prompt for a bill amount and a tip rate. 
The program must compute the tip, and then log both the tip and the total amount of the bill to the console. 
You can ignore input validation and assume that the user will put in numbers.
*/

let readline = require('readline-sync');

function prompt(msg) {
  console.log('=> ' + msg);
}

function collectInput(item) {
  prompt(`Please enter ${item}:`);
  variable = readline.prompt();
  return variable;
}

function calculateTip(bill, rate) {
  const tip = bill * (rate / 100);
  return tip;
}


let bill;
let rate;

bill = collectInput('bill');
rate = collectInput('rate');

const tip = calculateTip(bill, rate);

console.log('The bill is ' + bill + ' and the tip is ' + tip + '.');
