// for loop

let coders = ['jim', 'james', 'paul', 'tyrone'];

for (let i = 0; i < coders.length; i++) {
    // let message = coders[i] + ' is a coder!';
    // console.log(message);

    let specific = coders[i];

    if(specific === 'james') {
        console.log('what up');
    }
}


// function

function yo(fName) {
    console.log(`whats up ${fName}`);
}

yo('kolbie');