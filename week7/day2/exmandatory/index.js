// Exercises XP;


// // Exercise 1 : Analyzing;
// // ------1------;
// const fruits = ["apple", "orange"];
// const vegetables = ["carrot", "potato"];

// const result = ['bread', ...vegetables, 'chicken', ...fruits];
// console.log(result); // ['bread', 'carrot', 'potato' 'chicken', 'apple', 'orange']

// // ------2------
// const country = "USA";
// console.log([...country]); // My guess: ['USA'] , actual: ['U', 'S', 'A'] , IMO: equal to split() method

// // ------Bonus------
// let newArray = [...[, , ]];
// console.log(newArray); //My guess: [[,,]] , actual: [undefined, undefined]

// Exercise 2 : Employees;

let users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
    { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
    { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
    { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
    { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
    { firstName: 'Wes', lastName: 'Reid', role: 'Instructor' },
    { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor' }
];

// 1:
// console.log(users.map(user => `Hello ${user.firstName}`))

// 2:

// console.log(users.filter(user => user.role === 'Full Stack Resident'))

// Bonus:
users.filter(user => user.role === 'Full Stack Resident').map(FullStackResident => FullStackResident.lastName)


// Exercise 3 : Star Wars;

let epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

// console.log(epic.reduce((total, nextVal) => total + " " + nextVal))

// Exercise 4 : Employees #2;

let students = [{ name: "Ray", course: "Computer Science", isPassed: true },
    { name: "Liam", course: "Computer Science", isPassed: false },
    { name: "Jenner", course: "Information Technology", isPassed: true },
    { name: "Marco", course: "Robotics", isPassed: true },
    { name: "Kimberly", course: "Artificial Intelligence", isPassed: false },
    { name: "Jamie", course: "Big Data", isPassed: false }
];

// 1:
// console.log(students.filter(student => student.isPassed === true))

// Bonus:
students.forEach(student => {
    // if (student.isPassed) console.log(`Good job ${student.name}, you passed the course in Information Technology`)
})

// Exercises XP Ninja;

// Exercise 1 : Dog Competition;
const data = [{
        name: 'Butters',
        age: 3,
        type: 'dog'
    },
    {
        name: 'Cuty',
        age: 5,
        type: 'rabbit'
    },
    {
        name: 'Lizzy',
        age: 6,
        type: 'dog'
    },
    {
        name: 'Red',
        age: 1,
        type: 'cat'
    },
    {
        name: 'Joey',
        age: 3,
        type: 'dog'
    },
    {
        name: 'Rex',
        age: 10,
        type: 'dog'
    },
];

// 1:
let sum = 0
for (let i = 0; i < data.length; i++) {
    sum += data[i].age * 7
}
// console.log(sum)

const reduceSum = data.reduce((sum, dog) => sum + (dog.age * 7), 0)
    // console.log(reduceSum)

// Exercise 2 : Email;
const userEmail3 = ' cannotfillemailformcorrectly@gmail.com ';

// // opt 1:
// console.log(userEmail3.trim())

// // opt 2:
// console.log(userEmail3.replaceAll(' ', ''))

// // opt 3:
// console.log([...userEmail3].filter(char => char !== ' ').join(''))

// Exercise 3 : Employees #3;

let users2 = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
    { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
    { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
    { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
    { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
    { firstName: 'Wes', lastName: 'Reid', role: 'Instructor' },
    { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor' }
];

let fullName = users2.map(user => {
    return {
        [`${user.firstName} ${user.lastName}`]: user.role
    };
})

// Exercise 4 : Array To Object;

const letters = ['x', 'y', 'z', 'z'];
const newArr = [0, 0, 0]
const obj = {}
for (let i = 0; i < letters.length; i++) {
    let idx = letters.indexOf(letters[i])
    newArr[idx]++;
}
newArr.forEach((num, idx) => {
    obj[letters[idx]] = num
})
console.log(obj)

let arr = ["a", "b", 'c', 'c', 'c']

// Professional solution
let reducedInObj = arr.reduce((acc, currentVal) => {
    return {...acc, [currentVal]: !!acc[currentVal] ? acc[currentVal] + 1 : 1 }; // !! -  it is a boolean operator that check if the value exists
}, {})

// Sababa Solution
let reduceObj = letters.reduce((total, nextVal) => {
    if (total[nextVal] === undefined) {
        total[nextVal] = 1;

    } else {
        total[nextVal]++;
    }
    return total
}, {})