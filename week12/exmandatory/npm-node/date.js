// Exercise XP Gold
// Exercise 1: Date #1

// 1:
const timeLeftUntil1stJanuary = () => {
  const timeLeft = new Date("January 1, 2023") - new Date("June 13, 2022"); // Date.now() ?;

  const daysLeft = Math.floor(timeLeft / (24 * 3600 * 1000));
  const hoursLeft = Math.floor(timeLeft / (3600 * 1000));
  return `the 1st January is in ${daysLeft} days and ${hoursLeft} hours`;
};

// Exercise 2 : Date #2

// 1:
const minutesAlive = (birthDate, today) => {
  const timePassed = today - birthDate;
  const minutesAlive = Math.floor(timePassed / 1000 / 60);
  return `Im living ${minutesAlive} minutes cool`;
};

// Exercise 3: Date #3

// 1:

const timeLeftUntilNextHoliday = (today, nextHoliday) => {
  const timeLeft = nextHoliday - today;
  const daysLeft = Math.floor(timeLeft / (24 * 3600 * 1000));
  const hoursLeft = Math.floor(timeLeft / (3600 * 1000));
  return `the next holiday is in ${daysLeft} days and ${hoursLeft} hours`;
};

module.exports = {
  timeLeftUntil1stJanuary,
  minutesAlive,
  timeLeftUntilNextHoliday,
};
