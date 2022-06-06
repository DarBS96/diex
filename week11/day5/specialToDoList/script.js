//View

// const displayName = document.querySelector(".displayName");
// const startingDate = document.querySelector(".startingDate");
// const dayLeft = document.querySelector(".dayLeft");

//Model

const getDataFromLocalStorage = () => {
  const tasksFromLocalStorage = JSON.parse(localStorage.getItem("tasks"));
  console.log("console from local storage", tasksFromLocalStorage);
  //   tasksFromLocalStorage.forEach((task) => {
  //     // displayName.textContent = task.fullName;
  //     // startingDate.textContent = task.dateStart;
  //     // dayLeft.textContent = task.dateEnd;
  //   });
  return tasksFromLocalStorage;
};

const displayTasksInDom = () => {
  const tasks = getDataFromLocalStorage();
  console.log(tasks);
  tasks.forEach((task) => {
    const timeDiff = task.dateStart - task.dateEnd;
    console.log(timeDiff);
    const container = document.createElement("div");
    container.className = "container";
    const fullName = document.createElement("div");
    fullName.className = "fullName";
    fullName.textContent = `Name of Task: ${task.fullName}`;
    const startingDate = document.createElement("div");
    startingDate.className = "startingDate";
    startingDate.textContent = `Task has been created: ${task.dateStart.slice(
      0,
      10
    )}`;
    const daysLeft = document.createElement("div");
    daysLeft.className = "dayLeft";
    daysLeft.textContent = `Days left to complete: ${task.dateEnd}`;
    container.append(fullName, startingDate, daysLeft);
    document.body.append(container);
  });
};

displayTasksInDom();
