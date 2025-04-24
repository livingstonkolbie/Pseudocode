// Problem 1
console.log('Problem 1');

// Outline the steps to prompt the user for two numbers, add them, and display the result.

// user goes to webpage
// promt() comes up with 'Enter the first number you want to add'
// store that number in a variable 'numOne'
// promt() comes up with 'Enter the second number you want to add'
// store that number in numTwo

// now i have both numbers
// what javascript tool do i use to add them together and display in alert() for the user ?
// i would just alert(`Your two numbers added together makes ${numone + numTwo}`);

let numOne = prompt("Enter your first number");

let numTwo = prompt("Enter your second number to be added");

numOne = Number(numOne);
numTwo = Number(numTwo);

let sum = numOne + numTwo;

alert(`Your two numbers added together make ${sum}`);
console.log(`The user's answer is ${sum}`);


// Problem 2

// gonna move to making a new js file for each problem