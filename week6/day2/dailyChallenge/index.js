const gameInfo = [{
        username: "john",
        team: "red",
        score: 5,
        items: ["ball", "book", "pen"]
    },
    {
        username: "becky",
        team: "blue",
        score: 10,
        items: ["tape", "backpack", "pen"]
    },
    {
        username: "susy",
        team: "red",
        score: 55,
        items: ["ball", "eraser", "pen"]
    },
    {
        username: "tyson",
        team: "green",
        score: 1,
        items: ["book", "pen"]
    },
];

// 1:
let userName = [];
gameInfo.forEach(item => userName.push(`${item.username}!`));

// 2:
let winners = [];
gameInfo.forEach(item => item.score > 5 ? winners.push(item.username) : []);

// 3:
gameInfo.map(item => item.score).reduce((prevNum, currNum) => prevNum + currNum)