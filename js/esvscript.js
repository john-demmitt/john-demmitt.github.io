jQuery(document).ready(function($) {
    var width = $(document).width();
    var fWheel = $("#fWheel");
    var rWheel = $("#rWheel");
    var half = width/4;
    var rDoor = $("#rDoor");
    var esv = $("#esv");
    TweenLite.set($("svg"), {perspective:200});
   
var tl = new TimelineMax();
   tl.to([fWheel, rWheel], 2, { rotation: -1800, transformOrigin: "50% 50%" }, "esv")
    .fromTo(esv, 2, { x: width }, { x: half }, "esv")
    .to(esv, 0.5, {autoAlpha:1}, "esv");

    tl.to(rDoor, 2, {rotationY: 180, transformOrigin: left});
    
   


});