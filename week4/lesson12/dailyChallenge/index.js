// Daily Challenge: Planets;
// 1:

const planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn'];
const section = document.querySelector('section');

// 2 + 3 + 4:
const getRandomColor = () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16); // toString base 16 convert to f (css tricks)
    return "#" + randomColor;
};
planets.forEach((planet) => {
    const createDiv = document.createElement('div');
    createDiv.className = 'planet';
    createDiv.innerHTML = planet;
    section.appendChild(createDiv);
    createDiv.style.backgroundColor = getRandomColor();
});

//Bonus
const moons = { Mercury: 3, Venus: 2, Earth: 4, Mars: 2, Jupiter: 1, Saturn: 1 };
for (planet in moons) {
    const createDiv = document.createElement('div');
    createDiv.className = 'moon';
    createDiv.innerHTML = planet;
    section.appendChild(createDiv);
    createDiv.style.backgroundColor = getRandomColor();
};

section.style.display = 'flex'