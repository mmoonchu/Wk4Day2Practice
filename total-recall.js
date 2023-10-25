/////////////////////////////////////////////////////////////////
/////////////////// I. Variables & Datatypes ////////////////////
/////////////////////////////////////////////////////////////////
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
if (animal === 'cow')
    console.log('mooooo');
// 3.
let sound;
console.log(sound = (animal === 'cow') ? 'mooooo' : 'Hey! You\'re not a cow.');
// 4. 
// N/A

/////////////////////////////////////////////////////////////////
// E. Driver's Ed
// 1.
let personAge = 15;
// 2.
let message;
console.log(message = (personAge >= 16) ? 'Here are the keys!' : 'Sorry, you\'re too young.');

/////////////////////////////////////////////////////////////////
/////////////////////////// II. Loops ///////////////////////////
/////////////////////////////////////////////////////////////////
// A. The basics
// 1.
for (i = 0; i <= 10; i++)
    console.log(i);
// 2.
for (i = 10; i <= 400; i++)
console.log(i);
// 3.
// for (i = 12; i <= 4000; i += 3)
// console.log(i);

// B. Get even
// 1.
for (i = 0; i <= 100; i++)
    console.log(i);
// 2.
for (i = 0; i <= 100; i++) {
    if (i % 2 === 0) 
    console.log(i + ' <-- is an even number');
else
console.log(`${i}`);
}

// C. Give me Five
// 1.
for (i = 0; i <= 100; i++) {
    if (i === 0)
        console.log(`I found a ${i}.`);
    else if (i % 5 === 0 && i % 3 === 0)
        console.log(`I found a ${i}. High five! Three is a crowd`);
    else if (i % 5 === 0)
        console.log(`I found a ${i}. High five!`);
    else if (i % 3 === 0)
        console.log(`I found a ${i}. Three is a crowd`);
    else   
        console.log(`I found a ${i}.`);
}

// D. Savings account
// 1.
let bank_account = 0; 
for (i = 1; i <= 10; i++) {
    bank_account += i;
}
console.log(bank_account);
// 2.
bank_account = 0; 
for (i = 1; i <= 100; i++) {
    bank_account += i * 2;
}
console.log(bank_account);

/////////////////////////////////////////////////////////////////
/////////////////// III. Arrays & Control flow //////////////////
/////////////////////////////////////////////////////////////////
// A. Talk about it:
/*
1. What are the things in an array called?
    Elements
2. Do Arrays guarantee those things will be in order?
    Arrays guarantee that their elements will be ordered, though it is up to the programmer to determine the order's correctness
3. What real-life thing could you model with an array?    
    List of wedding guests
*/

// B. Easy Does It
// 1.
const quotes = ['Three can keep a secret, if two of them are dead.', 'Tis better to have loved and lost than never to have loved at all.', 'To err is human; to forgive, divine.'];

// C. Accessing elements
const randomThings = [1, 10, "Hello", true];
// 1.
randomThings[0];
// 2.
randomThings[2] = 'World';
// 3.
console.log(randomThings);

// D. Change values
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
// 1.
ourClass[2];
// 2.
ourClass[4];
// 3.
ourClass.push('Cloud City');

// E. Mix It Up
const myArray = [5, 10, 500, 20]
// 1.
myArray.push('Aegon', 21);
// 2.
myArray.shift();
// 3.
myArray.unshift('Bob Marley');
// 4.
myArray.pop();
// 5.
myArray.reverse(); // it mutated (changed properties of) the array; the .reverse() method returns a reference to the original array.


// F. Biggie Smalls
let num1 = 9;
// 1/2.
if (num1 < 100) {
    console.log('little number');
} else {
    console.log('big number');
}

// G. Monkey in the Middle
let num2 = 20;
// 1/2/3.
if (num2 < 5) {
    console.log('little number');
} else if (num2 > 10) {
    console.log('big number');
} else {
    console.log('monkey');
}

// H. What's in Your Closet?
const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "Per Scholas hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];
// 1.
console.log(`Kristyn is rocking that ${kristynsCloset[2]} today!`);
// 2.
kristynsCloset.splice(6, 0, 'raybans');
// 3.
kristynsCloset.splice(5, 1, 'stained knit hat');
// 4.
console.log(thomsCloset[0][0]);
// 5.
console.log(thomsCloset[1][0]);
// 6.
console.log(thomsCloset[2][1]);
// 7.
console.log(`Thom is looking fierce in a ${thomsCloset[0][0]}, ${thomsCloset[1][0]}, and ${thomsCloset[2][1]}!`);
// 8.
thomsCloset[1].splice(2, 1, 'Footie Pajamas');


/////////////////////////////////////////////////////////////////
///////////////////////// IV. Functions /////////////////////////
/////////////////////////////////////////////////////////////////
// A. printGreeting
const printGreeting = function(name) {
    return `Hello there, ${name}!`;
}
console.log(printGreeting("Slimer"));

// B. printCool
const printCool = function(name) {
    return `${name} is cool`;
}
console.log(printCool("Captain Reynolds"));

// C. calculateCube
const calculateCube = function(num) {
    return num*num*num;
}
console.log(calculateCube(5));

// D. isVowel
const isVowel = function(character) {
    character = character.toLowerCase();
    const vowels = ['a', 'e', 'i', 'o', 'u']
    return vowels.includes(character);
}   
console.log(isVowel('b'));

// E. getTwoLengths
const getTwoLengths = function(str1, str2) {
    const stringArray = [];
    stringArray.push(str1.length, str2.length);
    return stringArray;
}
console.log(getTwoLengths('Hank', 'Hippipopalous'));

// F. getMultipleLengths
const getMultipleLengths = function(arrOfStrings) {
    const arrOfLengths = [];
    arrOfStrings.forEach(arrString => {
        arrOfLengths.push(arrString.length);
    }) 
    return arrOfLengths;
}
console.log(getMultipleLengths(['hello', 'what', 'is', 'up', 'dude']));

// G. maxOfThree
const maxOfThree = function(x, y, z) {
    if (x > y) {
        if (x > z)
            return x;
        else return z;
    } else if (y > z)
        return y;
    else return z;
}
console.log(maxOfThree(6, 9, 1));

// H. printLongestWord
const printLongestWord = function(arrOfStrings) {
    return arrOfStrings.reduce((acc, string) => {
        if (acc.length > string.length)
            return acc;
        else return string;
    }, 0);
}
console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));

/////////////////////////////////////////////////////////////////
////////////////////////// V. Objects ///////////////////////////
/////////////////////////////////////////////////////////////////
// A. Make a user object
// 1.
const user = {};
// 2.
user.name = 'Illaoi';
user.email = 'illaoi123@gmail.com';
user.age = 27;
user.purchased = [];

// B. Update the user
// 1.
user.email = 'illaoiNew@gmail.com';
// 2.
user.age++;

// C. Adding keys and values
// 1.
user.location = 'Austin, TX';

// D. Shopaholic!
// 1.
user.purchased.push('carbohydrates');
// 2.
user.purchased.push('peace of mind');
// 3.
user.purchased.push('Merino jodhpurs');
// 4.
console.log(user.purchased[2]);

// E. Object-within-object
// 1.
user.friend = {
    name: "Dennis",
    age: 72,
    location: 'San Antonio, TX',
    purchased: [] 
}
// 2.
console.log(user.friend.name);
// 3.
console.log(user.friend.location);
// 4.
user.friend.age = 55;
// 5.
user.friend.purchased.push('The One Ring');
// 6.
user.friend.purchased.push('A latte');
// 7.
console.log(user.friend.purchased[1]);

// F. Loops
// 1.
user.purchased.forEach(item => {
    console.log(item);
})
// 2.
user.friend.purchased.forEach(item => {
    console.log(item);
})

// G. Functions can operate on objects
// 1.
const updateUser = function() {
    // 2.
    user.age++;
    // 3.
    user.name.toUpperCase();
}
// 2.
const oldAndLoud = function(person) {
    person.age++;
    person.name = person.name.toUpperCase();
}
oldAndLoud(user);
console.log(user);
