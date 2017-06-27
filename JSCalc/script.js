$(document).ready(function() {

  var result = $('.result');

// Evaluate an expression and throws an error if expression is incorrect
  function calc(exp) {
    try {
      result.text(eval(exp.toString()));
    } catch (e) {
      result.text("Err");
			// clear the screen after 1s
			window.setTimeout(clear, 1000);
    }
  }
	// clear the screen
	function clear(){
		result.text("");
	}
  $("#ac").click(function() {
    clear();
  });

  // Concatenate numbers on screen
  $('#zero').click(function() {
    result.text(result.text() + 0);
  });
  $('#1').click(function() {
    result.text(result.text() + 1);
  });
  $('#2').click(function() {
    result.text(result.text() + 2);
  });
  $('#3').click(function() {
    result.text(result.text() + 3);
  });
  $('#4').click(function() {
    result.text(result.text() + 4);
  });
  $('#5').click(function() {
    result.text(result.text() + 5);
  }); +
  $('#6').click(function() {
    result.text(result.text() + 6);
  });
  $('#7').click(function() {
    result.text(result.text() + 7);
  });
  $('#8').click(function() {
    result.text(result.text() + 8);
  });
  $('#9').click(function() {
    result.text(result.text() + 9);
  });

  // Concatenate operators
  $('#plus').click(function() {
    result.text(result.text() + "+");
  });
  $('#minus').click(function() {
    result.text(result.text() + "-");
  });

  $('#multiply').click(function() {
    result.text(result.text() + "*");
  });

  $('#divide').click(function() {
    result.text(result.text() + "/");
  });
	$('#comma').click(function(){
		result.text(result.text() + ".");
	})
// equal evaluate an expression
  $('#equal').click(function() {
    calc(result.text());
  });


  // Concatenate numbers and operators with keypress
  $(document).keypress(function(e) {
		console.log(e.which);
    switch (e.which) {
      case 13:
        calc(result.text());
        break;
      case 42:
        result.text(result.text() + "*");
        break;
      case 43:
        result.text(result.text() + "+");
        break;
      case 45:
        result.text(result.text() + "-");
        break;
      case 46:
        result.text(result.text() + ".");
        break;
      case 47:
        result.text(result.text() + "/");
        break;
      case 48:
        result.text(result.text() + 0);
        break;
      case 49:
        result.text(result.text() + 1);
        break;
      case 50:
        result.text(result.text() + 2);
        break;
      case 51:
        result.text(result.text() + 3);
        break;
      case 52:
        result.text(result.text() + 4);
        break;
      case 53:
        result.text(result.text() + 5);
        break;
      case 54:
        result.text(result.text() + 6);
        break;
      case 55:
        result.text(result.text() + 7);
        break;
      case 56:
        result.text(result.text() + 8);
        break;
      case 57:
        result.text(result.text() + 9);
        break;
    }
  });

});
