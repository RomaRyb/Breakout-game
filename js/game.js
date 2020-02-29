var cvs = document.getElementById("breakout");
var ctx = cvs.getContext("2d");

//add border to canvas
cvs.style.border = "1px solid #0ff"


//game variables
var paddleWidth = 100;
var paddleMarginBottom = 50;
var paddleHeight = 20;

//create the paddle
var paddle = {
    x : cvs.width / 2 - paddleWidth / 2,
    y : cvs.height - paddleMarginBottom - paddleHeight,
    width : paddleWidth,
    height : paddleHeight,

    dx : 5
}

//draw the paddle


