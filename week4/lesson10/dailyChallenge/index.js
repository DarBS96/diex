// Daily Challenge: Words In The Stars;

// prompt - hate it!!!
let sentence = prompt('Write several words with commas between them');
// split
const arr = sentence.split(',');

const star = '*';

let longestWord = '';
// create first line


for (let i = 0; i < arr.length; i++) {

    if (arr[i].length > longestWord.length) {
        // longest identifier
        longestWord = arr[i];
        star.repeat(longestWord.length + 2);
    }

    //create all the lines
    console.log(`* ${longestWord} *`);
}
// create last line
let repeat = star.repeat(longestWord.length + 2);

console.log(`*${repeat}*`);