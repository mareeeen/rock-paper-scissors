
var UserPoints = 0;


function score() {
var score_span = document.getElementById("score").innerHTML = UserPoints;
}

setInterval(score, 5);

function convert(word) {
    if(word === "paper") return '<img src="./images/icon-paper.svg" alt="" srcset="">';
    if(word === "scissors") return '<img src="./images/icon-scissors.svg" alt="" srcset="">';
    return '<img src="./images/icon-rock.svg" alt="">';
}

function game(UserChoice) {
    var choices = ["paper", "rock", "scissors"];
    var i = Math.floor(Math.random() * choices.length);
    var ComChoice = choices[i];
    
    var box = document.getElementById("challenge");
    box.style.display = "flex";
    document.getElementById("picks").style.display = "none";
    

    var userDiv = document.getElementById("yourObject");
    userDiv.innerHTML = convert(UserChoice);

    var comDiv = document.getElementById("comObject");
    comDiv.innerHTML = convert(ComChoice);

    if (UserChoice === "paper" && ComChoice === "rock" ||  UserChoice === "rock" && ComChoice === "scissors"
    ||  UserChoice === "scissors" && ComChoice === "paper") {
        win(UserChoice);
    } else if (UserChoice === ComChoice) {
        draw(UserChoice);
    } else {
        lose(UserChoice);
    };

    if (UserChoice === "paper"){
        document.getElementById("yourObject").style.border = "solid 15px transparent";
        document.getElementById("yourObject").style.backgroundImage = "linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), linear-gradient(101deg,hsl(230, 89%, 62%), hsl(230, 89%, 65%))";
        document.getElementById("yourObject").style.backgroundOrigin = "border-box";
        document.getElementById("yourObject").style.backgroundClip = "content-box, border-box";
        document.getElementById("yourObject").style.boxShadow = "0 0.3125rem 0 0 hsl(230, 63%, 47%), 2px 1000px 1px #fff inset"
    };
    
    if (ComChoice === "paper"){
        document.getElementById("comObject").style.border = "solid 15px transparent";
        document.getElementById("comObject").style.backgroundImage = "linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), linear-gradient(101deg,hsl(230, 89%, 62%), hsl(230, 89%, 65%))";
        document.getElementById("comObject").style.backgroundOrigin = "border-box";
        document.getElementById("comObject").style.backgroundClip = "content-box, border-box";
        document.getElementById("comObject").style.boxShadow = "0 0.3125rem 0 0 hsl(230, 63%, 47%), 2px 1000px 1px #fff inset"
    };

    if (UserChoice === "rock"){
        document.getElementById("yourObject").style.border = "solid 15px transparent";
        document.getElementById("yourObject").style.backgroundImage = "linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), linear-gradient(101deg, hsl(349, 71%, 52%), hsl(349, 70%, 56%))";
        document.getElementById("yourObject").style.backgroundOrigin = "border-box";
        document.getElementById("yourObject").style.backgroundClip = "content-box, border-box";
        document.getElementById("yourObject").style.boxShadow = "0 0.3125rem 0 0 hsl(347, 76%, 35%), 2px 1000px 1px #fff inset"
    };
    
    if (ComChoice === "rock"){
        document.getElementById("comObject").style.border = "solid 15px transparent";
        document.getElementById("comObject").style.backgroundImage = "linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), linear-gradient(101deg, hsl(349, 71%, 52%), hsl(349, 70%, 56%))";
        document.getElementById("comObject").style.backgroundOrigin = "border-box";
        document.getElementById("comObject").style.backgroundClip = "content-box, border-box";
        document.getElementById("comObject").style.boxShadow = "0 0.3125rem 0 0 hsl(347, 76%, 35%), 2px 1000px 1px #fff inset"
    };

    if (UserChoice === "scissors"){
        document.getElementById("yourObject").style.border = "solid 15px transparent";
        document.getElementById("yourObject").style.backgroundImage = " linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), linear-gradient(101deg, hsl(39, 89%, 49%), hsl(40, 84%, 53%))";
        document.getElementById("yourObject").style.backgroundOrigin = "border-box";
        document.getElementById("yourObject").style.backgroundClip = "content-box, border-box";
        document.getElementById("yourObject").style.boxShadow = "0 0.3125rem 0 0 hsl(29, 79%, 44%), 2px 1000px 1px #fff inset"
    };
    
    if (ComChoice === "scissors"){
        document.getElementById("comObject").style.border = "solid 15px transparent";
        document.getElementById("comObject").style.backgroundImage = " linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), linear-gradient(101deg, hsl(39, 89%, 49%), hsl(40, 84%, 53%))";
        document.getElementById("comObject").style.backgroundOrigin = "border-box";
        document.getElementById("comObject").style.backgroundClip = "content-box, border-box";
        document.getElementById("comObject").style.boxShadow = "0 0.3125rem 0 0 hsl(29, 79%, 44%), 2px 1000px 1px #fff inset"
    }; 
   
}

function win() {
    if(UserPoints < 5){
    UserPoints++;
    } else {
        UserPoints = 5;
    }
    document.getElementById("result").innerHTML = "YOU WIN";
    document.getElementById("who").style.display = "flex";
    document.getElementById("rules-btn").style.display = "none";
    document.getElementById("container").style.display = "grid";
    document.getElementById("right").style.visibility = "visible";
    
    if(UserPoints === 5){
        confetti({
            spread: 180,
            ticks: 300
          });
        document.getElementById("result").innerHTML = "YOU WON THE GAME";
        document.getElementById("continue").innerHTML = "RESTART";
        reset();
    }
}

function draw() {
    document.getElementById("result").innerHTML = "DRAW";
    document.getElementById("who").style.display = "flex";
    document.getElementById("rules-btn").style.display = "none";
    document.getElementById("container").style.display = "grid";
    document.getElementById("right").style.visibility = "hidden";
    document.getElementById("left").style.visibility = "hidden";
}

function lose() {
    document.getElementById("result").innerHTML = "YOU LOSE";
    document.getElementById("who").style.display = "flex";
    document.getElementById("rules-btn").style.display = "none";
    document.getElementById("container").style.display = "grid";
    document.getElementById("left").style.visibility = "visible";
    if (UserPoints > 0) {
   UserPoints--;
    };
}

function openImg() {
    document.getElementById("rules").style.display = "block";
  
}

function closeImg() {
    document.getElementById("rules").style.display = "none";
    
}

function continueGame() {
    var choices = ["paper", "rock", "scissors"];
    var i = Math.floor(Math.random() * choices.length);
    var ComChoice = choices[i];
    document.getElementById("challenge").style.display = "none";
    document.getElementById("picks").style.display = "grid";
    document.getElementById("who").style.display = "none";
    document.getElementById("rules-btn").style.display = "block";
    document.getElementById("yourObject").style = "none";
    document.getElementById("container").style.display = "none";
    document.getElementById("right").style.visibility = "hidden";
    document.getElementById("left").style.visibility = "hidden";
};

function reset() {
    UserPoints = 0;
}



