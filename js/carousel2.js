$(document).ready(function() {
 
  //Sort random function
  function random(owlSelector){
    owlSelector.children().each(function(){
      $(this).appendTo(owlSelector);
    });
  }
 
  $("#owl-news").owlCarousel({
    navigation: true,
    navigationText: [
        "<img src='../images/prev-horizontal.png' clas='owl-prev'>",
      "<img src='../images/next-horizontal.png' clas='owl-next'>"
      ],
    beforeInit : function(elem){
      //Parameter elem pointing to $("#owl-demo")
      random(elem);
    }
 
  });
 
});