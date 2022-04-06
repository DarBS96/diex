let numToBegin = 99;
let takeDown = 0;
let plural;

for (let i = 0; i < numToBegin + takeDown; i++) {
    console.log(`${numToBegin} bottles of beer on the wall`);
    console.log(`${numToBegin
        } bottles of beer`);
    takeDown >= 10 ? plural = 'them' : plural = 'it';
    takeDown++;
    console.log(`Take ${takeDown} down, pass ${plural} around`);
    let bottles = numToBegin -= takeDown;
    if (numToBegin <= 0) {
        console.log('No more bottles of beer on the wall, no more bottles of beer.Go to the store and buy some more, 99 bottles of beer on the wall.');
    } else {
        console.log(`${bottles
            } bottles of beer on the wall`);
    }
}