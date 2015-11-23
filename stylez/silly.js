"use strict";

var shift = 0;

function shift_links() {
    shift = (shift + 1) % 360;
    var filter = "hue-rotate(" + shift + "deg)";
    var links = document.getElementsByTagName("a");
    for (var i = 0; i < links.length; ++i) {
        links[i].style.filter = filter;
    }
}

window.onload = function() {
    setInterval(shift_links, 5000);
}
