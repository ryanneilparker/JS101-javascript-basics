/*
Welcome Stranger
Create a function that takes 2 arguments, an array and an object. 
The array will contain 2 or more elements that, when combined with adjoining spaces, will produce a person's name. 
The object will contain two keys, "title" and "occupation", and the appropriate values. 
Your function should return a greeting that uses the person's full name, and mentions the person's title.

PROBLEM
inputs: array, object
outputs: string
requirements: extract name from array and concat, then extract title from object and prepend to names

DATA
names array: ['ryan', 'parker']
details object: {'title': 'Mr', 'occupation': 'engineer'}
fullName string: 'Ryan Parker'
fullNameAndTitle string: 'Mr Ryan Parker'

ALGO
concat extracted values into name
output greeting message
*/

function greetings(names, details) {
  let fullName = names.join(' ');
  let title = details['title'];
  let occupation = details['occupation'];
  return 'Hello, ' + fullName + '! Nice to have a ' + title + ' ' + occupation + ' around.';
}

console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);
// logs Hello, John Q Doe! Nice to have a Master Plumber around.