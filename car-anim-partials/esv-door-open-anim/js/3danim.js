jQuery(document).ready(function($) {
    var width = $(document).width();
    var fWheel = $("#fWheel");
    var rWheel = $("#rWheel");
    var half = width/4;
    var rDoor = $("#rDoor");
    var esv = $("#esv");

var tl = new TimelineMax();
   tl.to([fWheel, rWheel], 2, { rotation: -1700, transformOrigin: "50% 50%" }, "driveon")
    .fromTo([esv, rDoor], 2, { x: width, ease: "Power4.easeOut" }, { x: half }, "driveon")
    .to([esv, rDoor], 0.5, {autoAlpha:1}, "driveon")
   .to(rDoor, 1, {rotationY: -75, transformOrigin: "320 208 -10", ease: "Power4.easeInOut" }, "open")
   .to(rDoor, 1, {rotationY: 0, transformOrigin: "320 208 -10", ease: "Power4.easeInOut", delay:1}, "shut")
   .to([fWheel, rWheel], 2, { rotation: -3700, transformOrigin: "50% 50%" }, "driveoff")
   .to([esv,rDoor], 2, { x: -width}, "driveoff");

});