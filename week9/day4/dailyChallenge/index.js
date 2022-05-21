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
const firstLat = document.getElementById('latFirstCity');
const firstLong = document.getElementById('longFirstCity');
const secondLat = document.getElementById('latSecondCity');
const secondLong = document.getElementById('longSecondCity');
const firstRes = document.querySelector('.first')
const secondRes = document.querySelector('.second')

const getData = (lan, lng) => {
    return new Promise((resolve, reject) => {
        const URL = `https://api.sunrise-sunset.org/json?lat=${lan}&lng=${lng}`
        const fetchPromise = fetch(URL);
        fetchPromise.then(response => {
            if (!response.ok) {
                reject('Something went wrong');
            }
            return response.json()
        }).then(data => {
            // console.log(data);
            resolve(data.results.sunrise);
        });
    })
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    Promise.all([getData(firstLat.value, firstLong.value), getData(secondLat.value, secondLong.value)])
        .then(results => {
            firstRes.textContent = `First city: ${results[0]}`;
            secondRes.textContent = `Second city: ${results[1]}`;

        })
        .catch(err => console.log(err))
});