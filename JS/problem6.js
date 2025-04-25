// Given an array of ingredient stock levels, write pseudocode to identify any low-stock items and alert the baker.

// {name: "flour", qty: 3}, {name: "sugar", qty: 0.5}
// Define a minimum threshold (e.g. 1 cup or 1 unit)
// Loop through each ingredient: If its qty is below the threshold, add its name to a lowStock list.
// After checking all, if lowStock is not empty, print: 'please reorder ... '

// so, i'm looking at the shelves
// i see the ingredients
// i need code to identify any low-stock items and alert the baker to order more

// what does the computer need to know
// what does the computer need to do with that information

// needs to know: what are the ingredients on the shelves, how much of each do we have, how many is supposed to be there to be fully stocked/how many before it is low-stock

// how will a computer be able to tell how much of each ingredient there is?
// you'll have to set it up with how many are supposed to be there,
// you set up a prompt() for it to take in data about how much the user sees, then store that information to be cocmpared to the stocked requirements
// make an alert() if something is below the standards


let meetsRequirements = [3, 0.5, 10]; //flour[3], sugar[0.5], eggs[10]

let checkFlour = prompt('How many cups of flour do we have?'); 
let checkSugar = prompt('How many cups of sugar do we have?');
let checkEggs = prompt('How many eggs do we have?');

let sum = [checkFlour, checkSugar, checkEggs];

console.log(sum); 
    
if(sum[0] < 3) {
    console.log('Re-order Flour');
} else {
    console.log("We're good on Flour");
}

if(sum[1] < 0.5) {
    console.log('Re-order Sugar');
} else {
    console.log("We're good on Sugar");
}

if(sum[2] < 10) {
    console.log('Re-order Eggs');
} else {
    console.log("We're good on Eggs");
}

// it's rediculous how much pseudocode i write... kinda embarassing.
