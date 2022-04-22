let icon;

const ul = document.querySelector('ul');
const inputText = document.querySelector('input');


const addTask = (e) => {
    e.preventDefault();
    if (!inputText.value) {
        alert('Must insert a task');
    } else {
        createTask();
    }
};
const createTask = () => {
    // create li
    const li = createElement("li");
    li.className = 'task';
    ul.append(li);

    // create icon 
    icon = createElement("i");
    icon.className = 'fa-solid fa-xmark icon';
    appendChild(li, icon);

    // create input check
    let input = createElement("INPUT");
    input.setAttribute("type", "checkbox");
    appendChild(li, input);

    //create label to input check
    let newLabel = createElement("Label");
    newLabel.setAttribute("for", inputText);
    newLabel.innerHTML = inputText.value;
    newLabel.className = 'strikethrough';

    appendChild(li, newLabel);

    inputText.value = '';
    appendChild(ul, li);
    deleteTask(icon);
};

const createElement = (element) => {
    return document.createElement(element);
};

const appendChild = (elem1, elem2) => {
    elem1.appendChild(elem2);
};
const btn = document.querySelector('button');
btn.addEventListener('click', addTask);

const deleteTask = (icon) => {
    icon.addEventListener('click', function(e) {
        console.log(this.parentElement.remove())
    });
};