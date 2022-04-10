// Daily Challenge: Planets;

let planets = [
    { name: "Venus", moons: [] },
    { name: "Earth", moons: ["moon"] },
    { name: 'Mars', moons: ["Deimos", "Phobos"] },
    { name: 'Jupiter', moons: ["IO", "Europa", "Ganymede"] },
    { name: 'Sarturna', moons: ["Ymir", "Paaliaq", "Siarnaq", "Tarvos", "Kiviuq", "Ijiraq", "Thrymr"] },
    { name: 'Uranus', moons: ["Juliette", "Portia", "Cressida", "Desdémone", "Rosalinde", "Belinda", "Cordélia"] },
    { name: 'Neptune', moons: ["Despina", "Galatea", "HippoCamp"] }
];
const section = document.querySelector('section');

const getRandomColor = () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16); // toString base 16 convert to f (css tricks)
    return "#" + randomColor;
};

const elementToPush = (element) => {
    section.appendChild(element);
};

const createMoon = ((moon, index) => {
    const createMoon = document.createElement('div');
    createMoon.classList.add('moon');
    createMoon.style.backgroundColor = getRandomColor();
    let name = document.createTextNode(moon);
    createMoon.appendChild(name);
    console.log(index)
    let leftVal = 140 + index * 80;
    console.log(leftVal);
    createMoon.style.left = (`${leftVal}px`);

    return createMoon;
});

const createPlanet = (planet) => {
    const createPlanet = document.createElement('div');
    createPlanet.classList.add('planet');
    // console.log(createPlanet);
    createPlanet.style.backgroundColor = getRandomColor();
    let name = document.createTextNode(planet.name);
    createPlanet.appendChild(name);
    planet.moons.forEach((moon, index) => {
        createPlanet.appendChild(createMoon(moon, index));
    });
    return createPlanet;
};

planets.forEach((planet) => elementToPush(createPlanet(planet)));;