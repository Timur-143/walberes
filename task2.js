let today = new Date();
let hour = today.getHours();
let min = today.getMinutes();
let day = today.toDateString();
let time = today.toTimeString();

document.writeln('<h1>' + day + ' ' + hour + ':' + min + "</h1>");
document.writeln("<h2>" + 'Time-' + hour + ':' + min + '</h2>');

let greeting;

if(hour > 18){
    greeting = 'Good eving'
} else if(hour > 12){
    greeting = "Good day"
} else if(hour > 5){
    greeting = 'Good moning'
}
else{
    "good night"
}

document.writeln('<h2>' + greeting + "</h2>")