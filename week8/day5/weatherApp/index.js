// Mini Project: Weather App;

// view
const form = document.getElementById('submitCity');
const input = document.getElementById('searchCity')
const main = document.querySelector('.main')
const switchTemp = document.getElementById('switch')

// Model
const cardsInstances = []
class Card {
    constructor({ cityName, countryName, weatherDescription, icon, temp }) {
        this.cityName = cityName
        this.countryName = countryName
        this.weatherDescription = weatherDescription
        this.icon = icon
        this.temp = temp
        this.id = cardsInstances.length
        cardsInstances.push(this)
        this.showInDom()
        this.switchBetweenTemp()
        this.store()
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
            // temp.textContent = this.temp
        const closingCard = document.createElement('button')
        closingCard.className = 'btn-close'
        closingCard.type = 'button'
        const weather = document.createElement('p')
        weather.className = 'weatherDescription'
        weather.textContent = this.weatherDescription
        temp.append(spanDegree) // it doesnt give me to append the span for unknown reason
        console.log(temp)
        namesContainer.append(titleCityName, countryCityName)
        itemsContainer.append(namesContainer, icon, temp, weather);
        divContainer.append(closingCard, itemsContainer)
        main.append(divContainer)
        removeCard(closingCard)
        this.tempElem = temp
    }
    switchBetweenTemp() {
        if (switchTemp.checked) {
            this.tempElem.textContent = this.temp
        } else {
            this.tempElem.textContent = ((this.temp * 9) / 5 + 32).toFixed(4)
        }
    }
    store() {
        localStorage.setItem('cards', JSON.stringify(cardsInstances));
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
        console.log(data)
        const sendData = {
            cityName: data.name,
            countryName: data.sys.country,
            weatherDescription: data.weather[0].description,
            icon: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
            temp: data.main.temp
        }
        const newWeatherCard = new Card({...sendData })
    } catch (err) {
        console.log(err);
    }
};

const removeCard = (btnCard) => {
    btnCard.addEventListener('click', (e) => {
        //Update the DOM
        e.target.parentElement.remove();
        // Update the Model
        const storeArr = JSON.parse(localStorage.getItem('cards'))
        storeArr.splice(e.target.parentElement.id, 1)
        localStorage.setItem('cards', JSON.stringify(storeArr));
    });
};

// controller
form.addEventListener('submit', (e) => {
    e.preventDefault()
    getWeatherData(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=6bc236fa8bd5e7e03f83fd8cea3eac74&units=metric`);
    input.value = '';

});

switchTemp.addEventListener('change', () => {
    cardsInstances.forEach(card => {
        card.switchBetweenTemp()
    });
});

window.addEventListener('load', () => {
    let dataFromLocalStorage = JSON.parse(localStorage.getItem('cards'));
    dataFromLocalStorage.forEach(card => {
        const cardItems = {...card }
        new Card(cardItems)
    })
}); //  When I onload it, it's immediately go back to C degree ant not keep the F degree