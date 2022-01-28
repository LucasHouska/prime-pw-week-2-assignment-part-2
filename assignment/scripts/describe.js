// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening.
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We make a variable called name and set it Dane as a string
// We then check to see if the name is Mary. The name is Dane, not Mary, so we
// console.log 'How do you do?'
//

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// First we declare a variable named secret, leaving it undefined. We then declare
// another variable called code, which is set to 123. We then check to see if code
//is equal to 123. If it is, the secret is set to super and code is doubled. We then
// check to see if code is greater than 250. If it is, we set secret equal to duper.
//Since code is set to 123, secret is then set to super and code is doubled to 246.
//We then console.log super.

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// We set three variables; isStudent to true, age to 34, and zip to 55407, respectively
// We then check if isStudent is true and if zip is greater than 80000; if both are true,
// we console.log 'You're a student on the West Coast!`.If the above does not pass the
//argument, we check if isStudent false or if age is less than 30; if it passes either,
//we console.log "What are your hobbies?". If the above fails to pass, we check if
//isStudent is true; if it is, we console.log 'Welcome to Prime!'. If all else doesn't
//pass, we console.log 'How about the weather?'

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code.
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2.
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment.
// Should be number++.
number--;

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and
// colorTwo is set to 'red', and mix is set to true. We check if mix is true
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
//FIX-colorOne and colorTwo's values are swapped, the outcome still produces purple,
//but it is not accurate in terms of description.
//Solution, swap the places of 'red' and 'blue'
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

//FIX- missing colorTwo; add colorTwo and set it to purple.
if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4
// -- they are so we console.log 'throw away the food!'

/*
//FIX- const will prevent time from changing. Unless this is intentional, replace
//const with let to allow for new values.
let temp = 40;
const time = 4;

//FIX- instead of && for and, there is || for or. Replace || for && to resolve.
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

//FIX- <= should be >=. As it stands, the conditional is looking for everyone under
//21, as opposed to above 21.
if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/
