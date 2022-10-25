/*
Grade Book
Write a function that determines the mean (average) of the three scores passed to it, and returns the letter associated with that grade.

Numerical score letter grade list:

90 <= score <= 100: 'A'
80 <= score < 90: 'B'
70 <= score < 80: 'C'
60 <= score < 70: 'D'
0 <= score < 60: 'F'
Tested values are all between 0 and 100. There is no need to check for negative values or values greater than 100.

PROBLEM
inputs: 3 ints
outputs: string
requirements: average the input numbers, then return the corresponding letter grade

DATA
grade ints: 50, 50, 50
average int: 50
gradebook hash: {'F': 60}

ALGO
calculate average of grades
iterate through gradebook and return first bracket in which the avg grade fits
*/

function average(grades) {
  return grades.reduce( (accumulator, grade) => {
    return accumulator + grade;
  }) / grades.length;
}

function getGrade(grade1, grade2, grade3) {
  let avg = average([grade1, grade2, grade3]);
  let results = [];

  const GRADES = ['A', 'B', 'C', 'D', 'F'];
  const LEVELS = [100, 90, 80, 70, 60];

  LEVELS.forEach( (level, index) => {
    if (avg < level) {
      results.push(GRADES[index]);
    }
  })

  return results[results.length - 1];
}

console.log(getGrade(50, 50, 50) === 'F');
console.log(getGrade(95, 90, 93) === "A");
console.log(getGrade(50, 50, 95) === "D");
