/**
 * Created by DaisyCream on 2015/6/5.
 */
var start = document.getElementById("start");
var startBtu = document.getElementById("startBtu");
scoreAll = 0;
var score = document.getElementById("score");
var upThing = document.getElementById("upThing");
var receiver = document.getElementById("receiver");
var time = 10.00;
var IsLeft = false;
var IsRight = false;
var timeBlock = document.getElementById("time");
var endBlock = document.getElementById("endBlock");
var endScore = document.getElementById("endScore");
var newBtu = document.getElementById("newBtu");
var candybox = document.getElementsByClassName("box");

function preLoadImg(url) {
    var img = new Image();
    img.src = url;
}

preLoadImg("img/box.png");
preLoadImg("img/candy.png");
preLoadImg("img/ChooseBtu.png");
preLoadImg("img/ChooseBtu1");
preLoadImg("img/clock.png");
preLoadImg("img/resert.png");
preLoadImg("img/resert1.png");
preLoadImg("img/star_bg.png");

window.onload = function () {

    /*****************************game star*************************/
    /***
     * with the screenWidth than change the time to keep the speed;
     * @returns {*}
     */
    function getReTime(){
        var ScreenWidth = document.documentElement.clientWidth;
        var time = parseInt(ScreenWidth/(68+(ScreenWidth-1350)/4));
        return time;
    }


    startBtu.onclick  = function gameStar(){
        start.style.display = "none";
        endBlock.style.display = "none";
        boxStart = setInterval(gameStart,500);
        receiver.start = setInterval(moveReceiver,getReTime());
        timeBlock.start = setInterval(timeStart,50);
    };

    /*****************************box move**************************/

    upThing.style.height = (receiver.offsetTop+receiver.offsetHeight)+ "px";//upThing's self-adaption height
    /**
     * This is a receiver move
     */
    function moveReceiver() {
        if (IsLeft) {
            receiver.style.left = receiver.offsetLeft - 10 + "px";
        }
        else if (IsRight) {
            receiver.style.left = receiver.offsetLeft + 10 + "px";
        }
        limit();
    }

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
    };

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
    };


    function limit() {
        var doc = document.documentElement.clientWidth;

        receiver.offsetLeft <= 0 && (receiver.style.left = 0);//��ֹ������

        doc - receiver.offsetLeft - receiver.offsetWidth <= 0//��ֹ�Ҳ����
        && ( receiver.style.left = doc - receiver.offsetWidth+ "px");
    };

//receiver.style.left = doc - receiver.offsetWidth

/*****************************candy down**************************/



    /**
     * create a random;
     * @param x
     * @returns {*}
     */
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



    /**
     * this is set the candybox is there;
     */


    function gameStart(){
        var index = createRandom(12);
        var box = document.createElement("div");
        candybox[index].appendChild(box);
        box.setAttribute("class", "boxIn");
        setCandyHeight(box);
        downing(box,(parseInt(Math.random()*30)+30),1,index);

    }




    /***
     * This is for the candy's move;
     * @param target
     * @param time
     * @param n
     */

    function downing (target,time,n,index){
        var s = n*n;
        if((target.offsetHeight+target.offsetTop+10)>receiver.offsetTop){
            if(isTake(target,index)) {
                scoreAll++;
                score.innerHTML = "score: " + scoreAll;
                target.parentNode.removeChild(target);
            }
        }

        if((candybox[0].offsetHeight-(target.offsetHeight+target.offsetTop+30))<=0){
            target.parentNode.removeChild(target);
        }
        target.style.top = s + "px";
        setTimeout(function(){downing(target,time,n+1,index)},time);
    }

    /**
     *
     * @param target
     * @param index is a candy's num;
     * @returns {boolean}
     */

    function isTake(target,index){
        boxIndex=target.offsetLeft + candybox[index].offsetLeft;

        min=receiver.offsetLeft-target.offsetWidth+50;
        max=receiver.offsetLeft+receiver.offsetWidth+target.offsetWidth-50;
        if(boxIndex>=min && boxIndex<=max){
            return true;
        }
        return false;
    }

    /*****************************game end**************************/
    function timeStart(){
        time -= 0.05;
        timeBlock.innerHTML = parseInt(time*100)/100;
        if(time<=0.00){
            GameOver();
        }
    }

    function GameOver(){
        clearInterval(timeBlock.start);
        clearInterval(boxStart);
        clearInterval(receiver.start);

        endBlock.style.display = "block";
        endScore.innerHTML = scoreAll;
        timeBlock.innerHTML = 0.00;
    }




    newBtu.onclick = function(){
        location.href = "index.html";
    }

};





