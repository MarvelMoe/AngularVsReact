$(document).ready(function() {
$('#react').animate({ top: 150, left: 10 }, 1200, 'easeOutBounce');
 $('#slideshow').cycle({ 
   fx:     'scrollUp', 
    easing: 'easeOutBounce', 
    delay:  -3000 
   });
 });

$(document).ready(function() {
  $('#ang').stop(true, true).delay(1000).animate({ top: 150, right: 10 }, 1300, 'easeInOutElastic');
  $('#slideshow').cycle({ 
   fx:     'scrollDown', 
    easing: 'easeInOutElastic', 
    delay: - 1000 
     });
});

$(document).ready(function(){
    $("#react").click(function(){
        $(this).animate({left: '340px'}, "200");
        $(this).animate({left: '0px'});
    });
    $("#ang").click(function(){
        $(this).animate({right: '280px'}, "fast");
        $(this).animate({right: '0px'});
    });
});

 function letsGetReady() { 
      var newAudio = document.createElement('audio')
      newAudio.setAttribute("src","rumble.mp3")
      newAudio.autoplay = true;
  }
letsGetReady()