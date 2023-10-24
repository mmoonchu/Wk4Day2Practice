// A. Q + A
/*
1. How do we assign a value to a variable?
    With the assignment operator (=)
2. How do we change the value of a variable?
    With the assignment operator (=)
3. How do we assign an existing variable to a new variable?
    With the assignment operator (=) (newVar = existingVar)
4. Remind me, what are declare, assign, and define?
    "declare" 
5. What is pseudocoding and why should you do it?
    Pseudocoding is writing out a skeleton of the code that lays out the structure of the functionality of the code without getting bogged down in any particular language's syntax. It is good practice because it gives a guideline for what code to write at any step of the way, and ensures the code to be written works cohesively.
6. What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
    70-90% of time should be spent thinking about how to solve the problem, and the rest of the time typing in code to solve it.
*/

/////////////////////////////////////////////////////////////////
// B. Strings
// 1.
let firstVariable;
// 2.
firstVariable = 'Hello World';
// 3.
firstVariable = 3;
// 4.
let secondVariable = firstVariable;
// 5.
secondVariable = 'Happy Halloween!';
// 6.
console.log(firstVariable); // 3
// 7.
let yourName = 'Moon';
console.log("Hello, my name is " + yourName);

/////////////////////////////////////////////////////////////////
// C. Booleans
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a < b);
console.log(c > d);
console.log('Name' === 'Name');
// FOR THE NEXT TWO, USE ONLY && OR ||
console.log(true || false);
console.log(false && false && false && false && false || true);
console.log(false === false)
console.log(e === 'Kevin');
console.log(a + b === c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
console.log(a * a === d); // note: the answer is a simple arithmetic equation, not something "weird"
console.log(48 == '48');

/////////////////////////////////////////////////////////////////
// D. The farm
// 1.
let animal = 'cow';

// 2.
if (animal === 'cow') console.log('mooooo');

// 3.
console.log(sound = (animal === 'cow') ? 'mooooo' : 'Hey! You\'re not a cow.');

// 4. 
// N/A

/////////////////////////////////////////////////////////////////
// E. Driver's Ed