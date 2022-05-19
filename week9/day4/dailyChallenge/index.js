// Daily Challenge: Promises;

// 1st Challenge;

const promise1 = Promise.resolve(1);
const promise2 = new Promise((resolve, reject) => {
    resolve('Hello');
});
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, 'This is a really weird syntax of resolve');
});

// Promise.all([promise1, promise2, promise3]).then(res => console.log(res))

// 2nd Challenge;

// view
const form = document.getElementById('getSunrise');
const input1 = document.getElementById('latFirstCity');
const input2 = document.getElementById('longFirstCity');
const input3 = document.getElementById('latSecondCity');
const input4 = document.getElementById('longSecondCity');

const getData = async() => {
    try {
        if (input1.value !== '' && input2.value !== '') {
            const res = await fetch(`https://api.sunrise-sunset.org/json?lat=${input1.value}&lng=${input2.value}`);
            console.log(res);
            if (!res.ok) {
                throw new Error('Something went wrong');
            }
            const data = await res.json();
            console.log(data);
            getSunriseTime(data);
        }
    } catch (err) {
        console.log(err);
    }
};

getSunriseTime = (data) => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log(data.results.sunrise);
    });
};

getData()