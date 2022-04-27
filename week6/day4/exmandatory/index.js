"use strict";

// Exercises XP;

// Exercise 1 : Find The Sum;

const sum = (num1, num2) => num1 + num2;

// console.log(sum(1, 2))

// Exercise 2 : Kg And Grams;

// 1:
function calcGrams(weight) {
    return weight * 1000;
}
// console.log(calcGrams(50))

// 2:
// const calcGrams = (weight) => {
//         return weight * 1000;
//     }
// console.log(calcGrams(50))

// 3:

// 4:
// const calcGrams = weight => weight * 1000;

// Exercise 3 : Fortune Teller

((childNum, parentName, geogLocation, jobTitle) => {
    document.body.innerHTML = `<h1>You will be a ${jobTitle} in ${geogLocation}, and married to ${parentName
        } with ${childNum} kids."</h1>`;
}); //(4, 'Ilay', 'Island', 'Developer');


// Exercise 4 : Welcome
// const nav = document.querySelector('nav');
// ((name) => {
//     const div = document.createElement('div');
//     div.style.height = '60px';
//     const img = document.createElement('img');
//     img.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Elton_John_2011_Shankbone_2.JPG/1200px-Elton_John_2011_Shankbone_2.JPG');
//     img.style.width = '40px';
//     img.style.height = '40px';
//     img.style.marginLeft = '30px';
//     const p = document.createElement('p');
//     p.innerHTML = `Welcome ${name}`;
//     p.style.display = 'inline';
//     div.append(p);
//     div.append(img);
//     nav.append(div);
// })('John');

// Exercise 5: Juice Bar
// Part I:
(function makeJuice(size) {
    const ingredients = [];

    function addIngredients(ing1, ing2, ing3) {
        ingredients.push(ing1, ing2, ing3);
    }
    addIngredients('Banana', 'Apple', 'Mango');
    addIngredients('Watermelon', 'Pineapple', 'Strawberry');

    function displayJuice() {
        let str = '';
        ingredients.forEach((ingredient) => {
            str += `${ingredient} `;
            document.body.innerHTML = `<h1>The client wants a ${size} juice,
             containing ${str}"</h1>`;
        });
    };
    displayJuice();

}); //('M');



// Exercises XP Ninja;
// Exercise 1 : Merge Words;

// 1:
function mergeWord(str1 = 'There ') {
    return function(str2 = 'is ') {
        return function(str3 = 'no ') {
            return function(str4 = 'spoon') {
                return function(str5 = '') {
                    return str1 + str2 + str3 + str4 + str5
                };
            };
        };
    };
}

// 3:
function mergeWords(string) {
    return function(nextString) {
        if (nextString === undefined) {
            return string;
        } else {
            return string + ' ' + nextString;
        }
    };
};

console.log(mergeWords('Hi')("I'm Dar")); // Hi I'm Dar
console.log(mergeWords('Hi')()); // Hi