// var Pomodoro = {
// 	session_time: 25,
// 	break_time: 5,
// 	inSession: false,
// 	inBreak: false,
// 	startTimer: function(time){
// 		console.log(time);
// 		console.log("Timer started");
// 	},
// 	pauseTimer: function(time){
// 		console.log("Timer paused");
// 	},
// 	resetTimer: function(time){
// 		console.log("Timer reset");
// 	}
// };
function Pomodoro() {
    this.session_minutes = 25;
    this.session_seconds = 0;
    this.startBreak = false;
    this.duration = (this.session_minutes * 60) + this.session_seconds;
    this.timer = this.duration;
    this.startTimer = function(this.timer) {
        var clock = this.timer;
        var duration = this.duration;
        setInterval(function() {
            minutes = parseInt(clock / 60, 10);
            seconds = parseInt(clock % 60, 10);
            seconds = seconds < 10 ? "0" + seconds : seconds;
            console.log(minutes + ":" + seconds);
            // display.text(session_minutes + ":" + seconds);
            if (--clock < 0) {
                clock = duration;
                clearInterval(clock);
            }
        }, 1000);
    };
    this.pauseTimer = function() {
        clearInterval(this.timer);
    };
    this.resetTimer = function() {
        console.log("Timer reset");
    };
}
var sessionClock = new Pomodoro();
var breakClock = new Pomodoro();