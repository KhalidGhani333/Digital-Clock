"use strict";
function myClock() {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday"];
    let Months = ["Januray", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let hours = document.getElementById("hour");
    let minutes = document.getElementById("minutes");
    let seconds = document.getElementById("seconds");
    let period = document.getElementById("ampm");
    let date = document.getElementById("ddmmyy");
    let day = document.getElementById("days");
    let time = new Date();
    let hrs = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    let d = time.getDay();
    let dd = time.getDate();
    let mon = time.getMonth();
    let year = time.getFullYear();
    if (hrs > 12) {
        hrs = hrs - 12;
    }
    if (hrs == 0) {
        hrs = 12;
    }
    let ampm = (hrs <= 12) ? "AM" : "PM";
    hrs = (hrs < 10) ? "0" + hrs : hrs;
    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;
    hours.innerHTML = hrs;
    minutes.innerHTML = min;
    seconds.innerHTML = sec;
    period.innerHTML = ampm;
    day.innerHTML = days[d];
    date.innerHTML = dd + " " + Months[mon] + "," + year;
}
setInterval(myClock, 1000);
