// Exercises XP

// Exercise 1 : Giphy API;
const gettingData = () => {
    var xhr = new XMLHttpRequest();
    xhr.addEventListener("load", reqListener);
    xhr.open("GET", "https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My");
    xhr.send();

    function reqListener() {
        const data = JSON.parse(this.response);
        console.log(data.data)
    }
};

// Exercise 2 : Giphy API
const gettingGifs = () => {
    var xhr = new XMLHttpRequest();
    xhr.addEventListener("load", reqListener);
    xhr.open("GET", "http://api.giphy.com/v1/gifs/search?q=sun&api_key=GNcv4teknwIJ0rxdlZO1YQ4n5zCGSutV&limit=10&offset=2&lang=en");
    xhr.send();

    function reqListener() {
        const data = JSON.parse(this.response);
        console.log(data.data);
    }
};

// Exercise XP Gold;
// Exercise 1 : Giphy API #2;

const gettingRandomImgGif = () => {
    var xhr = new XMLHttpRequest();
    xhr.addEventListener("load", reqListener);
    xhr.open("GET", "http://api.giphy.com/v1/gifs/search?q=sun&api_key=GNcv4teknwIJ0rxdlZO1YQ4n5zCGSutV&limit=10&offset=2");
    xhr.send();

    function reqListener() {
        const data = JSON.parse(this.response);
        console.log(data.data);
        const urls = data.data.map(gif => gif.images.original.url);
        let randomNum = Math.floor(Math.random() * data.data.length)
        console.log(randomNum)
        const img = document.createElement('img');
        img.style.height = '200px';
        img.style.width = '200px';
        console.log(urls[randomNum])
        img.setAttribute('src', urls[randomNum]);
        document.body.append(img)
    }
};

const btn = document.querySelector('button');
btn.addEventListener('click', gettingRandomImgGif);