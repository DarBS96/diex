// Exercise 1 : Play A Guessing Game;
let userNumber;
let i = 0;
const test = (userNumber, computerNumber) => {
    console.log(userNumber, computerNumber);
    if (userNumber === computerNumber) {
        alert('Winner!');
        playTheGame();
    } else if (userNumber > computerNumber) {
        alert('Your number is bigger then the computer’s, guess again');
        userNumber = prompt('Ask for another number');
        i++;
        guessAgain(userNumber);
    } else if (userNumber < computerNumber) {
        alert('Your number is lower then the computer’s, guess again');
        userNumber = prompt('Ask for another number');
        i++;
        guessAgain(userNumber);
    }
};
// const isValidNum = (number) => {
//     console.log(number);
//     if (isNaN(number)) {
//         alert('Sorry Not a number, Goodbye');
//     } else if (number < 1 || number > 10) {
//         alert('Sorry it’s not a good number, Goodbye');
//     } else {
//         let computerNumber = Math.floor(Math.random() * 10 + 1);
//         // console.log(computerNumber);
//         test(number, computerNumber);
//     }
// };

//Bonus
const isValidNum = (number) => {
    console.log(isNaN(number));
    while (isNaN(number)) {
        {
            userNumber = prompt('Enter a number between 0 and 10');
            guessAgain(userNumber);
        }
    }
    if (number < 1 || number > 10) {
        alert('Sorry it’s not a good number, Goodbye');
    } else {
        let computerNumber = Math.floor(Math.random() * 10 + 1);
        // console.log(computerNumber);
        test(number, computerNumber);
    }
};

const guessAgain = (number) => {
    console.log(`i is: ${i}`);
    while (i < 2) {
        isValidNum(number);
        i++;
    }
    if (i === 2) {
        alert('out of chances');
        playTheGame();
    }
};

const playTheGame = () => {
    let isStart = confirm('Do you want to start the game?');
    if (isStart) {
        userNumber = +prompt('Enter a number between 0 and 10');
        console.log(userNumber);
        isValidNum(userNumber);
    } else {
        alert('No problem goodbye');
    }
};

playTheGame();