function myClock(){
    let days:string[] = ["Sunday","Monday","Tuesday","Wednesday","Thrusday","Friday","Saturday"];
    let Months:string[] = ["Januray","Feburary","March","April","May","June","July","August","September","October","November","December"];
    let hours:any = document.getElementById("hour");
    let minutes:any = document.getElementById("minutes");
    let seconds:any = document.getElementById("seconds");
    let period:any = document.getElementById("ampm");
    let date:any = document.getElementById("ddmmyy");
    let day:any = document.getElementById("days");

    let time = new Date();

    let hrs:number|string = time.getHours();
    let min:number|string = time.getMinutes();
    let sec:number|string = time.getSeconds();
    let d = time.getDay();
    let dd = time.getDate();
    let mon = time.getMonth();
    let year = time.getFullYear();


    if(hrs > 12){
    hrs = hrs - 12
    }
    if(hrs == 0){
        hrs = 12
    }
    
    let ampm = (hrs <= 12)? "AM" : "PM";

    hrs = (hrs < 10)? "0" + hrs : hrs;
    min = (min < 10)? "0" + min : min;
    sec = (sec < 10)? "0" + sec : sec;
    
    hours.innerHTML = hrs;
    minutes.innerHTML = min;
    seconds.innerHTML = sec;
    period.innerHTML = ampm;
    day.innerHTML = days [d]
    date.innerHTML = dd + " " + Months[mon] + "," + year
    
}
setInterval(myClock,1000);
