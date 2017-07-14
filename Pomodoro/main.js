$(document).ready(function() {
    function Pomodoro() {
        this.minutes = 1;
        this.seconds = 0;
        this.startBreak = false;
        this.duration = (this.session_min * 60) + this.seconds;
        this.timer = this.duration;
        this.countdown;
        var that = this; // private this
        this.startTimer = function() {
            that.countdown = setInterval(function() {
                var min = parseInt(that.timer / 60, 10);
                var sec = parseInt(that.timer % 60, 10);

                sec = sec < 10 ? "0" + sec : sec;
                console.log(min + ":" + sec);

                // display.text(session_min + ":" + sec);
                if (--that.timer < 0) {
                    that.timer = that.duration;
                    that.startBreak = true;
                    clearInterval(that.timer);
                }

            }, 1000);
        };
        this.pauseTimer = function() {
            clearInterval(that.countdown);
        };
        this.resetTimer = function() {
            clearInterval(that.countdown);
        };
    }

    // intialize two new Pomodoros
    var sessionClock = new Pomodoro();
    var breakClock = new Pomodoro();
    breakClock.minutes = 5;


    var display = $('.session-time');
    display.html(sessionClock.session_min + ":00");


    $('.session-minus').click(function() {
        sessionClock.session_min--;
        if (sessionClock.session_min < 1) {
            sessionClock.session_min = 1;
        }
        display.html(sessionClock.session_min + ":00");
    });
    $('.session-plus').click(function() {
        sessionClock.session_min++;
        display.html(sessionClock.session_min + ":00");

    });




});