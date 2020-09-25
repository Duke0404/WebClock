var totalTime = new Date();
var currentHours = totalTime.getHours();
var currentMinutes = totalTime.getMinutes();
var currentSeconds = totalTime.getSeconds();
var clock1 = currentHours + ":" + currentMinutes + ":" + currentSeconds;
document.getElementById("clock1").innerHTML = clock1;
