// problem 5

// Write pseudocode to plan a bake schedule for a given number of batches, including mixing and baking steps.


// we're going to work on a batch of cookies (12 cookies - idk if ill need that information later)
// need to make up how long it takes to mix the ingredients for a batch 
// lets say: for one batch - 5 minutes to mix, 30 minutes to pre-heat the over and bake (the first time) - then just 10 minutes to bake every other time, let cool for 15 minutes

// it takes 50 minutes to get through the first batch
// itll take 25 minutes for every other batch
// i'll have to multiply that time by the userInput to get the time it'll take to make as many batches as they want
// i'll have to make a for loop, then conditional statements that says, on the first round calculate all this, then for the next round, only calculate the baking time and cooling time


let mixTime = 5;
let intialOven = 30;
let heatedOven = 10;
let coolDown = 15;

let firstBatch = mixTime + intialOven + coolDown;
let nextBatches = heatedOven + coolDown;

// console.log(firstBatch);
// console.log(nextBatches);


let userBatch = prompt('How many batches do you want to bake?');
userBatch = Number(userBatch);

let timeNeeded = userBatch * nextBatches + (mixTime +intialOven);

if(userBatch === 1) {
    alert(`For one batch of cookies, it'll take ${firstBatch} minutes to complete.`);
} else if(userBatch > 1) {
    alert(`For ${userBatch} batches of cookies, it'll take ${timeNeeded} minutes to complete.`);
}


