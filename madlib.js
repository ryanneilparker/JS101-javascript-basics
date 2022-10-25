/*
Madlibs
Madlibs is a simple game where you create a story template with "blanks" for words. 
You, or another player, then construct a list of words and place them into the story, creating an often silly or funny story as a result.

Create a simple madlib program that prompts for a noun, a verb, an adverb, and an adjective, and injects them into a story that you create.
*/

const readline = require('readline-sync');

function prompt(msg) {
  console.log('=> ' + msg);
  return readline.prompt()
}

let words = ['noun', 'verb', 'adverb', 'adjective'];
let ans = [];

words.forEach(word => {
  ans.push(prompt('Please enter a ' + word + ':'));
})

console.log(`Do you ${ans[1]} your ${ans[3]} ${ans[0]} ${ans[2]}? That's hilarious!`);
