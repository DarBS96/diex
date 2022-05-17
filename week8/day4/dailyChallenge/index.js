// Daily Challenge: Giphy API;

// vue
const input = document.getElementById('category')
const searchCategoryBtn = document.querySelector('.searchCategory')
const divDelete = document.querySelector('.deleteEachGif')
const deleteAllGifBtn = document.querySelector('.deleteAllGifs')
deleteAllGifBtn.style.display = 'none';



// model
const createDeleteBtnToEachGif = () => {
    const btn = document.createElement('button')
    const div = document.createElement('div')
    div.className = 'HeyImContainer'
    div.style.display = 'grid'
    btn.className = 'deleteGif btn btn-danger rounded-circle'
    btn.textContent = 'Delete gif'
    div.append(btn)
    divDelete.append(div)
    console.log(div)
    gettingRandomImgGif(div)
    deleteWantedGif()
}

const deleteAllgifs = () => {
    const eachGif = document.querySelectorAll('.heyImAGif');
    const deleteBtnGifs = document.querySelectorAll('.deleteGif');
    deleteAllGifBtn.addEventListener('click', () => {
        eachGif.forEach(gif => gif.remove());
        deleteBtnGifs.forEach(button => button.remove());
        deleteAllGifBtn.style.display = 'none';
        location.reload()
    });
}

const deleteWantedGif = () => {
    const deleteWantedGif = document.querySelectorAll('.deleteGif');
    deleteWantedGif.forEach(btn => {
        btn.addEventListener('click', (e) => e.target.parentElement.remove());
    })
}

// controller
const gettingRandomImgGif = (div) => {
    var xhr = new XMLHttpRequest();
    xhr.addEventListener("load", reqListener);
    xhr.addEventListener("error", transferFailed);
    xhr.open("GET", "https://api.giphy.com/v1/gifs/search?q=${input.value}&api_key=GNcv4teknwIJ0rxdlZO1YQ4n5zCGSutV&limit=10&offset=2");
    xhr.send();

    function reqListener() {
        const data = JSON.parse(this.response);
        console.log(data.data);
        const urls = data.data.map(gif => gif.images.original.url);
        let randomNum = Math.floor(Math.random() * data.data.length);
        console.log(randomNum);
        const img = document.createElement('img');
        img.style.height = '200px';
        img.style.width = '200px';
        img.style.borderRadius = '50%';
        img.className = 'heyImAGif';
        img.setAttribute('src', urls[randomNum]);
        div.append(img);
        divDelete.append(div);
        console.log(divDelete);

        deleteAllgifs();
    }

    function transferFailed() {
        console.log("An error occurred while transferring the file.");
    }
};
searchCategoryBtn.addEventListener('click', (e) => {
    e.preventDefault()
    if (!input.value) {
        alert('Must fill a category');
    } else {
        createDeleteBtnToEachGif();;
        deleteAllGifBtn.style.display = 'block';
    }
})