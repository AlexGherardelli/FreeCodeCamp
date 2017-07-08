var pomodoro = {
  init: function(){
      console.log("Initialized");
  },
  hello: console.log(this);
};


window.onload = function(){
  pomodoro.init();
  pomodoro.hello;

};
