// Exercise 1 : Scope;

// // #1
// function q1() {
//     var a = 5;
//     if (a > 1) {
//         a = 3;
//     }
//     alert(a);
// }

// // run in the console:
// q1(); // 3

// //#2
// var a = 0;

// function q2() {
//     a = 5;
// }

// function q22() {
//     alert(a);
// }

// // run in the console:
// q22(); // 0
// q2(); // 5
// q22(); // 5

// //#3
// function q3() {
//     window.a = "hello";
// }


// function q32() {
//     alert(a);
// }

// // run in the console:
// q3(); //  'hello'
// q32(); // 'hello'

// //#4
// var a = 1;

// function q4() {
//     var a = "test";
//     alert(a);
// }


// // run in the console:
// q4(); // 'test'

// //#5
// var a = 2;
// if (true) {
//     var a = 5;
//     alert(a);
// }
// alert(a); // 5

// Exercise 2 : Ternary Operator;

// function winBattle() {
//     return true;
// }

const winBattle = () => true;

let experiencePoints = winBattle() ? 10 : 1;


// Exercise 3 : Is It A String ?

const isString = (statement) => {
    return typeof(statement) === 'string' ? true : false;
};

// console.log(isString('hello'));
// //true
// console.log(isString([1, 2, 4, 0]));
// //false

// Exercise 4 : Colors;

let colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

colors.forEach((color, idx) => {
    // console.log(`${idx + 1}# choise is ${color}`);
});

const isExisting = colors.some(color => color === 'Violet');
// console.log(isExisting ? 'Yes' : 'No');

// Exercise 5 : Colors #2;

let color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
let ordinals = ["th", "st", "nd", "rd"];

// color.forEach((color, idx) => {
//     if (idx < 3) {
//         console.log(`${idx + 1}st choice is ${color}`)
//     } else {
//         console.log(`${idx}th choice is ${color}`)
//     }
// });
// Exercise 6 : Bank Details;

let bankAmount = 10000;

let details = [200, -100, +146, +167, -2900];

// console.log(bankAmount + (details.map(num => num * 0.83)
//     .reduce((previousNum, currentNum) => previousNum + currentNum)))

// Exercises XP Ninja;

let menu = [{
        type: "starter",
        name: "Houmous with Pita"
    },
    {
        type: "starter",
        name: "Vegetable Soup with Houmous peas"
    },
    {
        type: "dessert",
        name: "Chocolate Cake"
    },
    { type: 'main', name: ' bolognese' }
];

// 1:
menu.some(element => element.type === 'dessert');

// 2:
menu.every(element => element.type === 'starter');

// 3:
menu.some(element => element.type === 'main') ? null : menu.push({ type: 'main', name: ' bolognese' });

let vegetarian = ["vegetable", "houmous", "eggs", "vanilla", "potatoes"];
menu.forEach((item) => {
    item.name.split(" ").forEach((nameItem) => {
        vegetarian.includes(nameItem.toLowerCase()) ? item.vegetarian = true : item.vegetarian = false;
    });
});

// Exercise 2 : Chop Into Chunks;

const stringChop = (str, num) => {
    const chunks = new Array(str.length / num);
    console.log(chunks);
    for (let i = 0, j = 0; i < chunks.length; i++, j += num) {
        console.log(j);
        console.log(chunks[i] = str.substring(j, j + 2));
    }
    console.log(chunks);
};
// stringChop('developers', 2);

// Exercise 3 : You Said String ?;

const searchWord = (str, searchingWord) => {
    let i = 0;
    let arrStr = str.split(' ');
    arrStr.forEach((word) => {
        word === searchingWord ? i++ : i;
    });
    console.log(`${searchingWord} was found ${i} times`);
};

// searchWord('The quick brown fox', 'fox');

// Exercise 4 : Reverse Array;

const reverseArray = (arr) => {
    for (let i = 0, j = arr.length; i < arr.length; i++, j--) {
        arr[i] = j;
        arr[j] = i;
    }
    arr.pop();
    return arr;
};

// const res = reverseArray([1, 2, 3, 4, 5]);
// console.log(res);