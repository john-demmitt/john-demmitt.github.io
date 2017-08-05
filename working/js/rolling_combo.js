$(document).ready(function() {
    var trans = $("#trans");
    var res = $("#res");
    var transL = $(".transL");
    var resL = $(".resL");
    var dWidth = $(document).width();
    var offscreen = 2 * dWidth;
    var star = $(".star");
    var transW = $(".transW");
    var resW = $(".resW");
    var letters = $([resL, transL]);
    var wheels = $([resW, transW]);
    var all = $([resL, resW, transL, transW]);
    var tl = new TimelineMax();

console.log(letters);
console.log(wheels);
console.log(dWidth);

    tl.staggerFrom(resL, 2, { x: -offscreen, rotation: -2160, transformOrigin: "50% 50%", ease: "Power0.easeOut"}, -0.2, "rollin")
        .staggerFrom(transL, 2, { x: -offscreen, rotation: -2160, transformOrigin: "50% 50%", ease: "Power0.easeOut" }, -0.1, "rollin")
        .staggerFrom(resW, 2, { x: -offscreen, rotation: -2160, transformOrigin: "50% 50%", ease: "Power0.easeOut"}, 0.2, "rollin")
        .staggerFrom(transW, 2, { x: -offscreen, rotation: -2160, transformOrigin: "50% 50%", ease: "Power0.easeOut"}, 0.1, "rollin")
        .set(letters, {autoAlpha:1})
        .staggerFrom(resL, 0.75, {opacity:0, ease: "Power0.easeOut"}, -0.2, "rollin+=1.25")
        .staggerFrom(resW, 0.75, {opacity:1, ease: "Power0.easeOut"}, 0.2, "rollin+=1.25")
        .staggerFrom(transL, 0.75, {opacity:0, ease: "Power0.easeOut"}, -0.12, "rollin+=1.25")
        .staggerFrom(transW, 0.75, {opacity:1, ease: "Power0.easeOut"}, 0.12, "rollin+=1.25");



    /*  .fromTo([res, trans], 3, { x: -width }, { x: center }, "rollin")
          .to([res, trans], 0.5, { autoAlpha: 1 }, "rollin")*/
});