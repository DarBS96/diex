// Exercises XP;

// Exercise 1 : Comparison;

const compareToTen = (num) => {
    return new Promise((resolve, reject) => {
        num < 10 ? resolve(`The number is less then 10: ${num}`) :
            reject(`The number is greater then 10: ${num}`)
    })
}

compareToTen(15)
    .then(result => console.log(result))
    .catch(err => console.log(err))


compareToTen(8)
    .then(result => console.log(result))
    .catch(err => console.log(err));

// Exercise 2 : Promises;

// 1:
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('success')
    }, 4000)
})

promise.then(result => console.log(result))
    .catch(err => console.log('Ooops something went wrong'))

// 2:

const shorterPromise = Promise.resolve('success')
shorterPromise.then(result => setTimeout(() => console.log(result), 4000))
    .catch(err => console.log('Ooops something went wrong'))

// Exercise 3 : Resolve & Reject

// 1:

resolvePromise = Promise.resolve(3)
resolvePromise.then(result => console.log(result))

// 2:

rejectPromise = Promise.reject('Boo')
rejectPromise.catch(result => console.log(result));

// Exercises Gold;