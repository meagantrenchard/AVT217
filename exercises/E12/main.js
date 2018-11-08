
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
     });
      $(".places").click(function(){
         $("#ocean").fadeIn('slow');
    
     });
       $(".places2").click(function(){
         $("#vero").fadeIn('slow');
    
     });
        $(".places3").click(function(){
         $("#oka").fadeIn('slow');
    
     });
         $(".places4").click(function(){
         
         $("#new").fadeIn('slow');
    
     });
    $("#harwichimg.hover").mouseover(function(){
        $(this).toggleClass("harwichimg.png")
    });

}
 
function vPosH1() {
     }