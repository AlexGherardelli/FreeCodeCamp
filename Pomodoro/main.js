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

function Pomodoro(){
	this.session_minutes = 25;
	this.seconds = 0;
	this.inSession = false;
	this.duration = (this.minutes * 60) + this.seconds;
	this.startTimer = function(){
		console.log(this.duration);
	};
	this.pauseTimer = function(){
		console.log("Timer paused");
	};
	this.resetTimer = function(){
		console.log("Timer reset");
	};
}

var sessionClock = new Pomodoro();
var breakClock = new Pomodoro();