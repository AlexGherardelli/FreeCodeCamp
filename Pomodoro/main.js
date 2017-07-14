var isBreakTime = false;

function Pomodoro(time) {
    this.minutes = time;
    this.seconds = 0;
    this.countdown;
    var that = this; // private this
    this.startTimer = function() {
    		that.duration = (this.minutes * 60) + this.seconds;
    		that.timer = this.duration;
        that.countdown = setInterval(function() {
            var min = parseInt(that.timer / 60, 10);
            var sec = parseInt(that.timer % 60, 10);

            sec = sec < 10 ? "0" + sec : sec;
            display.text(min + ":" + sec);

            // display.text(minutes + ":" + sec);
            if (--that.timer < 0) {
                that.timer = that.duration;
                isBreakTime = true;
                clearInterval(that.countdown);
            }

        }, 1000);
    };
    this.pauseTimer = function() {
        clearInterval(that.countdown);
    };
    this.resetTimer = function() {
        clearInterval(that.countdown);
        this.seconds = 0;
        display.text(this.minutes + ":00");
    };
}

// intialize two new Pomodoros
var sessionClock = new Pomodoro(1);
var breakClock = new Pomodoro(5);


// Display session minutes
var display = $('.session-time');
var break_timer = $('.break-time');
display.html(sessionClock.minutes + ":00");
$('.break-time').html(breakClock.minutes + ":00");

// Control buttons
var play = $(".fa-play");
var pause = $(".fa-pause");
var reset = $(".fa-stop");

// Switch between break and session
$("#break-btn").click(function() {
    $(".timer").addClass("hidden");
    $(".break").removeClass("hidden");
    $("#break-btn").addClass("whiten");
    $('#session-btn').removeClass("whiten");

});

$('#session-btn').click(function() {
    $(".break").addClass("hidden");
    $(".timer").removeClass("hidden");
    $('#session-btn').addClass("whiten");
    $("#break-btn").removeClass("whiten");
});

// Add minutes to pomodoro session
$('.session-minus').click(function() {
    sessionClock.minutes--;
    if (sessionClock.minutes < 1)
        sessionClock.minutes = 1;
    display.html(sessionClock.minutes + ":00");
});
// Remove minutes to pomodoro session
$('.session-plus').click(function() {
    sessionClock.minutes++;
    display.html(sessionClock.minutes + ":00");
});
// Add minutes to break session
$('.break-minus').click(function(){
	breakClock.minutes--;
	if(breakClock.minutes < 1){
		breakClock.minutes = 1;
	}
	$('.break-time').text(breakClock.minutes + ":00");

});
// Remove minutes to break session
$('.break-plus').click(function(){
	breakClock.minutes++;
	$(".break-time").text(breakClock.minutes + ":00");

});

// if play is clicked, start sessionClock
play.click(function(){
	pause.removeClass("hidden");
	play.addClass("hidden");
	$('.btn').addClass("hidden");
	sessionClock.startTimer();
});


// if pause is clicked, stop sessionClock
pause.click(function(){
	sessionClock.pauseTimer();
	play.removeClass("hidden");
	pause.addClass("hidden");

});
// if reset button is clicked, reset sessionClock and breakClock
reset.click(function(){
	sessionClock.resetTimer();
	// breakClock.resetTimer();
	play.removeClass("hidden");
	pause.addClass("hidden");
	$('.btn').removeClass("hidden");
});


// if isBreakTime is true 
	// start BreakTimer