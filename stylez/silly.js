"use strict";

var shift = Math.floor(new Date().getTime() / 5000) % 360;

function shift_links() {
    shift = (shift + 1) % 360;
    var filter = "hue-rotate(" + shift + "deg)";
    var links = document.getElementsByTagName("a");
    for (var i = 0; i < links.length; ++i) {
        links[i].style.filter = filter;
        links[i].style.WebkitFilter = filter;
    }
}

window.onload = function() {
    shift_links();
    setInterval(shift_links, 5000);
}
