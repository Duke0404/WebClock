function updateClock () {
    //Take all time data
    var totalTime = new Date();

    //Extract required data
    var currentHours = totalTime.getHours();
    var currentMinutes = totalTime.getMinutes();
    var currentSeconds = totalTime.getSeconds();

    //12hr clock
    currentHours = (currentHours > 12 ? currentHours - 12 : currentHours);

    //Padding with 0
    currentHours = (currentSeconds < 10 ? "0" : "") + currentHours;
    currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
    currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds;

    //Format data
    var clock1 = currentHours + ":" + currentMinutes + ":" + currentSeconds;

    //Print data
    document.getElementById("clock1").innerHTML = clock1;
}
