$(document).ready(function() {
 
  //Sort random function
  function random(owlSelector){
    owlSelector.children().sort(function(){
        return Math.round(Math.random()) - 0.5;
    }).each(function(){
      $(this).appendTo(owlSelector);
    });
  }
 
  $("#owl-news").owlCarousel({
    navigation: true,
    navigationText: [
        "<img src='images/prev-horizontal.png' class='owl-prev'>",
      "<img src='images/next-horizontal.png' class='owl-next'>"
      ],
    beforeInit : function(elem){
      //Parameter elem pointing to $("#owl-demo")
      random(elem);
    }
 
  });
 
});