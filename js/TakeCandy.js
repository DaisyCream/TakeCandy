/**
 * Created by DaisyCream on 2015/6/5.
 */


var upThing = document.getElementById("upThing");
var receiver = document.getElementById("receiver");
var IsRight = false;
var IsLeft = false;
window.onload = function () {
    upThing.style.height = (receiver.offsetTop+receiver.offsetHeight)+ "px";
    setInterval(function moveReceiver() {
        if (IsRight) {
            receiver.style.left = receiver.offsetLeft + 10 + "px";
        }
        else if (IsLeft) {
            receiver.style.left = receiver.offsetLeft - 10 + "px";
        }
        limit();
    }, 20);
    document.onkeydown = function (event) {
        var event = (event || window.event);
        console.log(receiver.style.left);
        console.log(receiver.offsetLeft);
        console.log(document.body.clientWidth);
        switch (event.keyCode) {
            case 39:
                IsRight = true;
                break;
            case 37:
                IsLeft = true;
                break;
        }
    }

    document.onkeyup = function (event) {
        var event = event || window.event;
        switch (event.keyCode) {
            case 39:
                IsRight = false;
                break;
            case 37:
                IsLeft = false;
                break;
        }
    }


    function limit() {
        var doc = document.documentElement.clientWidth;
//·ÀÖ¹×ó²àÒç³ö
        receiver.offsetLeft <= 0 && (receiver.style.left = 0);
//·ÀÖ¹ÓÒ²àÒç³ö
        doc - receiver.offsetLeft - receiver.offsetWidth <= 0
        && ( receiver.style.left = doc - receiver.offsetWidth+ "px");
    };
};
//receiver.style.left = doc - receiver.offsetWidth

