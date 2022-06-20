const fill = document.querySelector('.fill')
const empties = document.querySelectorAll('.empty');

// Drag functions

const dragStart = () => {
    console.log('start');
};

const dragEnd = () => {
    console.log('end');

};

// Fill listeners

fill.addEventListener('dragstart', dragStart)
fill.addEventListener('dragend', dragEnd);