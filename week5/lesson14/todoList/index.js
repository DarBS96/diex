"use strict";
let icon;

//View
const ul = document.querySelector('ul');
const inputText = document.querySelector('input');
const btn = document.querySelector('button');

const createTask = () => {
    let currTask = tasks.length;

    tasks.push(currTask);
    // create li
    const li = createElement("li");
    li.className = 'task';
    ul.append(li);

    // create icon 
    icon = createElement("i");
    icon.className = 'fa-solid fa-xmark icon';
    appendChild(li, icon);

    // create input check
    let input = createElement("input");
    input.setAttribute("type", "checkbox");
    input.id = `task${currTask}`;
    appendChild(li, input);

    //create label to input check
    let newLabel = createElement("Label");
    newLabel.setAttribute("for", input.id);
    newLabel.innerHTML = inputText.value;
    newLabel.className = 'strikethrough';

    appendChild(li, newLabel);

    inputText.value = '';
    appendChild(ul, li);
    deleteTask(icon);
};

const createElement = element => document.createElement(element);

const appendChild = (elem1, elem2) => elem1.appendChild(elem2);

// Model
const tasks = [];


// Controller
const addTask = (e) => {
    e.preventDefault();
    if (!inputText.value) {
        alert('Must insert a task');
    } else {
        createTask();
    }
};

const deleteTask = (element) => {
    element.addEventListener('click', function(e) {
        console.log(this.parentElement.remove());
    });
};

btn.addEventListener('click', addTask);