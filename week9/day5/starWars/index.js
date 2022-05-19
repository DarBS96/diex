// Star Wars Web App Using AJAX API;

// view
const mainContainer = document.querySelector('.mainContainer')
const itemsContainer = document.querySelector('.container');
const characterName = document.querySelector('.name')
const height = document.querySelector('.height')
const gender = document.querySelector('.gender')
const birthYear = document.querySelector('.birthYear')
const homeWorld = document.querySelector('.homeWorld')
const btn = document.querySelector('.findSomeone')
const icon = document.querySelector('.icon')
const loading = document.querySelector('.loading');
const error = document.querySelector('.error');
const characters = []
error.style.display = 'none'
icon.style.display = 'none'
loading.style.display = 'none'

// Model
class Character {
    constructor({ name, height, gender, birth_year, homeWorld, randomNum }) {
        this.name = name
        this.height = height
        this.gender = gender
        this.birthYear = birth_year
        this.homeWorld = homeWorld
        this.randomNum = randomNum
        this.showInDom()
        characters.push(this)
    }
    showInDom() {
        characterName.textContent = this.name
        height.textContent = `Height: ${this.height}`
        gender.textContent = `Gender: ${this.gender}`
        birthYear.textContent = `Birth Year: ${this.birthYear}`
        homeWorld.textContent = `Home World: ${this.homeWorld}`
        mainContainer.id = this.randomNum
    }
}


const getData = async() => {
    const randomNum = Math.floor((Math.random() * 83) + 1)
    try {
        const res = await fetch(`https://www.swapi.tech/api/people/${randomNum}`)
        if (!res.ok) {
            throw new Error(`Something went wrong ${res.status}`)
        }
        const data = await res.json()
        displayRandomCharacter(data.result.properties, randomNum)
    } catch (err) {
        setTimeout(() => {
            error.style.display = 'block'
        }, 2000)
        console.log(err.message)
    }
}

const displayRandomCharacter = (data, randomNum) => {
    console.log(data)
    const { name, height, gender, birth_year, homeworld } = data
    // console.log(birth_year, homeworld)
    new Character({ name, height, gender, birth_year, homeworld, randomNum })
}

//controller 
btn.addEventListener('click', (e) => {
    if (characters) {
        error.style.display = 'none'
        itemsContainer.style.display = 'none';
        icon.style.display = 'block';
        loading.style.display = 'block';
        setTimeout(() => {
            itemsContainer.style.display = 'grid';
            icon.style.display = 'none';
            loading.style.display = 'none';
        }, 2000);
        getData();
    } else {
        error.style.display = 'none'
        icon.style.display = 'block';
        loading.style.display = 'block';
        setTimeout(() => {
            getData();
            icon.style.display = 'none';
            loading.style.display = 'none';
        }, 2000);
    }
})