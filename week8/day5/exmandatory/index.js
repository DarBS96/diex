// Mini Project: Weather App;

// view
const form = document.getElementById('submitCity');
const input = document.getElementById('searchCity')
const main = document.querySelector('.main')
const switchTemp = document.getElementById('switch')

// Model
const cardsInstances = []
class Card {
    constructor(cityName, countryName, weatherDescription, icon, temp) {
        this.cityName = cityName
        this.countryName = countryName
        this.weatherDescription = weatherDescription
        this.icon = `http://openweathermap.org/img/wn/${icon}@2x.png`
        this.tempCel = temp
        this.tempFah = ((temp * 9) / 5 + 32).toFixed(4)
        this.id = cardsInstances.length
        cardsInstances.push(this)
        console.log(cardsInstances)
        this.showInDom()
    }
    showInDom() {
        const divContainer = document.createElement('div');
        divContainer.id = this.id
        divContainer.className = 'divContainer card';
        const itemsContainer = document.createElement('div');
        itemsContainer.className = 'itemsContainer';
        const namesContainer = document.createElement('div');
        namesContainer.className = 'namesContainer';
        const titleCityName = document.createElement('p');
        titleCityName.className = 'cityName';
        titleCityName.textContent = this.cityName
        const countryCityName = document.createElement('p');
        countryCityName.className = 'countryCityName';
        countryCityName.textContent = ',' + ' ' + this.countryName
        const icon = document.createElement('img');
        icon.className = 'weatherImage';
        icon.setAttribute('src', this.icon);
        const temp = document.createElement('p')
        temp.className = 'temp'
        const spanDegree = document.createElement('span')
        spanDegree.className = 'degree'
        spanDegree.innerHTML = '&#176;'
        temp.textContent = this.temp
        const closingCard = document.createElement('button')
        closingCard.className = 'btn-close'
        closingCard.type = 'button'
        const weather = document.createElement('p')
        weather.className = 'weatherDescription'
        weather.textContent = this.weatherDescription
        temp.append(spanDegree)
        namesContainer.append(titleCityName, countryCityName)
        itemsContainer.append(namesContainer, icon, temp, weather);
        divContainer.append(closingCard, itemsContainer)
        main.append(divContainer)
        removeCard(closingCard)
        this.tempElem = temp
    }
    switchBetweenTemp() {
        if (switchTemp.checked) {
            console.log(this.tempCel)
            this.tempElem.textContent = this.tempCel;
        } else {
            console.log(this.tempFah)
            this.tempElem.textContent = this.tempFah;
        }
    }
}

const getWeatherData = async(url) => {
    try {
        const res = await fetch(url);
        if (!res.ok) {
            var myModal = new bootstrap.Modal(document.getElementById("myModal"));
            myModal.show();
            throw new Error(`Error! status: ${res.status}`);
        }
        console.log(input.value)
        const data = await res.json();
        const newWeatherCard = new Card(data.name, data.sys.country, data.weather[0].description, data.weather[0].icon, data.main.temp).switchBetweenTemp()
        console.log(newWeatherCard)
    } catch (err) {
        console.log(err);
    }
};

const removeCard = (btnCard) => {
    btnCard.addEventListener('click', (e) => {
        e.target.parentElement.remove();
    });
};

// controller
form.addEventListener('submit', (e) => {
    e.preventDefault()
    getWeatherData(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=6bc236fa8bd5e7e03f83fd8cea3eac74&units=metric`);
    input.value = '';
});

switchTemp.addEventListener('change', () => {
    cardsInstances.forEach(card => card.switchBetweenTemp());
});