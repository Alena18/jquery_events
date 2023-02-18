$(document).ready(function() {
    $("#stream1_btn").on("click", function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream1").addClass('highlight_stream');
   });
   // .on can be changes on .click
   // mouseenter, mouseleave
   $("#stream2_btn").on("click", function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream2").addClass('highlight_stream');
   });
   $("#stream3_btn").on("click", function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream3").addClass('highlight_stream');
   });
}); 

// animation effect

$(document).ready(function() {
    $("#stream1_btn").on(function() {
        $(".stream1").hide();
        $(".stream2").hide('slow');
        $(".stream3").hide('medium');
        $(".stream1").hide('fast');
        $(".stream1").hide('1000');
     //    $(".stream1").toggle();
     //    $(".stream1").toggle('1000');
     //    $(".stream1").slideDown();
     //    $(".stream1").slideDown('1000');
     //    $(".stream1").slideUp();
     //    $(".stream1").slideUp('1000');
     //    $(".stream1").slideToggle();
     //    $(".stream1").fadeIn('1000');
     //    $(".stream1").fadeOut('1000');
     //    $(".stream1").fadeToggle('1000');
     //    $(".stream1").fadeTo(1000, 0.5);
   });
   $("#stream2_btn").on("click", function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream2").addClass('highlight_stream');
   });
   $("#stream3_btn").on("click", function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream3").addClass('highlight_stream');
   });
}); 
