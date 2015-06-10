var Game = document.getElementById("Game");
var loading = document.getElementById("loading");
Game.style.display = "none";

var LOADING=function(){};
LOADING.IMAGE_LOAD_ARRAY=[
    "img/box.png",
    "img/candy.png",
    "img/ChooseBtu.png",
    "img/ChooseBtu1.png",
    "img/ChooseBtu2.png",
    "img/clock.png",
    "img/resert.png",
    "img/resert1.png",
    "img/star_bg.png",
    "img/cloud1.png",
    "img/cloud2.png",
    "img/cloud3.png"
];
LOADING.index = 0;
LOADING.avePre = 100/LOADING.IMAGE_LOAD_ARRAY.length;
LOADING.preAll = 0;
LOADING.loadingImg = function(){
    if(LOADING.index>=LOADING.IMAGE_LOAD_ARRAY.length){
        LOADING.preAll = 100;
        console.log("100%");
        this.toShow();
        return;
    }
    var img = new Image();
    img.src = LOADING.IMAGE_LOAD_ARRAY[LOADING.index];
    img.onload = function () {
        LOADING.preAll+=LOADING.avePre;
        LOADING.index++;
        setTimeout(function(){LOADING.loadingImg()},500);
    };


};
LOADING.toShow=function() {
    loading.style.display = "none";
    Game.style.display = "block";
    TakeCandyGame();
};
LOADING.loadingImg();