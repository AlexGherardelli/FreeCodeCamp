function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    console.log(timer);
    console.log(duration);
    console.log(minutes);
    console.log(seconds);
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
display.textContent = minutes + ":" + seconds;
        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

$(document).ready(function(){
  var display = document.querySelector(".session-time");
  var min = 25;
  var duration = min * 60;


  $(".fa-play").click(function(){
    console.log("Clicked");
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
display.textContent = minutes + ":" + seconds;
        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);

  })





});
