// // Exercises XP;

// // Exercise 1 : Change The Navbar;

// // 1:
// const elNavbar = document.getElementById('navBar');
// //console.log(elNavbar)

// // elNavbar.setAttribute('id', 'socialNetworkNavigation');

// // 2:
// // const li = document.createElement('li')
// // const ul = document.querySelector('ul')
// // console.log(ul)
// // const text = document.createTextNode('Logout')
// // updateList = li.appendChild(text)
// // console.log(ul.appendChild((updateList)));

// //Bonus:
// // console.log(ul.firstElementChild.textContent)
// // console.log(ul.lastElementChild.textContent);

// // Exercise 2 : Users;

// // 1:
// const ul = document.getElementsByClassName('list');
// ul[0].lastElementChild.innerHTML = 'Richard';
// console.log(ul);

// // // 2:
// ul[0].firstElementChild.innerHTML = 'Dar';
// ul[1].firstElementChild.innerHTML = 'Dar';

// // // 3:
// const text = document.createTextNode('Hey students');
// const text2 = document.createTextNode('Hey students');
// const createLi = document.createElement('li');
// const newLi = ul[0].appendChild(createLi);
// newLi.appendChild(text);
// const createLi2 = document.createElement('li');
// console.log(createLi2);
// const newLi2 = ul[1].appendChild(createLi2);
// newLi2.appendChild(text2);

// // // 4:
// ul[1].children[1].remove();

// // //Bonus 

// // 1:
// for (list of ul) {
//     list.classList.add('student_list');
//     console.log(list);
// }

// // 2:
// const newClassList = ul[0].classList;
// newClassList.add('student_list', 'university', 'attendance');

// // Exercise 3 : Users And Style;

// // 1:
// const elDiv = document.querySelector('div');
// const elLi = document.querySelectorAll('li');
// const elBody = document.querySelector('body');

// elDiv.style.background = 'lightBlue';
// elDiv.style.padding = '15px';
// elLi[0].style.display = 'none';
// elLi[1].style.border = '2px black solid';
// elBody.style.fontSize = '30px';
// //Bonus
// if (elDiv.style.background = 'lightBlue') {
//     // alert('Hello x and y')
// }

// Exercises XP Ninja;

// Exercise 1 : Calendar;

;
// check how many days in a month 
function daysInMonth(iMonth, iYear) {
    return 32 - new Date(iYear, iMonth, 32).getDate();
}
let date = 1;

const createCalendar = (year, month) => {
    const daysName = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];

    //Starting day of the month
    let firstDay = (new Date(year, month)).getDay();
    console.log(firstDay);

    // creates a <table> element and a <tbody> element
    let tbl = document.createElement("table");
    let tblBody = document.createElement("tbody");

    // creating all cells
    for (let i = 0; i < 6; i++) {

        // creates a table row
        let row = document.createElement("tr");

        for (let j = 0; j < 7; j++) {

            if (i === 0) {
                cell = document.createElement("td");
                cellText = document.createTextNode(daysName[j]);
                cell.appendChild(cellText);
                row.appendChild(cell);

            } else if (i === 1 && j < firstDay) {

                cell = document.createElement("td");
                cellText = document.createTextNode(".");
                cell.appendChild(cellText);
                row.appendChild(cell);

            } else if (date > daysInMonth(month, year)) {
                break;
            } else {
                cell = document.createElement("td");
                cellText = document.createTextNode(date);
                cell.appendChild(cellText);
                row.appendChild(cell);
                date++;
            }
        }

        // add the row to the end of the table body
        tblBody.appendChild(row);
    }

    // put the <tbody> in the <table>
    tbl.appendChild(tblBody);
    // appends <table> into <body>
    document.body.appendChild(tbl);
    // sets the border attribute of tbl to 2;
    tbl.setAttribute("border", "2");
};


createCalendar(4, 2075);