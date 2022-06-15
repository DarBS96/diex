const {
  timeLeftUntil1stJanuary,
  minutesAlive,
  timeLeftUntilNextHoliday,
} = require("./date");

// Exercise 1: Date #1
// 2:
console.log(timeLeftUntil1stJanuary());

// Exercise 2 : Date #2
// 2:
console.log(minutesAlive(new Date(1996, 3, 0), new Date(2022, 5, 13)));

//Bonus
const prompt = require("prompt-sync")();
const age = prompt("What is your birthDate?");
console.log(minutesAlive(new Date(age), new Date()));

// Exercise 3: Date #3r
// 2:
console.log(timeLeftUntilNextHoliday(Date.now(), new Date(2022, 8, 25)));
