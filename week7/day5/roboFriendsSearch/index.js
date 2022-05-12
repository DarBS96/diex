// Mini - Project - Robo - Friends Search;

// vue
const main = document.querySelector('.main')
const input = document.getElementById('findRobot')
const dataList = document.getElementById('robots')
const btnDisplayAll = document.querySelector('.displayAllRobots')

// Model

const robots = [{
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        image: 'https://robohash.org/1?200x200'
    },
    {
        id: 2,
        name: 'Ervin Howell',
        username: 'Antonette',
        email: 'Shanna@melissa.tv',
        image: 'https://robohash.org/2?200x200'
    },
    {
        id: 3,
        name: 'Clementine Bauch',
        username: 'Samantha',
        email: 'Nathan@yesenia.net',
        image: 'https://robohash.org/3?200x200'
    },
    {
        id: 4,
        name: 'Patricia Lebsack',
        username: 'Karianne',
        email: 'Julianne.OConner@kory.org',
        image: 'https://robohash.org/4?200x200'
    },
    {
        id: 5,
        name: 'Chelsey Dietrich',
        username: 'Kamren',
        email: 'Lucio_Hettinger@annie.ca',
        image: 'https://robohash.org/5?200x200'
    },
    {
        id: 6,
        name: 'Mrs. Dennis Schulist',
        username: 'Leopoldo_Corkery',
        email: 'Karley_Dach@jasper.info',
        image: 'https://robohash.org/6?200x200'
    },
    {
        id: 7,
        name: 'Kurtis Weissnat',
        username: 'Elwyn.Skiles',
        email: 'Telly.Hoeger@billy.biz',
        image: 'https://robohash.org/7?200x200'
    },
    {
        id: 8,
        name: 'Nicholas Runolfsdottir V',
        username: 'Maxime_Nienow',
        email: 'Sherwood@rosamond.me',
        image: 'https://robohash.org/8?200x200'
    },
    {
        id: 9,
        name: 'Glenna Reichert',
        username: 'Delphine',
        email: 'Chaim_McDermott@dana.io',
        image: 'https://robohash.org/9?200x200'
    },
    {
        id: 10,
        name: 'Clementina DuBuque',
        username: 'Moriah.Stanton',
        email: 'Rey.Padberg@karina.biz',
        image: 'https://robohash.org/10?200x200'
    }
];

class RobotCard {
    constructor({ id, name, username, email, image }) {
        this.id = id
        this.name = name
        this.username = username
        this.email = email
        this.image = image
    }
    creatingRobotCard() {
        const divContainer = document.createElement('div');
        divContainer.id = this.id
        divContainer.className = 'divContainer';
        const itemsContainer = document.createElement('div');
        itemsContainer.className = 'itemsContainer';
        const divImageContainer = document.createElement('div');
        divImageContainer.className = 'divImageContainer';
        const img = document.createElement('img');
        img.className = 'robotImage'
        img.setAttribute('src', this.image)
        divImageContainer.append(img)
        const robotName = document.createElement('h2');
        robotName.className = 'robotName';
        robotName.textContent = this.name;
        const username = document.createElement('p');
        username.className = 'username';
        username.textContent = this.username;
        divContainer.append(divImageContainer, robotName, username);
        main.append(divContainer);
    };
}

const displayAllRobots = () => {
    robots.forEach(robot => new RobotCard({...robot }).creatingRobotCard())
}

displayChosenRobot = () => {
    input.addEventListener('input', (e) => {
        e.preventDefault()
        const notChosen = robots.filter(robot => { return !robot.name.toLowerCase().includes(input.value.toLowerCase()); })
        notChosen.forEach(robot => {
            document.getElementById(robot.id).style.display = 'none'
        })
        const chosen = robots.filter(robot => robot.name === input.value)
        chosen.forEach(robot => {
            const divContainer = document.getElementById(robot.id)
            divContainer.style.display = 'block';
        })
        if (input.value === '') {
            robots.forEach(robot => {
                const divContainer = document.getElementById(robot.id);
                divContainer.style.display = 'block';
            })
        }
    })
}

const whatToDisplay = () => {
    displayChosenRobot();
    displayAllRobots();
}

const createOptionsToDataList = () => {
    robots.forEach(robot => {
        const option = document.createElement('option')
        option.setAttribute('value', robot.name)
        dataList.append(option)
    })

}

// controller

whatToDisplay();
createOptionsToDataList();

btnDisplayAll.addEventListener('click', () => {
    location.reload()
})