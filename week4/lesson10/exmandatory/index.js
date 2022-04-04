// Exercises XP;

// Exercise 1 : Information;

// Part I
function infoAboutMe() {
    console.log('Hello my name is Dar Ben Shitrit and I think food it is the best gift in the world');
}

// infoAboutMe()

// Part II
function infoAboutPerson(personName, personAge, personFavoriteColor) {
    console.log(`your name is ${personName} you are ${personAge} years old and your favorite color is ${personFavoriteColor} `);
};

// infoAboutPerson("David", 45, "blue");
// infoAboutPerson("Josh", 12, "yellow");

// Exercise 2 : Tips

function calculateTip() {
    let bill = +prompt('Hey John what is the amount of the bill?');
    if (bill < 50) {
        console.log(`Your bill is :${bill} and the tip is ${bill * 0.2} `);
    } else if (bill > 50 && bill < 200) {
        console.log(`Your bill is :${bill} and the tip is ${bill * 0.15} `);
    } else {
        console.log(`Your bill is :${bill} and the tip is ${bill * 0.1} `);
    }
};
// calculateTip();

// Exercise 3 : Find The Numbers Divisible By 23;
let outcome = [];
let sum = 0;

function isDivisible() {
    for (let i = 0; i < 500; i++) {
        if (i % 23 === 0) {
            outcome.push(i);
            sum += i;
        }
    }
    console.log(`Outcome: ${outcome}`);
    console.log(`Total: ${sum}`);

};

// Bonus

function isDivisible(divisor) {
    for (let i = 0; i < 500; i++) {
        if (i % divisor === 0) {
            outcome.push(i);
            sum += i;
        }
    }
    console.log(`Outcome all the numbers divisible by ${divisor}:  ${outcome}`);
    console.log(`Total: ${sum}`);

};
// isDivisible(3);
// isDivisible(45);

// Exercise 4 : Shopping List;

let stock = {
    "banana": 6,
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry": 1
};

let prices = {
    "banana": 4,
    "apple": 2,
    "pear": 1,
    "orange": 1.5,
    "blueberry": 10
};

const shoppingList = ['banana', 'orange', 'apple'];
let price = 0;

function myBill() {
    const keys = Object.keys(stock);
    for (fruit of shoppingList) {
        if (keys.includes(fruit) && stock[fruit] !== 0) {
            price += prices[fruit];
        }
        //Bonus
        if (keys.includes(fruit)) {
            console.log(stock[fruit] += 1);
        }
    }
    console.log(`Your total amount for your shopping is: ${price}`);
}
// myBill()

// Exercise 5 : What’s In My Wallet ?;
let sum2 = 0;
const changeEnough = (itemPrice, amountOfChange) => {
    amountOfChange[0] *= 0.25;
    amountOfChange[1] *= 0.10;
    amountOfChange[2] *= 0.05;
    amountOfChange[3] *= 0.01;
    for (coin of amountOfChange) {
        sum2 += coin;
    }

    if (sum2 >= itemPrice) return true;
    else return false;


};
// const res1 = changeEnough(14.11, [2, 100, 0, 0]);
// console.log(res1)
// const res2 = changeEnough(0.75, [0, 0, 20, 5]);
// console.log(res2);


// Exercise 6 : Vacations Costs;

// 1:
function hotelCost() {
    let nightsNumber = +prompt('How many nights would you like to stay in the hotel?');
    if (!nightsNumber || isNaN(nightsNumber)) {
        nightsNumber = +prompt('Sorry not a number please answer again: How many nights would you like to stay in the hotel?');
    }
    return nightsNumber * 140;
}

// const res3 = hotelCost();
// console.log(res3);

// 2:
function planeRideCost() {
    let price;
    let destination = prompt('What is your destination?');
    if (!destination || !isNaN(destination)) {
        destination = prompt('What is your destination?');
    }

    if (destination === 'London') {
        price = 183;
    } else if (destination === 'Paris') {
        price = 220;
    } else {
        price = 300;
    }

    return price;
}

// const res4 = planeRideCost();
// console.log(` Price destination: ${res4}$`);

function rentalCarCost() {
    rentCost = 40;
    let rentCar;
    rentCar = +prompt('How many days would you love to rent a car?');
    if (!rentCar || isNaN(rentCar)) {
        rentCar = +prompt('How many days would you love to rent a car?');
    }
    if (rentCar > 10) {
        rentCost = rentCost * 0.95;
    }
    return rentCar * rentCost;
}

// const res5 = rentalCarCost();
// console.log(` Total price for all days: ${res5}$`);

function totalVacationCost() {
    console.log(`The car cost: $${rentalCarCost()
        }, the hotel cost: $${hotelCost()}, the plane tickets cost: $${planeRideCost()}`);
};
// totalVacationCost();

// Exercises XP Ninja;

// Exercise 1: Random Number;

const randomNum = () => {
    let arr = [];
    let randomNum = Math.floor(Math.random() * 100) + 1;

    for (let i = 0; i < randomNum; i++)
        if (i % 2 !== 0) {
            arr.push(i);
        }
    console.log(`All the even nums between random number: ${randomNum} are: ${arr}`);
};
// randomNum();

// Exercise 2: Capitalized Letters;

const capitalize = (str) => {
    const arr = [];
    let newEvenSentence = '';
    let newOddSentence = '';
    for (let i = 0; i < str.length; i++) {
        if (i % 2 === 0) {
            let letter = str.at(i).toUpperCase();
            newEvenSentence += letter;
        } else {
            newEvenSentence += str.at(i);
        }
    }
    for (let i = 0; i < str.length; i++) {
        if (i % 2 !== 0) {
            let letter = str.at(i).toUpperCase();
            newOddSentence += letter;
        } else {
            newOddSentence += str.at(i);
        }
    }
    arr.push(newEvenSentence, newOddSentence);
    return arr;
};

// const res = capitalize("abcdef");
// console.log(res)

// Exercise 3 : Is Palindrome ?;

const isPalindrome = (str) => {
    // split string to array
    let splitStr = str.split('');
    console.log(splitStr);
    // create new reverse arr based on splitStr
    let reverseStr = splitStr.reverse();
    console.log(reverseStr)
        // join reverseStr to one word
    let joinStr = reverseStr.join('')
    console.log(joinStr)
        // check if str and joinStr are equal
    return str === joinStr
};
// console.log(isPalindrome('redivider'));

// Exercise 4 : Biggest Number;

let highestNum = 0;

function biggestNumberInArray(arrayNumber) {
    arrayNumber.forEach(num => {
        if (num > highestNum) {
            highestNum = num;
        }

    });
    return highestNum;
};

// console.log(biggestNumberInArray([-1, 0, 3, 100, 99, 2, 99]));
// console.log(biggestNumberInArray(['a', 3, 4, 2]));
// console.log(biggestNumberInArray([]));

// Exercise 5: Unique Elements;

const uniqueArr = (arr) => {
    const newArr = arr.filter((num, idx, arr) => {
        console.log(arr.indexOf(num));
        console.log(idx);
        return arr.indexOf(num) === idx;
    });
    return newArr;
};

// console.log(uniqueArr([1, 2, 3, 3, 3, 3, 4, 5]));