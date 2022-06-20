// Daily Challenge: Dates;
const fullDate = [];
const formatDate = (date) => {
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    const hours = ('0' + date.getHours()).slice(-2);
    let minutes = ('0' + date.getMinutes()).slice(-2);
    let seconds = ('0' + date.getSeconds()).slice(-2);
    fullDate.push(year, month, day, hours, minutes, seconds)
    const dateStr = [...fullDate].join('');
    return dateStr
}

console.log(formatDate(new Date(2019, 11, 31, 23, 59, 59)));