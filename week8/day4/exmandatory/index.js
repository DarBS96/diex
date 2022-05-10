// Exercises XP
// Exercise 1 : Giphy API;
const gettingData = async() => {
    try {
        const res = await fetch('https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My');
        const data = await res.json();
        console.log(data.data);
    } catch (err) {
        console.log('Failed to bring data', err);
    }
};

// Exercise 2 : Giphy API
const gettingGifs = async() => {
    try {
        const res = await fetch('http://api.giphy.com/v1/gifs/search?q=sun&api_key=GNcv4teknwIJ0rxdlZO1YQ4n5zCGSutV&limit=10&offset=2&lang=en');
        const data = await res.json();
        console.log(data.data)
    } catch (err) {
        console.log('Failed to bring data', err)
    }
};

// Exercise XP Gold;
// Exercise 1 : Giphy API #2;

const gettingRandomImgGif = async() => {
    try {
        const res = await fetch('http://api.giphy.com/v1/gifs/search?q=sun&api_key=GNcv4teknwIJ0rxdlZO1YQ4n5zCGSutV&limit=10&offset=2');
        const data = await res.json();
        const urls = data.data.map(gif => gif.images.original.url);
        let randomNum = Math.floor(Math.random() * data.data.length)
        console.log(randomNum)
        const img = document.createElement('img');
        img.style.height = '200px';
        img.style.width = '200px';
        console.log(urls[randomNum])
        img.setAttribute('src', urls[randomNum]);
        document.body.append(img)

    } catch (err) {
        console.log('Failed to bring data', err);
    }
};

const btn = document.querySelector('button');
btn.addEventListener('click', gettingRandomImgGif);