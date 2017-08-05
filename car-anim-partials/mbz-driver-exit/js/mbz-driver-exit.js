$(document).ready(function ($) {
    var width = $(document).width();
    var fRim = $("#fRim");
    var rRim = $("#rRim");
    var half = width / 4;
    var rDoor = $("#rDoor");
    var dDoor = $("svg#dDoor");
    var mbz = $("#mbz");
    var drvr = $("#drvr");

    var tl = new TimelineMax();
    tl.to([fRim, rRim], 2, {
        rotation: -1800,
        transformOrigin: "50% 50%"
    }, "driveon")
        .fromTo([mbz, rDoor, dDoor, drvr], 2, {
            x: width
        }, {
            x: half
        }, "driveon")
        .from([mbz, rDoor, dDoor], 0.1, {
            autoAlpha: 0
        }, "driveon")
        .to(dDoor, 1, {
            transformOrigin: "30% center -1",
            rotationY: -70,
            ease: "Power4.easeInOut"
        }, "dDOpen")
        .from(drvr, 0.5, {
            autoAlpha: 0
        }, "exit")
        .to(dDoor, 1, {
            transformOrigin: "30% center -1",
            rotationY: 0,
            ease: "Power4.easeInOut",
            delay: 1
        }, "rDOpen")
        .to(rDoor, 1, {
            rotationY: -70,
            transformOrigin: "210 69.5 -0.1",
            ease: "Power4.easeInOut"
        }, "rDOpen")
        .to(rDoor, 1, {
            rotationY: 0,
            transformOrigin: "210 69.5 -0.1",
            ease: "Power4.easeInOut"
        }, "rDClose")
        .to([mbz, rDoor, dDoor], 2, {
            x: -width },
             "driveoff");
});