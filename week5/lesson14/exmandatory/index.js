// Exercise 1 : Move The Box;

const animate = document.getElementById('animate');

setInterval(() => {
    myMove()
}, 2000)

const myMove = () => {
    animate.style.right += '0px';
};