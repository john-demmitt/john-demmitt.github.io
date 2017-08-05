jQuery(document).ready(function($) {
    var width = $(document).width();
    var fRim = $("#fRim");
    var rRim = $("#rRim");
    var fWheel = $("#fWheel");
    var rWheel = $("#rWheel");
    var esv = $("#esv");
    var mbz = $("#mbz");
    var svg = $("svg");
    var mbzHeight = mbz.height();
    var esvHeight = esv.height();

    /*var rimsRot = TweenLite.to([fRim, rRim], 5, { rotation: 4800, transformOrigin: "50% 50%" });
    var mbzMove = TweenLite.fromTo($("#mbz"), 5, { x: "-400vw" }, { x: "400vw" });
    var wheelRot = TweenLite.to([fWheel, rWheel], 5, { rotation: -4800, transformOrigin: "50% 50%" });
    var esvMove = TweenLite.fromTo($("#esv"), 5, { x: "400vw" }, { x: "-400vw" });*/
    var rev = new TimelineMax();
    rev.to(esv, 0.1, { rotationY: 180 }, "prep").to(esv, 0.1, { y: "-=160" }, "prep").to(mbz, 0.1, { rotationY: 180 }, "prep").to(mbz, 0.1, { y: "+=180" }, "prep").fromTo(mbz, 4, { x: width }, { x: -width }, "reverse")
        .to([fRim, rRim], 4, { rotation: -4000, transformOrigin: "50% 50%" }, "reverse")
        .to([fWheel, rWheel], 4, { rotation: 4000, transformOrigin: "50% 50%" }, "reverse")
        .fromTo(esv, 4, { x: -width }, { x: width }, "reverse")
        .to(svg, 0.5, { autoAlpha: 1 }, "reverse");

    /* rimsRot("mbz").
     mbzMove("mbz").
     wheelRot("esv").
     esvMove("esv");*/


    /*pauseBtn.onclick = function() {
        tl.paused(!tl.paused());
        pauseBtn.innerHTML = tl.paused() ? "play" : "pause";
    };*/




});