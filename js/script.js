jQuery(document).ready(function($) {
    var width = $(document).width();
    var fRim = $("#fRim");
    var rRim = $("#rRim");
    var fWheel = $("#fWheel");
    var rWheel = $("#rWheel");
    var pauseBtn = $("#pause");
    var mbz = $("#mbz");
    var esv = $("#esv");
    /*var rimsRot = TweenLite.to([fRim, rRim], 5, { rotation: 4800, transformOrigin: "50% 50%" });
    var mbzMove = TweenLite.fromTo($("#mbz"), 5, { x: "-400vw" }, { x: "400vw" });
    var wheelRot = TweenLite.to([fWheel, rWheel], 5, { rotation: -4800, transformOrigin: "50% 50%" });
    var esvMove = TweenLite.fromTo($("#esv"), 5, { x: "400vw" }, { x: "-400vw" });*/
var tl = new TimelineMax();
    tl.to([esv, mbz], 0.5, {autoAlpha:1}, "start").fromTo(mbz, 6, {  x: -width }, {x: width}, "start")
    .to([fRim, rRim], 6, { rotation: 7000, transformOrigin: "50% 50%"}, "start")
    .to([fWheel, rWheel], 6, { rotation: -7000, transformOrigin: "50% 50%" }, 2, "start")
    .fromTo(esv, 6, { x: width }, { x: -width }, 2, "start");
    
   /* rimsRot("mbz").
    mbzMove("mbz").
    wheelRot("esv").
    esvMove("esv");*/


    /*pauseBtn.onclick = function() {
        tl.paused(!tl.paused());
        pauseBtn.innerHTML = tl.paused() ? "play" : "pause";
    };*/




});