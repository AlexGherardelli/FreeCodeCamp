
    function Pomodoro() {
        this.minutes = 1;
        this.seconds = 0;
        this.startBreak = false;
        this.duration = (this.minutes * 60) + this.seconds;
        this.timer = this.duration;
        this.countdown;
        var that = this; // private this
        this.startTimer = function() {
            that.countdown = setInterval(function() {
                var min = parseInt(that.timer / 60, 10);
                var sec = parseInt(that.timer % 60, 10);

                sec = sec < 10 ? "0" + sec : sec;
                console.log(min + ":" + sec);

                // display.text(minutes + ":" + sec);
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
    // breakClock set to five minutes
    breakClock.minutes = 5;

    // Display session minutes
    var display = $('.session-time');
    var break_timer = $('.break-time');
    display.html(sessionClock.minutes + ":00");
    // display.html(breakClock.minutes + ":00");


    $('.session-minus').click(function() {
        sessionClock.minutes--;
        if (sessionClock.minutes < 1) {
            sessionClock.minutes = 1;
        }
        display.html(sessionClock.minutes + ":00");
    });
    $('.session-plus').click(function() {
        sessionClock.minutes++;
        display.html(sessionClock.minutes + ":00");

    });


    // Switch between break and session
    $("#break-btn").click(function() {
        $(".timer").addClass("hidden");
        $(".break").removeClass("hidden");
        $("#break-btn").addClass("whiten");
        $('#session-btn').removeClass("whiten");
        $('.break-time').html(breakClock.minutes + ":00");
    });

        $('#session-btn').click(function() {
        $(".break").addClass("hidden");
        $(".timer").removeClass("hidden");
        $('#session-btn').addClass("whiten");
        $("#break-btn").removeClass("whiten");
    });





