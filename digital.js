// 28-05-2023

// var d = new Date();
// var dd = d.getDate();
// var mm = d.getMonth();
// var yyyy = d.getFullYear();


// var date = dd+"-"+(mm+1)+"-"+yyyy;

// console.log(date);


// var d = prompt("Enter your lucky day");

// var present = new Date();

// var a = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];

// console.log("Your lucky day is: ",a[d.getDay()]);

// var old = new Date();
// old.setFullYear(2020,03,16);

// we can directly compare two dates in javascript

// if(old>present){
//     console.log("Greater than the present date");
// }
// else{
//     console.log("less than the present date");
// }


//  I want to print the digital clock in my website

function systemTime(){
var d = new Date();
var h = d.getHours();
var m = d.getMinutes();
var s = d.getSeconds();

var session = "AM";
if(h==0){
    h = 12;
}

if(h>12){
    h = h-12;
    session = "PM"
}
h = (h<10)?"0"+h:h;
m = (m<10)?"0"+m:m;
s = (s<10)?"0"+s:s;
var time = h+':'+m+':'+s+" "+session;

document.getElementById("clock").innerText = time;

// setTimeout(function(){
//     systemTime(),1000
// })

// setTimeout(()=>{
//     systemTime(),1000
// })

// setTimeout(systemTime,1000); //If you place this outside of the function itruns only one time until you refresh

}

systemTime();

// setInterval(() => {
//     systemTime()
// }, 1000);

setInterval(systemTime,1000);

// We have two methods they are

//  1. setTimeOut() -> Execute only once

// this accepts the setTimeout(expression,milliseconds)


//  2. setInterval(expression,milliseconds,parameters....)-> Execute continuously