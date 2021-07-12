const buttonColors = ["red","blue","green","yellow"];
var gamePattern = [];
var userPattern = [];
var level=0;
var started = false;
function checkAnswer(currentlevel){
    if(gamePattern[currentlevel]==userPattern[currentlevel]){
        console.log("success");
        if(userPattern.length == gamePattern.length){
            setTimeout(function(){
                nextSequence();
            },1000);
        }
    }else{
        console.log("wrong");
        started=false;
        userPattern=[];
        gamePattern=[];
        $("body").css("background-color","red");
        $("#level-title").text("Game over. Click here to restart the game!");
        playSound("wrong");
        level=0;
    }
}
function startGame(){
    if(!started){
        $("body").css("background-color","#011F3F");
        $("#level-title").text("level "+ level);
        started=true;
        nextSequence();
    }  
}
function playSound(fileName){
    var audio = new Audio("sounds/"+fileName+".mp3");
    audio.play();
}
function nextSequence(){
    userPattern=[];
    level++;
    $("#level-title").text("level "+ level);
    var randomNumber= Math.floor(Math.random()*4);
    console.log(randomNumber);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    console.log(randomChosenColor);
    $("#"+randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);

}
function animatePress(currentColor){
    $("#"+currentColor).addClass("pressed");
    setTimeout(function(){
        $("#"+ currentColor).removeClass("pressed");
    },100);
}
$(".btn").click(function(){
    var userChosenColor = $(this).attr("id");
    userPattern.push(userChosenColor);
    playSound(userChosenColor);
    checkAnswer(userPattern.length-1);   
});





