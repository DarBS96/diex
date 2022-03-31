const favoriteFood = 'pasta'
const favoriteMeal = 'branch'

// Exercise 1
// console.log('I eat ' + favoriteFood + ' at every ' + favoriteMeal)

// Exercise 2
let myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
myWatchedSeriesLength = 1
myWatchedSeriesSentence = 'black mirror'

// console.log('I watched ' + myWatchedSeriesLength + ' series: ' + myWatchedSeriesSentence)

myWatchedSeries.splice(2, 1, 'friends', 'Inventing Anna')

myWatchedSeries.unshift('Peaky Blinders')

myWatchedSeries.splice(1, 1)

// console.log(myWatchedSeries);

// console.log(myWatchedSeries[1].substring(0, 3))

// Exercise 3

let celsiusTemp = 10

let fahrenheitTemp = (celsiusTemp / 5) * 9 + 32

// console.log(celsiusTemp + ' celsius is ' + fahrenheitTemp + ' fahrenheit')

// Exercise 4

let c; // undefined
let a = 34;
let b = 21;

console.log(a + b); //first expression
// Prediction: 55
// Actual: 55

a = 2;

console.log(a + b); //second expression
// Prediction: 23
// Actual: 23

console.log(3 + 4 + '5');
// Prediction: 75
// Actual: 75

// // Exercise 5

typeof(15);
// Prediction: number
// Actual: number

typeof(5.5);
// Prediction: number
// Actual: number

typeof(NaN);
// Prediction: number
// Actual:

typeof("hello");
// Prediction: string
// Actual: string

typeof(true);
// Prediction: boolean
// Actual: boolean

typeof(1 != 2);
// Prediction: boolean
// Actual: boolean

"hamburger" + "s";
// Prediction: string
// Actual: string

"hamburgers" - "s";
// Prediction: string
// Actual: string

"1" + "3";
// Prediction: string
// Actual: string

"1" - "3";
// Prediction: string
// Actual: string

"johnny" + 5;
// Prediction: string
// Actual: string

"johnny" - 5;
// Prediction: number
// Actual: NaN

99 * "hello";
// Prediction: number
// Actual: NaN

1 != 1;
// Prediction: boolean
// Actual: boolean

1 == "1";
// Prediction: boolean
// Actual: boolean

1 === "1";
// Prediction: boolean
// Actual: boolean

// Exercise 6

5 + "34";
// Prediction: 534
// Actual: 534

5 - "4";
// Prediction: 54
// Actual: 1

10 % 5;
// Prediction: 0
// Actual: 0

5 % 10;
// Prediction: 5
// Actual: 5

"Java" + "Script";
// Prediction: javascript
// Actual: javascript

" " + " ";
// Prediction: '  '
// Actual: '  '

" " + 0;
// Prediction: ' 0'
// Actual: ' 0'

true + true;
// Prediction: true
// Actual: 2 (true===1)

true + false
    // Prediction: false
    // Actual: 1 (false===0)

false + true;
// Prediction: false
// Actual: 1

false - true;
// Prediction: false
// Actual: -1

!true;
// Prediction: false
// Actual: false

3 - 4;
// Prediction: -1
// Actual: -1

"Bob" - "bill";
// Prediction: string
// Actual: NaN 

// Exercises XP Gold;

// Exercise 1 : Favorite Color;
let sentence = ["my", "favorite", "color", "is", "blue"];

// console.log(sentence.join())

// // // Exercise 2 : Mixup; Do you think that is shorter
// let str1 = "mix";

// let str2 = "pod";

// let newStr1 = str1.slice(0, str1.length - 1)
// console.log(newStr1)
// let newStr2 = str2.slice(0, str2.length - 1)
// console.log(newStr2)

// let lastChar1 = str1.charAt(str1.length - 1)
// console.log(lastChar1)

// let lastChar2 = str2.charAt(str2.length - 1)
// console.log(lastChar2)

// let newWord = newStr1.concat(lastChar2, ' ') + newStr2.concat(lastChar1)
// console.log(newWord)



// // Exercise 3 : Calculator;

// let num1 = +prompt('Write a number')

// let num2 = +prompt('Write a second number')

// let result = num1 + num2
// console.log(result)

// alert('Your result is: ' + result)

// // Exercises XP Ninja;

// 5 >= 1; // true
// 0 === 1; // false
// 4 <= 1; // false
// 1 != 1; // false
// "A" > "B"; // false
// "B" < "C"; // true
// "a" > "A"; // true
// "b" < "A"; // false

// true === false; // false
// true != true; // false

// // Exercise 2 : Ask For Numbers;

// let userAnswer = prompt('Write a string of numbers separated by commas')

// '1,2'

// let commaPosition = 1

// let num1 = parseInt(userAnswer.slice(0, commaPosition))
// console.log(num1)

// let num2 = parseInt(userAnswer.slice(commaPosition + 1))
// console.log(num2)

// let res = num1 + num2
// console.log(res)