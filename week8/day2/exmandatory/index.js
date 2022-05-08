// Exercises XP;

// Exercise 1 : HTML Form;

// 3: The data will appear in the same page by default if we didn't give a different url to send the information.
// We can see the name-value pair in the url

// Exercise 2 : HTML Form #2;

// 3: The same as prior answer with get
// We cannot see the name-value pair in the url. Actually, the req is in the body

// Exercise 3 : JSON Mario;

let marioGame = {
    detail: "An amazing game!",
    characters: {
        mario: {
            description: "Small and jumpy. Likes princesses.",
            height: 10,
            weight: 3,
            speed: 12,
        },
        bowser: {
            description: "Big and green, Hates princesses.",
            height: 16,
            weight: 6,
            speed: 4,
        },
        princessPeach: {
            description: "Beautiful princess.",
            height: 12,
            weight: 2,
            speed: 2,
        }
    },
};

// 1:

// Regular syntax no spaces- hard to read
console.log(JSON.stringify(marioGame))

// pretty syntax with spaces- easy to read
console.log(JSON.stringify(marioGame, null, 2))

// The whole structure and nested objects will be stringified:

// Exercise XP Gold
// Exercise 1 : HTML Form #3


// DailyChallenge

// Daily Challenge: HTML Form;

const form = document.getElementById('secondForm');
const fNameInput = document.getElementById('firstName')
const lNameInput = document.getElementById('lastName')


form.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(JSON.stringify({ firstName: fNameInput.value, lastName: lNameInput.value }, null, 2));
})