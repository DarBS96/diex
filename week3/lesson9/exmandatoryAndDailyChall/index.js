// Exercises XP;

// Exercise 1 : List Of People;

// remove “Greg” from the people array;
let people = ['Greg', 'Mary', 'Devon', 'James'];
const gregIdx = people.indexOf('Greg');
people.splice(gregIdx, 1);
// console.log(people);

// replace “James” to “Jason”
const jamesIdx = people.indexOf('James');
people.splice(jamesIdx, 1, 'Jason');
// console.log(people)

// add your name to the end of the people array;
people.push('Dar');
// console.log(people)

// console.logs Mary’s index;
// console.log(people.indexOf('Mary'))

// copy of the people array using the slice method;
darIdx = people.indexOf('Dar');
const newArr = people.slice(0, darIdx);
// console.log(newArr)

// index of “Foo”
const foo = people.indexOf('Foo');
// console.log(foo) // -1 There is no foo in the list

// last element of the array;
const last = people.length - 1;
// console.log(people)
// console.log(people[last])

// Part II - Loops;

// console.log each person;

for (let i = 0; i < people.length; i++) {
    // console.log(people[i])
}

// exit the loop after you console.log “Jason;

// opt1
const jasonIdx = people.indexOf('Jason');
// console.log(jasonIdx)
for (let i = 0; i <= jasonIdx; i++) {
    // console.log(people[i])
}

// opt 2
for (let i = 0; i < people.length; i++) {
    if (i > jasonIdx) break;
    // console.log(people[i])
}

// Exercise 2 : Your Favorite Colors;

// 1:
let colors = ['yellow', 'pink', 'white', 'black'];

// 2:
for (let i = 0; i < colors.length; i++) {
    // console.log(`My #${i} choice is ${colors[i]}`)
}

// bonus: Didn't understand the quest

// Exercise 3 : Repeat The Question;

// 1:

// let num = prompt('Write a number')
// while (num < 10) {
//     num = prompt('Write a number')
// }

// Exercise 4 : Building Management;

// // 1:
let building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent: {
        sarah: [3, 990],
        dan: [4, 1000],
        david: [1, 500],
    },
};

// 2:
// console.log(building.numberOfFloors)

// 3:
// console.log(building.numberOfAptByFloor.firstFloor + building.numberOfAptByFloor.thirdFloor)

// 4:
const secondTenant = building.nameOfTenants[1];
// console.log(secondTenant)

// console.log(building.numberOfRoomsAndRent.dan[0]) // Is that suppose to be dynamic or it OK that way?

// 5:
const sarahRent = building.numberOfRoomsAndRent.sarah[1];
// console.log(sarahRent)

const davidRent = building.numberOfRoomsAndRent.david[1];
// console.log(davidRent)

let danRent = building.numberOfRoomsAndRent.dan[1];
// console.log(danRent)

if (sarahRent + davidRent > danRent) {
    const remainder = 1200 - danRent;
    // console.log(remainder)
    danRent += remainder;
    // console.log(danRent)
}

// Exercise 5 : Family;

// 1:
const family = {
    mom: 'Hadas',
    father: 'Tsafrir',
    husband: 'Amit',
    sister: 'Matan'
};

// 2:
for (let name in family) {
    // console.log(name)
}

// 3:
for (let name in family) {
    // console.log(family[name]);
}

// Exercise 6;

let details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
};

let sentence = '';

for (let [key, value] of Object.entries(details)) {
    sentence += `${key} ${value} ${''}`;
}
// console.log(sentence)

// Exercise 7 : Secret Group;

// 1:
let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
let sortedNames = names.sort();
let str = '';

for (let i = 0; i < sortedNames.length; i++) {
    let firstChar = sortedNames[i].at(0);
    // console.log(firstChar)
    str += firstChar;
}
// console.log(str)

// Exercises XP Gold

// Exercise 1 : Divisible By Three
let numbers = [123, 8409, 100053, 333333333, 7];

numbers.forEach((num) => {
    // console.log(num)
    if (num % 3 === 0) {
        // console.log('true');
    } else {
        // console.log('false');
    }
});

// Exercise 2 : Attendance

// 1: 
let guestList = {
    randy: "Germany",
    karla: "France",
    wendy: "Japan",
    norman: "England",
    sam: "Argentina"
};
// let student = prompt('What is your name?');

if (Object.keys(guestList).includes(student)) {
    console.log(`Hi! I'm ${student}, and I'm from ${guestList[student]}.`);
} else {
    console.log("Hi! I'm a guest.");
}

// Exercise 3 : Playing With Numbers

// 1:
let ages = [20, 5, 12, 43, 98, 55];

let sum = 0;
for (let i = 0; i < ages.length; i++) {
    let age = ages[i];
    sum += age;
}
// console.log(sum);

// 2:
let highestAge = 0;
for (let i = 0; i < ages.length; i++) {
    let age = ages[i];
    if (age > highestAge) {
        highestAge = age;
    }
}
// console.log(highestAge);

// Exercises XP Ninja

// Exercise 1 : Checking The BMI

// 1:
const dar = {
    fullName: 'Dar',
    mass: 55,
    height: 1.64,
    BMI: function() {
        return this.mass / (this.height * this.height);
    }
};

const amit = {
    fullName: 'Amit',
    mass: 80,
    height: 1.76,
    BMI: function() {
        return this.mass / (this.height * this.height);
    }
};
// 2:

const largestBmi = (per1, per2) => {
    if (per1.BMI() > per2.BMI()) {
        console.log(`${per1.fullName} has the highest BMI: ${per1.BMI()}`);
    } else {
        console.log(`${per2.fullName} has the highest BMI: ${per2.BMI()}`);
    }
};

// largestBmi(dar, amit)

// Exercise 2 : Grade Average

// 1:

const gradesList = [23, 90, 100, 56, 87, 46];
let sumAverage = 0;
const findAvg = (grades) => {
    grades.forEach((grade) => {
        sumAverage += grade;
    });
    const average = sumAverage / grades.length;
    console.log(average);

    if (average > 65) {
        console.log('Good job passed the test!');
    } else {
        console.log('Sorry failed must repeat the course :/');
    }
};
// findAvg(gradesList);

// Daily Challenge: Stars;

// 1:
let string = '';
const star = '*';
for (let i = 0; i < 6; i++) {
    string += star;
    // console.log(string);
}

// 2:  What do you think about that solution?
for (let i = 0; i < 1; i++) {
    // console.log('this is i:', i)
    string = star;
    // console.log(string)
    for (let j = 0; j < 6; j++) {
        string += star;
        // console.log('this is j:', j)
        // console.log(string)
    }
}