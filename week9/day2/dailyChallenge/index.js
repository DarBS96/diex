// Daily Challenge: Play With Words;

// 1rst Daily Challenge;

const makeAllCaps = (arr) => {
    const upperCaseArr = []
    return new Promise((resolve, reject) => {
       const result =  arr.every(item =>{
            if(typeof(item) === 'string'){
                upperCaseArr.push(item.toUpperCase())
                return true
            } else{
                return false
            }
        })
 result? resolve(upperCaseArr) : reject('Not all the words are type of string')
    })
}
const sortWords = (upperCaseArr) => {
    return new Promise((resolve, reject) => {
        upperCaseArr.length > 4 ? resolve(upperCaseArr.sort()) : reject('Sorry the length of the words is less than 4')
    })
}
makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
    .then(arr => sortWords(arr))
    .then(result => console.log(result))
    .catch(err => console.log(err))

// 2nd Daily Challenge;

let morse = `{
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  "a": ".-",
  "b": "-...",
  "c": "-.-.",
  "d": "-..",
  "e": ".",
  "f": "..-.",
  "g": "--.",
  "h": "....",
  "i": "..",
  "j": ".---",
  "k": "-.-",
  "l": ".-..",
  "m": "--",
  "n": "-.",
  "o": "---",
  "p": ".--.",
  "q": "--.-",
  "r": ".-.",
  "s": "...",
  "t": "-",
  "u": "..-",
  "v": "...-",
  "w": ".--",
  "x": "-..-",
  "y": "-.--",
  "z": "--..",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "-": "-....-",
  "/": "-..-.",
  "@": ".--.-.",
  "(": "-.--.",
  ")": "-.--.-"
}`

const toJs = (morse) => {
    return new Promise((resolve, reject) => {
        morse ? resolve(JSON.parse(morse)) : reject('Empty morse')
    })
}

const toMorse = (morseObj) => {
    return new Promise((resolve, reject) => {
        const userAnswer = prompt('Write a word or a sentence');
        if (!userAnswer) return
        let strArray = userAnswer.split('');
      const result = strArray.map(letter =>{
           if (!Object.keys(morseObj).includes(letter)){
           reject('Sorry at least one word doesnt exist in the morse')
             } else{
                   return morseObj[letter];
             }
        })
        resolve(result)
    })
};

const joinWords = (morseTranslation) => {
    morseTranslation.forEach(val => {
        const div = document.createElement('div')
        div.textContent = val
        document.body.append(div)
    })
}

toJs(morse)
    .then(result => toMorse(result)
        .then(result => joinWords(result))
        .catch(err => console.log(err)))
    .catch(err => console.log(err));