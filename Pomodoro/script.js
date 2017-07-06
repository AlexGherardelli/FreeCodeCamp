$(document).ready(function() {


    var break_btn = $("#break-btn");
    var session_btn = $('#session-btn');
    var play = $(".fa-play");
    var pause = $(".fa-pause");
    var stop = $(".fa-stop");
    var break_timer = $('.break-time');
    var display = $('.session-time')

    var session_minutes = 25;
    var seconds = 0;
    var break_minutes = 5;

    // Select between Break and Session
    break_btn.click(function() {
        $(".timer").addClass("hidden");
        $(".break").removeClass("hidden");
        break_btn.addClass("whiten");
        session_btn.removeClass("whiten");
    });

    session_btn.click(function() {
        $(".break").addClass("hidden");
        $(".timer").removeClass("hidden");
        session_btn.addClass("whiten");
        break_btn.removeClass("whiten");
    });

    // Add minutes to session or break timer
    $('.session-minus').click(function() {
        session_minutes--;
        if (session_minutes < 1) {
            session_minutes = 1;
        }
        display.html(session_minutes + ":00");
    });
    $('.session-plus').click(function() {
        session_minutes++;
        display.html(session_minutes + ":00");

    });
    display.html(session_minutes + ":00");
    $('.break-time').html(break_minutes + ":00");

    $('.break-minus').click(function() {
        break_minutes--;
        if (break_minutes < 1) {
            break_minutes = 1;
        }
        
        $('.break-time').html(break_minutes + ":0" + seconds);
    });
    $('.break-plus').click(function() {
        break_minutes++;
        $('.break-time').html(break_minutes + ":0" + seconds);
    });


    // Set functionality for play, pause and stop
    play.click(function() {
        // pause.removeClass("hidden");
        // play.addClass("hidden");
        $('.btn').addClass("hidden");
            console.log("Clicked");
    var duration = session_minutes * 60;
    var timer = duration,
        minutes, seconds;
    setInterval(function() {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.text(minutes + ":" + seconds);
        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
});

    // pause.click(function() {
    //     pause.addClass("hidden");
    //     play.removeClass("hidden");
    //     $('.btn').removeClass("hidden");
    //     pauseTimer();
    // });
    stop.click(function() {
        $('.btn').removeClass("hidden");
        stopTimer();
    });


    function startTimer(duration, display) {
      console.log(duration);
      console.log(display);
    }


    function stopTimer(){
    	console.log("Timer stopped!");
    }
    function pauseTimer(){
    	console.log("Timer in pause");
    }

});
