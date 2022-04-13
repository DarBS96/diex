const squares = document.querySelector('.squares');
const colorsPattern = document.querySelector('.colors-pattern');

const colors = ['yellow', 'red', 'pink', 'purple', 'aqua', 'SaddleBrown', 'YellowGreen', 'silver', 'Lime', 'Olive', 'Navy', 'black', 'White', 'Orange', 'Maroon', 'Teal', 'Fuchsia', 'MediumSlateBlue', 'Thistle', 'Gold', 'Salmon', 'YellowGreen'];

// Create color pattern
for (let i = 0; i < colors.length - 1; i++) {
    const div = document.createElement('div');
    div.className = 'color';
    div.style.backgroundColor = colors[i];
    colorsPattern.appendChild(div);
}

// Create board of squares
for (let i = 0; i < 1800; i++) {
    const divSquares = document.createElement('div');
    divSquares.className = 'small-square';
    squares.appendChild(divSquares);
}

const btn = document.querySelector('button');
const divArr = document.querySelectorAll('.color');
const divSquares = document.querySelectorAll('.small-square');
let currColor;
let mouseDown = false;


divArr.forEach((div) => {
    div.addEventListener('click', (e) => {
        currColor = e.target.style.backgroundColor;
        console.log(currColor);
    });
});

squares.addEventListener("mousedown", () => {
    mouseDown = true;
});
squares.addEventListener("mouseup", () => {
    mouseDown = false;
});
divSquares.forEach((square) => {
    square.addEventListener("mouseover", () => {
        if (mouseDown && currColor) {
            square.style.backgroundColor = currColor;
        }
    });
});


//Clean the board
btn.addEventListener('click', () => {
    for (square of divSquares) {
        square.style.backgroundColor = 'rgb(232, 225, 225)';
    }
});