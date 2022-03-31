// Exercise 1: Simple If / Else Statement;
let x = 5;
let y = 2;

if (x > y) {
    console.log('x-', x, 'is the bigger number');
} else {
    console.log('y-', y, 'is the bigger number');
}

// Exercise 2: Chihuahua;

const newDog = 'Chihuahua';

console.log('The number of letters in Chihuahua is:', newDog.length);

console.log(newDog.toUpperCase());
console.log(newDog.toLowerCase());

if (newDog === 'Chihuahua') {
    console.log('I love Chihuahuas, it’s my favorite dog breed');
} else {
    console.log('I dont care, I prefer cats');
}

// Exercise 3: Even Or Odd;
// let num = prompt('Write a number')

// if (num % 2 === 0) {
//     console.log(num, 'is an even number')
// } else {
//     console.log(num, 'is an odd number');
// }

// Exercise 4: Group Chat;

let users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];

if (users.length === 0) {
    console.log('no one is online');
} else if (users.length === 1) {
    console.log(users[0], 'is online');
} else if (users.length === 2) {
    console.log(users[0], 'and', users[1], 'are online');
} else {
    console.log(users[0], users[1], 'and', users.length - 2, 'more are online');
}

// Exercises XP GOLD;

// Exercise 1 : The World Translator;

// let language = prompt('What language do you speak?')

// switch (language.toLowerCase()) {
//     case 'french':
//         console.log('Bonjour');
//         break;
//     case 'english':
//         console.log('Hello');
//         break;
//     case 'hebrew':
//         console.log('Shalom');
//         // expected output: "Mangoes and papayas are $2.79 a pound."
//         break;
//     default:
//         console.log('01110011 01101111 01110010 01110010 01111001');
// }

// Exercise 2 : The Grade Assigner;

// let grade = prompt('What your grade?')

// if (grade > 90) {
//     console.log('A')
// } else if (grade >= 80) {
//     console.log('B')
// } else if (grade >= 70) {
//     console.log('C')
// } else {
//     console.log('D')
// }

// Exercise 3: Verbing;

// let verb = prompt('Write a verb')

// if (verb.length >= 3 && verb.slice(verb.length - 3, verb.length) !== 'ing') {
//     console.log(verb + 'ing')
// } else if (verb.length >= 3 && verb.slice(verb.length - 3, verb.length) === 'ing') {
//     console.log(verb + 'ly');
// } else {
//     console.log(verb)
// }

// Exercises XP Ninja;

// Exercise 1 : Age Difference;

// let person1 = 1000
// let person2 = 2000

// if (person1 < person2 && person1 === person2 / 2) {
//     console.log('Success you are exactly half the age of the older')
// } else if (person2 < person1 && person2 === person1 / 2) {
//     console.log('Success you are exactly half the age of the older')
// } else {
//     console.log('Sorry not true')
// }

// Exercise 2 : Zip Codes;

// let zipCode = prompt('Write your zip code please')

// if (zipCode.length === 5 && zipCode !== ' ' && !isNaN(zipCode)) {
//     console.log('Good! code we can send you letters')
// } else {
//     console.log('Bad! code try again')
// }

// Exercise 3 : Secret Word;

// let word = prompt('Write your zip code please')

//Daily challenge

const sentence = 'This dinner is not so bad';

const wordNot = sentence.slice(sentence.indexOf('not'), sentence.indexOf('bad') + 3);
console.log(wordNot)

const wordBad = sentence.slice(sentence.indexOf('bad'), sentence.indexOf('bad') + 3);
console.log(wordBad)
console.log(sentence.search(wordNot))
console.log(sentence.search(wordBad))

if (sentence.search(wordNot) < sentence.search(wordBad) && sentence.includes('not')) {
    const newSentence = sentence.replace(wordNot, 'good')
    console.log(newSentence)
} else {
    console.log(sentence)
}