var numSquares = 6
var colors = fillColors(numSquares);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var button = document.getElementById("reset");
var hard = document.getElementById("Hard");
var easy = document.getElementById("Easy")
var isEasy = false;
colorDisplay.textContent = pickedColor;

easy.addEventListener("click", function(){
    numSquares = 3;
    easy.classList.add("selected");
    hard.classList.remove("selected");
    colors = fillColors(3);
    h1.style.backgroundColor = "steelblue";
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
        if(i <= 2){
            squares[i].style.backgroundColor = colors[i]
        }else{
            squares[i].style.display = "none"
        }
    }
})
hard.addEventListener("click", function(){
    numSquares = 6;
    hard.classList.add("selected");
    easy.classList.remove("selected")
    h1.style.backgroundColor = "steelblue";
    colors = fillColors(6);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor= colors[i];
        squares[i].style.display = "block";
    }
})
button.addEventListener("click", function(){
    button.textContent = "New Colors";
    h1.style.backgroundColor = "steelblue";
    colors = fillColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i]
    }
})


for(var i = 0; i < squares.length; i++){
    // add initial colors to squares
    squares[i].style.backgroundColor = colors[i];
    // add click listeners to squares 
    squares[i].addEventListener("click", function(){
        // grab color of clicked square 
            var clickedColor = this.style.backgroundColor;
        // compare color to pickedCOlor
            if(clickedColor === pickedColor){
                button.textContent = "Play Again?";
                messageDisplay.textContent = "Correct";
                h1.style.backgroundColor = pickedColor;
                setColors(pickedColor);
            }else{
                messageDisplay.textContent = "Try Again";
                this.style.backgroundColor = "#232323";
            }
    })
}
function setColors(color){
    for(var j = 0; j < squares.length; j++){
        squares[j].style.backgroundColor = color;
    }
}

function pickColor(){
    var rand = Math.floor((Math.random() * colors.length));
    return colors[rand];
}

function fillColors(amount){
    var out = [];
    for(var i = 0; i < amount; i++){
        var red = Math.floor((Math.random() * 255) + 1);
        var green = Math.floor((Math.random() * 255) + 1);
        var blue = Math.floor((Math.random() * 255) + 1);
        out[i] = "rgb(" + red + ", " + green + ", " + blue  + ")";
    }
    return out; 
}