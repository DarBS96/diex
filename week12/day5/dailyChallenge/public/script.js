const main = document.querySelector(".main");
const getRegisterData = async () => {
  //view
  const firstName = document.querySelector(".firstName").value;
  const lastName = document.querySelector(".lastName").value;
  const email = document.querySelector(".email").value;
  const username = document.querySelector(".username").value;
  const password = document.querySelector(".password").value;
  try {
    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        username,
        password,
      }),
    };
    const res = await fetch("http://localhost:8080/register", options);
    const data = await res.json();
    console.log(data);
    greetingUser(data);
  } catch (err) {
    console.log(err.message);
  }
};

const greetingUser = (users) => {
  users.forEach((user) => {
    userIsExist(users, user);
  });
};

const userIsExist = (users, register) => {
  console.log("users:", users);
  console.log("register:", register);
  users.forEach((user) => {
    deleteRegisters();
    const p = document.createElement("p");
    p.classList.add("greeting");
    if (user.email === register.email) {
      p.textContent = `user name already exists`;
    }
    p.textContent = `Hello ${user.firstName} ${user.lastName} your account is now created`;
    main.append(p);
  });
};

const deleteRegisters = () => {
  const registers = document.querySelectorAll("p");
  registers.forEach((register) => {
    register.remove();
  });
};
