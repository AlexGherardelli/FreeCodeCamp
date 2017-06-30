$(document).ready(function() {


    var $break = $("#break-btn");
    var $session = $('#session-btn');
    var $play = $(".fa-play");
    var $pause = $(".fa-pause");
    var $stop = $(".fa-stop");

    var session_timer = 25;
    var break_timer = 5;
    var seconds = 0;

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

    $play.click(function() {
        $pause.removeClass("hidden");
        $play.addClass("hidden");
    });

    $pause.click(function() {
        $pause.addClass("hidden");
        $play.removeClass("hidden")
    });


    $('.session-minus').click(function() {
        session_timer--;
        if(session_timer < 1){
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
			if(break_timer < 1){
			break_timer = 1;
			}
        $('.break-time').html(break_timer + ":00");
    });
    $('.break-plus').click(function() {
        break_timer++;
        $('.break-time').html(break_timer + ":00");
    });


});