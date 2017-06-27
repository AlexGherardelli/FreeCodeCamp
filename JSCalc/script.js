$(document).ready(function() {

    //  Clear the screen
    $("#ac").click(function() {
        $(".result").text("");
    });

     // Concatenate numbers on screen
    $('#zero').click(function() {
        $('.result').text($('.result').text() + 0);
    });
    $('#1').click(function() {
        $('.result').text($('.result').text() + 1);
    });
    $('#2').click(function() {
        $('.result').text($('.result').text() + 2);
    });
    $('#3').click(function() {
        $('.result').text($('.result').text() + 3);
    });
    $('#4').click(function() {
        $('.result').text($('.result').text() + 4);
    });
    $('#5').click(function() {
        $('.result').text($('.result').text() + 5);
    });
    $('#6').click(function() {
        $('.result').text($('.result').text() + 6);
    });
    $('#7').click(function() {
        $('.result').text($('.result').text() + 7);
    });
    $('#8').click(function() {
        $('.result').text($('.result').text() + 8);
    });
    $('#9').click(function() {
        $('.result').text($('.result').text() + 9);
    });

    // Concatenate operators
    $('#plus').click(function(){
    	console.log("plus");
    	$('.result').text($('.result').text() + "+");
    });
        $('#minus').click(function(){
    	console.log("plus");
    	$('.result').text($('.result').text() + "+");
    });

    $('#multiply').click(function(){
    	console.log("plus");
    	$('.result').text($('.result').text() + "+");
    });

    $('#plus').click(function(){
    	console.log("plus");
    	$('.result').text($('.result').text() + "+");
    });





});