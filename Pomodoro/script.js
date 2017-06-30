$(document).ready(function() {


    var $break = $("#break-btn");
    var $session = $('#session-btn');
    var $play = $(".fa-play");
    var $pause = $(".fa-pause");
    var $stop = $(".fa-stop");

    var session_timer = 25;
    var break_timer = 5;
    var seconds = 0;


    // Select between Break and Session
    $break.click(function() {
        $(".timer").addClass("hidden");
        $(".break").removeClass("hidden");
        $break.addClass("whiten");
        $session.removeClass("whiten");
    });

    $session.click(function() {
        $(".break").addClass("hidden");
        console.log($(".break"));
        $(".timer").removeClass("hidden");
        $session.addClass("whiten");
        $break.removeClass("whiten");
    });

    // Add minutes to session or break timer
    $('.session-minus').click(function() {
        session_timer--;
        if (session_timer < 1) {
            session_timer = 1;
        }
        $('.session-time').html(session_timer + ":00");
    });
    $('.session-plus').click(function() {
        session_timer++;
        $('.session-time').html(session_timer + ":00");

    });
    $('.session-time').html(session_timer + ":00");
    $('.break-time').html(break_timer + ":00");

    $('.break-minus').click(function() {
        break_timer--;
        if (break_timer < 1) {
            break_timer = 1;
        }
        $('.break-time').html(break_timer + ":00");
    });
    $('.break-plus').click(function() {
        break_timer++;
        $('.break-time').html(break_timer + ":00");
    });


    // Set functionality for play, pause and stop
    $play.click(function() {
        $pause.removeClass("hidden");
        $play.addClass("hidden");
        $('.btn').addClass("hidden");
        startTimer();
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


    function startTimer() {
        console.log("Timer starter, counting down!");
        session_timer = $('.session-time').text();
        console.log(session_timer);


    }
    function stopTimer(){
    	console.log("Timer stopped!");
    }
    function pauseTimer(){
    	console.log("Timer in pause");
    }

});