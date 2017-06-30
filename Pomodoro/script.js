$(document).ready(function() {


    var $break = $("#break-btn");
    var $session = $('#session-btn');
    var $play = $(".fa-play");
    var $pause = $(".fa-pause");
    var $stop = $(".fa-stop");
    var $break_time = $('.break-time');


    var session_minutes = 25;
    var break_minutes = 5;

    // Select between Break and Session
    $break.click(function() {
        $(".timer").addClass("hidden");
        $(".break").removeClass("hidden");
        $break.addClass("whiten");
        $session.removeClass("whiten");
    });

    $session.click(function() {
        $(".break").addClass("hidden");
        $(".timer").removeClass("hidden");
        $session.addClass("whiten");
        $break.removeClass("whiten");
    });

    // Add minutes to session or break timer
    $('.session-minus').click(function() {
        session_minutes--;
        if (session_minutes < 1) {
            session_minutes = 1;
        }
        $('.session-time').html(session_minutes);
    });
    $('.session-plus').click(function() {
        session_minutes++;
        $('.session-time').html(session_minutes);

    });
    $('.session-time').html(session_minutes + ":00");
    $('.break-time').html(break_minutes + ":00");

    $('.break-minus').click(function() {
        break_minutes--;
        if (break_minutes < 1) {
            break_minutes = 1;
        }
        $('.break-time').html(break_minutes + ":00");
    });
    $('.break-plus').click(function() {
        break_minutes++;
        $('.break-time').html(break_minutes + ":00");
    });


    // Set functionality for play, pause and stop
    $play.click(function() {
        $pause.removeClass("hidden");
        $play.addClass("hidden");
        $('.btn').addClass("hidden");
        startTimer(session_minutes, $('.session-time'));
    });

    $pause.click(function() {
        $pause.addClass("hidden");
        $play.removeClass("hidden");
        $('.btn').removeClass("hidden");
        pauseTimer();
    });
    $stop.click(function() {
        $('.btn').removeClass("hidden");
        stopTimer();
    });


    function startTimer(duration, display) {
				var timer = duration, minutes, seconds;
				setInterval(function () {
				minutes = parseInt(timer / 60, 10)
				seconds = parseInt(timer % 60, 10);

				minutes = minutes < 10 ? "0" + minutes : minutes;
				seconds = seconds < 10 ? "0" + seconds : seconds;

				display.textContent = minutes + ":" + seconds;

				if (--timer < 0) {
				timer = duration;
				}
				}, 1000);
    }


    function stopTimer(){
    	console.log("Timer stopped!");
    }
    function pauseTimer(){
    	console.log("Timer in pause");
    }

});