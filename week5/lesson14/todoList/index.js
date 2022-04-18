let arrListTasks = [];
let icon;
let newTask;

let listTasks = document.querySelector('.listTasks');
const inputText = document.querySelector('input');

let task = {
    task_id: 0,
    text: inputText.value,
    done: false
};

const addTask = (e) => {
    e.preventDefault();
    if (!inputText.value) {
        alert('Must insert a task');
    } else {
        let newTask = createTask();
        arrListTasks.push(newTask);
        console.log(arrListTasks);
    }
};
const createTask = () => {
    // div second container
    taskDiv = createElement("div");
    taskDiv.className = 'task';
    appendChild(listTasks, taskDiv);

    // create icon 
    icon = createElement("i");
    icon.className = 'fa-solid fa-xmark icon';
    appendChild(taskDiv, icon);
    console.log(icon);

    // create input check
    let input = createElement("INPUT");
    input.setAttribute("type", "checkbox");
    // input.className = 'checkbox-input';

    appendChild(taskDiv, input);

    //create label to input check
    let newLabel = createElement("Label");
    newLabel.setAttribute("for", task.task_id);
    newLabel.innerHTML = inputText.value;
    newLabel.className = 'strikethrough';

    appendChild(taskDiv, newLabel);

    inputText.value = '';
    deleteTask(icon, taskDiv);

    return taskDiv;
};

const createElement = (element) => {
    return document.createElement(element);
};

const appendChild = (elem1, elem2) => {
    console.log(elem1.appendChild(elem2));
};
const btn = document.querySelector('button');
btn.addEventListener('click', addTask);

const deleteTask = (icon, task) => {
    icon.addEventListener('click', function(e) {
        task.remove();
    });
};