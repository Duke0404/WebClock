function updateClock () {
    //Take all time data
    var totalTime = new Date();

    //Extract required data
    var currentHours = totalTime.getHours();
    var currentMinutes = totalTime.getMinutes();
    var currentSeconds = totalTime.getSeconds();

    //Format data
    var clock1 = currentHours + ":" + currentMinutes + ":" + currentSeconds;

    //Print data
    document.getElementById("clock1").innerHTML = clock1;
}
