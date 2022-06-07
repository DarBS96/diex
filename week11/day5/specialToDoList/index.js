// Mini Project - Special To Do List

// view
const form = document.querySelector(".formToDo");
const fullName = document.querySelector(".name");
const description = document.querySelector(".description");
const dateStart = document.querySelector(".start");
const dateEnd = document.querySelector(".end");
const submit = document.querySelector("addTask");

//Model
const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
class Task {
  constructor({ fullName, description, dateStart, dateEnd, isCompleted }) {
    this.fullName = fullName;
    this.description = description;
    this.dateStart = dateStart;
    this.dateEnd = dateEnd;
    this.isCompleted = isCompleted;
    this.id = tasks.length;
    tasks.push(this);
    this.pushTasksToLocalStorage();
  }
  pushTasksToLocalStorage() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
}

//Controller

form.addEventListener("submit", (e) => {
  const customTask = {
    fullName: fullName.value,
    description: description.value,
    dateStart: dateStart.value,
    dateEnd: dateEnd.value,
    isCompleted: false,
  };
  const task = new Task(customTask);
  console.log(task);

  //   const formData = new FormData(form);
  //   console.log(formData);
});

// const isComplete = (tasks) => {
//   const inputs = document.querySelectorAll("input");
//   inputs.forEach((input) => {
//     if (input.checked) tasks.isCompleted = true;
//   });
//   console.log(tasks);
//   localStorage.setItem("tasks", JSON.stringify(tasks));
// };

// displayTasksInAscendingOrder = (task) => {
//   const olderTask = ''
//   console.log(task);
// };
