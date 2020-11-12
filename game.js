var gamePattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];

var redSound = new Audio("./sounds/red.mp3");
var blueSound = new Audio("./sounds/blue.mp3");
var greenSound = new Audio("./sounds/green.mp3");
var yellowSound = new Audio("./sounds/yellow.mp3");
var wrongSound = new Audio("./sounds/red.mp3");

function nextSequence(){
    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);

    $("#" + randomChosenColor).click(function (event) {
        $("#" + randomChosenColor).fadeOut(20).fadeIn(20);
        
        switch(randomChosenColor){
            case "red":
                redSound.play();
                break;
            case "blue":
                blueSound.play();
                break;
            case "green":
                greenSound.play();
                break;
            case "yellow":
                yellowSound.play();
                break;
            default:
                red.play();
                break;
        }
    });
}

// Calling the function
nextSequence();