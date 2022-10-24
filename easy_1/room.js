/*
How Big is the Room
Build a program that asks the user to enter the length and width of a room in meters, 
and then logs the area of the room to the console in both square meters and square feet.

Note: 1 square meter == 10.7639 square feet
*/

let readlineSync = require('readline-sync');

function prompt(msg) {
  console.log('=> ' + msg);
}

prompt('Room Area Calculator');
console.log('--------------------');

prompt('Please enter the length of the room in meters:');
let length = readlineSync.prompt();
length = parseInt(length, 10);

prompt('Please enter the width of the room in meters:');
let width = readlineSync.prompt();
width = parseInt(width, 10);

const areaMeters = length * width;
const areaFeet = 10.7639 * areaMeters;

prompt(`The room is ${areaMeters} meters squared or ${areaFeet} square feet.`);

console.log('Goodbye');