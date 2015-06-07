/**
 * Created by DaisyCream on 2015/6/5.
 */


/*****************************box move**************************/

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

        receiver.offsetLeft <= 0 && (receiver.style.left = 0);//·ÀÖ¹×ó²àÒç³ö

        doc - receiver.offsetLeft - receiver.offsetWidth <= 0//·ÀÖ¹ÓÒ²àÒç³ö
        && ( receiver.style.left = doc - receiver.offsetWidth+ "px");
    };

//receiver.style.left = doc - receiver.offsetWidth

/*****************************candy down**************************/

    function createRandom(x){
        return parseInt(Math.random()*x);
    }

    /***
     * set the traget's height
     * @param target
     */
    function setCandyHeight(target){
        target.style.height = parseInt(target.offsetWidth/7)*4 + "px";
        target.style.marginLeft = -(target.offsetWidth/2) + "px";
    }

    var z = document.getElementsByClassName("boxIn");

    candybox = document.getElementsByClassName("box");
    setCandyHeight(z[0]);
    downing(z[0],20,1);
    /**
     * this is set the candybox is there;
     */
    //
    for(var i=0;i<candybox[i].length;i++){
        candybox[i].IsHas = false;
    }

    setInterval( function(){
        var box = document.createElement("div");
        box.setAttribute("class", "boxIn");
        var index = createRandom(12);
        while(candybox[index]){
            index = createRandom(12);
        }
        setCandyHeight(box);
        candybox[index].appendChild(box);
        downing(box,(parseInt(Math.random()*30)+10),1);



    },2000);

    function downing (target,time,n){
        var s = n*n;
        if((candybox[0].offsetHeight-(target.offsetHeight+target.offsetTop+30))<=0){
            return;
        }
        target.style.top = s + "px";
        setTimeout(function(){downing(target,time,n+1)},time);
    }

    function isTake(){
        left = receiver.offsetleft;
        right = left + receiver.offsetWidth;
        if
        return true;
    }

};





