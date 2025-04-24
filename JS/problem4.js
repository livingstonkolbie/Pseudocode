// problem 4
// Given a base recipe for one cake, write pseudocode to scale the ingredient amounts for n cakes.

// for ONE cake: flour: 2 cups, sugar: 1.5 cups, eggs: 3

// so, i know what is needed for one cake...
// make a variable and give it an array that has the ingrdients
// how do i make numbers attached to the ingredients

//maybe i can have the array and for each index i make it = a number
//then i find a way for each individual index to have a number
// then i make it multiply x2 every time the 'n' number goes up

let flour = 2;
let sugar = 1.5;
let eggs = 3;

let cake = [flour, sugar, eggs];

let userInput = prompt("How many cakes do you want to make?");
userInput = Number(userInput);

let scaledAmount = [];

for(i = 0; i < cake.length; i++) {
    scaledAmount[i] = cake[i] * userInput;
}

alert(`Flour(cups), Sugar(cups), Eggs(amount): ${scaledAmount}`);

console.log(`Flour(cups), Sugar(cups), Eggs(amount): ${scaledAmount}`);

