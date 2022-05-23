// Mini Project: Weather App;

// Enable to create dynamically classes for divContainer
const usefulClasses = {
    DIVCONTAINER: 'divContainer',
    CARD: 'card',
    // Adding new class
    RED: 'purple'
};

// view
const form = document.getElementById('submitCity');
const input = document.getElementById('searchCity');
const main = document.querySelector('.main');
const switchTemp = document.getElementById('switch');
// Creating classes for each card
const classFromArrToAdd = (arr, el) => arr.forEach(className => el.classList.add(className));

// Model
const cardsInstances = [];
let myModal = new bootstrap.Modal(document.getElementById("myModal"));
class Card {
    constructor({ cityName, countryName, weatherDescription, icon, temp }) {
        this.cityName = cityName;
        this.countryName = countryName;
        this.weatherDescription = weatherDescription;
        this.icon = icon;
        this.temp = temp;
        this.id = cardsInstances.length;
        cardsInstances.push(this);
        this.showInDom();
        this.switchBetweenTemp();
        this.store();
        this.removeCard();
    }
    showInDom() {
        const nameContainer = document.createElement('div');
        nameContainer.id = this.id;
        const itemsContainer = document.createElement('div');
        itemsContainer.className = 'itemsContainer';
        const namesContainer = document.createElement('div');
        namesContainer.className = 'namesContainer';
        classFromArrToAdd([usefulClasses.DIVCONTAINER, usefulClasses.CARD], nameContainer);
        const titleCityName = document.createElement('p');
        titleCityName.className = 'cityName';
        titleCityName.textContent = this.cityName;
        const countryCityName = document.createElement('p');
        countryCityName.className = 'countryCityName';
        countryCityName.textContent = ',' + ' ' + this.countryName;
        const icon = document.createElement('img');
        icon.className = 'weatherImage';
        icon.setAttribute('src', this.icon);
        const temp = document.createElement('p');
        temp.className = 'temp';
        const spanDegree = document.createElement('span');
        spanDegree.className = 'degree';
        spanDegree.textContent = '°';
        this.closingCard = document.createElement('button');
        this.closingCard.className = 'btn-close';
        this.closingCard.type = 'button';
        const weather = document.createElement('p');
        weather.className = 'weatherDescription';
        weather.textContent = this.weatherDescription;
        namesContainer.append(titleCityName, countryCityName);
        itemsContainer.append(namesContainer, icon, temp, weather);
        nameContainer.append(this.closingCard, itemsContainer);
        main.append(nameContainer);
        this.tempElem = temp;
    }
    switchBetweenTemp() {
        if (switchTemp.checked) {
            this.tempElem.textContent = this.temp;
        } else {
            this.tempElem.textContent = ((this.temp * 9) / 5 + 32).toFixed(4);
        }
    }
    store() {
        localStorage.setItem('cards', JSON.stringify(cardsInstances));
    }
    removeCard() {
        this.closingCard.addEventListener('click', (e) => {
            //Update the DOM
            e.target.parentElement.remove();
            // Update the localStorage
            const storeArr = JSON.parse(localStorage.getItem('cards'));
            storeArr.splice(e.target.parentElement.id, 1);
            localStorage.setItem('cards', JSON.stringify(storeArr));
        });
    };

}


// controller
const getWeatherData = (url) => {
    let xhr = new XMLHttpRequest();
    xhr.addEventListener("load", reqListener);
    xhr.open("GET", url);
    xhr.send();

    function reqListener() {
        const data = JSON.parse(this.response);
        console.log(data);
        console.log(input.value);
        if (data.cod !== 200) {
            console.log(data.message);
            myModal.show();
        }
        const sendData = {
            cityName: data.name,
            countryName: data.sys.country,
            weatherDescription: data.weather[0].description,
            icon: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
            temp: data.main.temp
        };
        new Card(sendData);
    }
};

form.addEventListener('submit', (e) => {
    e.preventDefault();
    getWeatherData(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=6bc236fa8bd5e7e03f83fd8cea3eac74&units=metric`);
    input.value = '';
});

switchTemp.addEventListener('change', (e) => {
    window.localStorage.setItem('lastUnit', e.target.checked);
    cardsInstances.forEach(card => {
        card.switchBetweenTemp();
    });
});

window.addEventListener('load', () => {
    let lastUnitOnload = window.localStorage.getItem('lastUnit') === 'true' ? true : false;
    console.log(lastUnitOnload);
    switchTemp.checked = lastUnitOnload;
    console.log(switchTemp.checked);
    let dataFromLocalStorage = JSON.parse(localStorage.getItem('cards'));
    dataFromLocalStorage.forEach(card => {
        const cardItems = {...card };
        new Card(cardItems);
    });
});