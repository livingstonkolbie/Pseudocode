//problem 3

// Create pseudocode that converts temperature from Celsius to Fahrenheit.

// store the number the user enters for C with prompt()
// change that string to a number - use typeof the check
// i need the number i stored to be entered into a calculation to covert it to fahrenheit
// what tool do i need to use? 
// i need the celsius to fahrenheit formula and put the stored number in the spot of the celsius
// then i need that formulas answer to be stored in fahrenheit variable
// then alert(); the fahrenheit answer to the user 

let userNumber = prompt("Enter the number you want converted into Celsius");
userNumber = Number(userNumber);

// (0°C × 9/5) + 32 = 32°F

let fahrenheit = (userNumber * (9/5)) + 32;
alert(`${userNumber}°C converts to ${fahrenheit}°F `);
console.log(`The user choses ${userNumber}°C, and that converts to ${fahrenheit}°F`);
