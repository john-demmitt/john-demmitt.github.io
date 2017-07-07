          (function loop() {
          	setTimeout(loop, 300)
          
    var elem = document.getElementById("blk-res");
    var opa = window.getComputedStyle(elem, null);
    var city = opa.getPropertyValue("opacity");
    var opavalue = document.getElementById("opanum");
    
 
    opavalue.innerText = city;

    $(document).on("change keyup", ".deg", function() {
    elem.style.opacity = ($(this).val());
  });
 })();