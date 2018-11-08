
$(document).ready(function() {
    // run function on initial page load
    demoFunction();
    // vPosH1();

    // run function on resize of the window
    $(window).resize(function() {
      // vPosH1();
    });
 
    // run function on scroll
    $(window).scroll(function() {
 
    });
});
 
function demoFunction() {
    $('.jqClick').click(function() {
         $('.header').toggleClass('smaller');
         // $('.header').css('font-size', '200px')
     })
     $(".jqClick").click(function(){
         $("#harwich").fadeIn('slow');
         $("#ocean").fadeIn('slow');
         $("#vero").fadeIn('slow');
         $("#oka").fadeIn('slow');
         $("#new").fadeIn('slow');
    
     });
    $(".items").click(function(){
        $(this).toggleClass("green")
    });
}
 
function vPosH1() {
     }