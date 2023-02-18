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
   });

   $(document).ready(function() {
     // Create the slideToggle effects each of the paragraphs and
     // buttons
     $("#button_effects1").click(function(){
         $('#par1').slideToggle('1000');
     });
     $("#button_effects2").click(function(){
         $('#par2').slideToggle('1000');
     });
     $("#button_effects3").click(function(){
         $('#par3').slideToggle('1000');
     });
     $("#button_effects4").click(function(){
         $('#par4').slideToggle('1000');
     });
     $("#button_effects5").click(function(){
         $('#par5').slideToggle('1000');
     });
     $("#button_effects6").click(function(){
         $('#par6').slideToggle('1000');
     });
 
     // Use the fadeTo effect when the mouse hovers over a specific button
     // and fadeTo again when the mouse is no longer hovering over the button
     $("#button_effects1").mouseenter(function(){
         $('#button_effects1').fadeTo(1000, 0.5);
     });
     $("#button_effects1").mouseleave(function(){
         $('#button_effects1').fadeTo(1000, 1);
     });
 
     $("#button_effects2").mouseenter(function(){
         $('#button_effects2').fadeTo(1000, 0.5);
     });
     $("#button_effects2").mouseleave(function(){
         $('#button_effects2').fadeTo(1000, 1);
     });
 
     $("#button_effects3").mouseenter(function(){
         $('#button_effects3').fadeTo(1000, 0.5);
     });
     $("#button_effects3").mouseleave(function(){
         $('#button_effects3').fadeTo(1000, 1);
     });
 
     $("#button_effects4").mouseenter(function(){
         $('#button_effects4').fadeTo(1000, 0.5);
     });
     $("#button_effects4").mouseleave(function(){
         $('#button_effects4').fadeTo(1000, 1);
     });
 
     $("#button_effects5").mouseenter(function(){
         $('#button_effects5').fadeTo(1000, 0.5);
     });
     $("#button_effects5").mouseleave(function(){
         $('#button_effects5').fadeTo(1000, 1);
     });
 
     $("#button_effects6").mouseenter(function(){
         $('#button_effects6').fadeTo(1000, 0.5);
     });
     $("#button_effects6").mouseleave(function(){
         $('#button_effects6').fadeTo(1000, 1);
     });
      
     // Chaining method
     // $("#myButton").removeClass("blueBox");
     // $("#myButton").addClass("border");
 
     $("#myButton").removeClass("blueBox").addClass("border");
     $("p").css("color", "blue").slideUp(2000).slideDown(2000);
     $("a").attr("href", "http://www.example.com");
 });
 // attr - attribute