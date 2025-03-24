const clock = document.getElementById('clock')

setInterval(function () {
    const currentDate = new Date()
    clock.innerHTML = currentDate.toLocaleTimeString()
},1000)
const currentDate = new Date()
let weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const weekDayNumber = currentDate.getDay()
const weekSelectDay = weekDays[weekDayNumber]
//date
const months = [
    "January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December"
  ];
const date = currentDate.getDate()
const month = currentDate.getMonth()
const currentMonth= months[month]

//year
const currentYear=currentDate.getFullYear()
document.getElementById('year').innerHTML=currentYear
document.getElementById('month').innerHTML=currentMonth
document.getElementById('date').innerHTML=date
document.getElementById('day').innerHTML = weekSelectDay