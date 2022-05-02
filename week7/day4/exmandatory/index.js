// Exercises XP;

// Exercise 1 : Location;
'I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)';

// Exercise 2: Display Student Info;

const displayStudentInfo = (studentObject) => {
    console.log(`Your full name is ${studentObject.first} ${studentObject.last}`)
}

displayStudentInfo({ first: 'Elie', last: 'Schoppik' })

// Exercise 3: User & Id;
const users = { user1: 18273, user2: 92833, user3: 90315 };

const turnObjIntoArr = Object.entries(users)

turnObjIntoArr.map(item => [item[0], item[1] * 2]);

// Exercise 4 : Person Class;

console.log(typeof member); // Object

// Exercise 5 : Dog Class;

// 2 -  the second example

// Exercise 6 : Challenges

//  1:
// [2] === [2]  false- no primitive type it is a different address
// { } === {}; false- no primitive type it is a different address

// 2:

const object1 = { number: 5 };
const object2 = object1; { number: 5; }
const object3 = object2; { number: 5; }
const object4 = { number: 5 };

object1.number = 4;
console.log(object2.number); // { number: 4 } changing the address of the object and not the value (passed by reference)
console.log(object3.number); // { number: 4 } changing the address of the object and not the value (passed by reference)
console.log(object4.number); // { number: 5 } changing the address again

class Animal {
    constructor(name, type, color) {
        this.name = name
        this.type = type
        this.color = color
    }
}

class Mamal extends Animal {
    constructor(name, type, color) {
        super(name, type, color)
    }
    sound() {
        console.log(this.name, this.type, this.color)
    }
}

let cow = new Mamal('Shafan Sela', 'rabbit', 'white')

// Exercises XP Gold

// Exercise 1 : Print Full Name
const printFullName = (studentObj) => {
    const { first, last } = studentObject;
    // console.log(`Your full name is ${first} ${last}`)
}

printFullName({ first: 'Elie', last: 'Schoppik' })

// Exercise 2 : Keys And Values
const keysAndValues = (obj) => {
    let keys = Object.keys(obj)
    let values = Object.values(obj)
    return [keys, values]
}

keysAndValues({ a: 1, b: 2, c: 3 })

// Exercise 3 : Counter Class

console.log(counterOne.count); // 3


// Exercises XP Ninja;

// I'm pink. 🌸;
// I'm a bird. 🦢;