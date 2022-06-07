//View
const main = document.querySelector(".main");

//Model
const getDataFromLocalStorage = () => {
  const tasksFromLocalStorage = JSON.parse(localStorage.getItem("tasks"));
  return tasksFromLocalStorage;
};

const displayTasksInDom = () => {
  const tasks = getDataFromLocalStorage();
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
    daysLeft.textContent = `Days left to complete: ${calculateDaysLeft(
      dayStarting,
      dayEnd
    )}`;
    textContainer.append(
      createCheckBox(task),
      fullName,
      createDropdown(task),
      startingDate,
      daysLeft
    );
    cardContainer.append(textContainer);
    main.append(cardContainer);
    // isComplete(tasks);
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
  ul.className = "dropdown-menu bg-info";
  const li = document.createElement("li");
  li.className = "dropdown-item bg-info text-white";
  li.textContent = task.description;
  ul.append(li);
  dropdownContainer.append(btn, ul);
  return dropdownContainer;
};

const createCheckBox = () => {
  const checkboxContainer = document.createElement("div");
  checkboxContainer.className = "form-check form-switch";
  const input = document.createElement("input");
  input.className = "form-check-input";
  input.type = "checkbox";
  checkboxContainer.append(input);
  return checkboxContainer;
};

//Controller
displayTasksInDom();
