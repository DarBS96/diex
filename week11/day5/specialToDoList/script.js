//View
const main = document.querySelector(".main");
let myModal = new bootstrap.Modal(document.getElementById("myModal"));
const inputEditTaskName = document.querySelector(".editTaskName");
const inputEditDescription = document.querySelector(".editDescriptionName");
const form = document.querySelector(".form");

//Model
const getDataFromLocalStorage = () => {
  const tasksFromLocalStorage = JSON.parse(localStorage.getItem("tasks"));
  const sortedTasks = displayTasksInAscendingOrder(tasksFromLocalStorage); // sorted tasks
  // Creating an id for each card
  sortedTasks.forEach((task, idx) => (task.id = idx));
  updateLocalStorage(sortedTasks);
};

const updateLocalStorage = (array) => {
  console.log(array);
  localStorage.setItem("tasks", JSON.stringify(array));
  const updatedTasks = JSON.parse(localStorage.getItem("tasks"));
  displayTasksInDom(updatedTasks);
};

const displayTasksInDom = (tasks) => {
  tasks?.forEach((task) => {
    const dayStarting = task.dateStart.replace("T", " ");
    const dayEnd = task.dateEnd.replace("T", " ");
    const cardContainer = document.createElement("div");
    cardContainer.className = "card-container card";
    const textContainer = document.createElement("div");
    textContainer.className = "text-container card-body";
    const fullName = document.createElement("h1");
    fullName.className = "fullName fs-2 mb-0";
    fullName.textContent = task.fullName;
    const startingDate = document.createElement("div");
    startingDate.className = "startingDate";
    startingDate.textContent = `Task has been created at: ${dayStarting}`;
    const daysLeft = document.createElement("div");
    daysLeft.className = "daysLeft";
    const diffDays = calculateDaysLeft(dayStarting, dayEnd);
    daysLeft.textContent = `Days left to complete: ${diffDays}`;
    const deleteBtn = createDeleteBtn(task.id);
    deleteTask(deleteBtn, tasks);
    const checkboxInput = createCheckBox(task);
    isComplete(checkboxInput.firstChild, tasks, task.id);
    const icon = createEditBtn();
    editTask(icon, task, tasks);
    textContainer.append(
      deleteBtn,
      icon,
      checkboxInput,
      fullName,
      createDropdown(task),
      startingDate,
      daysLeft
    );
    cardContainer.append(textContainer);
    main.append(cardContainer);

    // different color without the task being completed
    if (diffDays <= 0 && !task.isCompleted) {
      cardContainer.style.backgroundColor = "orange";
    }
    if (task.isCompleted) {
      cardContainer.style.backgroundColor = "yellow";
      checkboxInput.firstChild.checked = true;
    }
  });
};

const calculateDaysLeft = (date1, date2) => {
  const dayStart = Number(date1.slice(8, 10));
  const dayEnd = Number(date2.slice(8, 10));
  const daysLeft = dayEnd - dayStart;
  return daysLeft;
};

const createDropdown = (task) => {
  const dropdownContainer = document.createElement("div");
  dropdownContainer.className = "btn-group w-25 m-auto d-block";
  const btn = document.createElement("button");
  btn.className = "btn btn-white m-auto d-block btn-sm dropdown-toggle";
  btn.type = "button";
  btn.ariaExpanded = "false";
  btn.setAttribute("data-bs-toggle", "dropdown");
  const ul = document.createElement("ul");
  ul.className = "dropdown-menu";
  const li = document.createElement("li");
  li.className = "dropdown-item";
  li.textContent = task.description;
  ul.append(li);
  dropdownContainer.append(btn, ul);
  return dropdownContainer;
};

const createCheckBox = (task) => {
  const checkboxContainer = document.createElement("div");
  checkboxContainer.className = "form-check form-switch";
  const input = document.createElement("input");
  input.className = "form-check-input";
  input.type = "checkbox";
  input.id = task.id;
  checkboxContainer.append(input);
  return checkboxContainer;
};

createDeleteBtn = (id) => {
  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = "btn-close float-end";
  btn.ariaLabel = "Close";
  btn.id = id;
  return btn;
};

const deleteTask = (btnElem, tasks) => {
  btnElem.addEventListener("click", (e) => {
    const checkIfToDelete = confirm(
      "Are you sure you want to delete this task?"
    );
    if (checkIfToDelete) {
      //Update the DOM
      btnElem.parentElement.remove();
      // //Update the local storage
      console.log(tasks.splice(e.target.id, 1));
      console.log(tasks);
      deleteAllCards();
      updateLocalStorage(tasks);
    }
  });
};

createEditBtn = () => {
  const icon = document.createElement("i");
  icon.className = "fa-solid fa-pen float-end my-1 mx-2";
  return icon;
};

const editTask = (editElem, task, tasks) => {
  console.log(tasks);
  editElem.addEventListener("click", () => {
    myModal.show();
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      tasks[task.id].fullName = inputEditTaskName.value;
      tasks[task.id].description = inputEditDescription.value;
      deleteAllCards();
      updateLocalStorage(tasks);
      inputEditTaskName.value = "";
      inputEditDescription.value = "";
    });
  });
};

const displayTasksInAscendingOrder = (tasks) => {
  const tasksCopy = tasks.sort((a, b) => {
    // console.log(a.dateStart, b.dateEnd);
    return new Date(a.dateStart) - new Date(b.dateStart);
  });
  return tasksCopy;
};

const isComplete = (inputElem, tasks, id) => {
  inputElem.addEventListener("change", () => {
    // if (inputElem.checked) {
    //   //Update the DOM
    //   // inputElem.parentElement.parentElement.parentElement.style.backgroundColor =
    //   //   "red";
    //   //Update the model
    //   tasks[id].isCompleted = true;
    // } else {
    //   // inputElem.parentElement.parentElement.parentElement.style.backgroundColor =
    //   //   "white";
    //   tasks[id].isCompleted = false;
    // }
    tasks[id].isCompleted = inputElem.checked ? true : false;
    deleteAllCards();
    updateLocalStorage(tasks);
  });
};

const deleteAllCards = () => {
  const cards = document.querySelectorAll(".card-container");
  cards.forEach((card) => {
    card.remove();
  });
};
//Controller
getDataFromLocalStorage();
