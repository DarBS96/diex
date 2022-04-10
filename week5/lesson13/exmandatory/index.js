// Exercises XP;

// Exercise 1 : Change The Article;

// 1:
console.log(document.querySelector('h1'));

// 2:
const article = document.querySelector('article');
article.removeChild(article.lastElementChild);

// 3:
const h2 = document.querySelector('h2');
h2.addEventListener('click', () => h2.style.backgroundColor = 'red');

// 4:
const h3 = document.querySelector('h3');
h3.addEventListener('click', () => h3.style.display = 'none');

// 5:
const btn = document.querySelector('button');
btn.addEventListener('click', () => document.body.style.fontWeight = 'bold');

// 6: Bonus
randomNum = Math.floor(Math.random() * 100);
const h1 = document.querySelector('h1');
h1.addEventListener('mouseover', () => h1.style.fontSize = `${randomNum}px`);

// 7: Bonus
const p = document.querySelectorAll('p');
const secondP = p[1];

secondP.addEventListener('mouseover', () => {
    secondP.style.opacity = '30%';
    secondP.style.transition = '2s';
});

// Exercise 2 : Work With Forms;

// 1:
console.log(document.forms);

// 2:
console.log(document.getElementById('fname'));
console.log(document.getElementById('lname'));
console.log(document.getElementById('submit'));

// 3:
console.log(document.getElementById('fname').name);
console.log(document.getElementById('lname').name);

// 4:
const input = document.querySelectorAll('input');
const ul = document.querySelector('ul');
const form = document.querySelector('form');
let submit = document.getElementById('submit');

form.addEventListener('submit', ((e) => {
    e.preventDefault();
    for (let i = 0; i < 2; i++) {
        const createLi = document.createElement('li');
        const textNode = document.createTextNode(input[i].value);
        createLi.appendChild(textNode);
        ul.appendChild(createLi);
    }
}));

// Exercise 3 : Transform The Sentence;

// 1:

const p = document.querySelector('p');
const strong = [...document.querySelectorAll('strong')];

const getBold_items = () => {
    strong.forEach(word => {
        p.addEventListener('mouseover', () => word.style.color = 'blue');
        p.addEventListener('mouseout', () => word.style.color = 'black');
    });
};

// getBold_items();

// Exercice 4 : Volume Of A Sphere;

const inputRadius = document.getElementById('radius');
const inputVolume = document.getElementById('volume');
const form = document.getElementById('MyForm');

const calculate = (e) => {
    e.preventDefault()
    let radius = inputRadius.value;
    let volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
    inputVolume.value = volume
};

form.addEventListener('submit', calculate);