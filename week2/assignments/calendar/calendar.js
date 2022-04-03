// modify this script to populate the month select you create in the HTML page from an array of month names
// you can use either a for loop or an array.map to populate the select. remember that while arrays start with 
// zero, month numbers go from 1-12

// modify this script to run a function called printCalendar() when the user clicks the "Go" button

// modify this script to use the first day of the month the user selects in place of the const today 

var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var select = document.getElementById("select");

let options = months.map((month, index) => {
   select.innerHTML +=  `<option value= ${index}>${month}</option>`
})

document.getElementById("button").addEventListener("click", function() {
    printCalendar()
})
function printCalendar() {

const month = document.getElementById("select").value 
const yearValue = document.getElementById('yearInput').value

document.getElementById('calendarDays').innerHTML = ''
const calDate = `${document.getElementById('select').value}  ${document.getElementById('yearInput').value}`
const firstDay = new Date(yearValue, month, 1)
let days
switch (Number(month)) {
    case 1:
        days = 28
        break
    case 3:
    case 5:
    case 8: 
    case 10:
        days = 30
        break
    default:
        days = 31
}
    
let x
const weekday = firstDay.getDay() 
console.log(weekday)
for (x = 0; x < weekday; x++){
    document.getElementById('calendarDays').innerHTML += "<div class='blankDay'>&nbsp;</div>"
}

let dt = 0
do {
    dt++
    document.getElementById('calendarDays').innerHTML += `<div class='calendarCell'>${dt}</div`
} while ( dt < days)

const monthName = firstDay.toLocaleDateString('default', {month:'long'})
const year = firstDay.getFullYear()
document.querySelector('.calendarTitle').innerText = `${monthName} ${year}`


const remainder = (7 - ((x + dt) % 7)) 
let y = 0
while ( y < remainder) {
    document.getElementById('calendarDays').innerHTML += "<div class='blankDay'>&nbsp;</div>"
    y++
}
}