const largeNumber = 356;

const currentDate = (date) => {
  const text = new Date(date);
  return text.toLocaleString();
};
module.exports = { largeNumber, currentDate };
