var heart = document.getElementById("heart");
var scoreDiv = document.getElementById("scoreDiv");
var score = 0;

// Enter name and displaying it 
var nameDiv = document.getElementById("nameDiv");
var yourName = document.getElementById("yourName");
var startBut = document.getElementById("startBut");
var currentLeader = document.getElementById("currentLeader");

var sessionName;

function submitForm() {
    nameDiv.style.display = "none";
    currentLeader.innerHTML = yourName.value;
    heart.style.display = "block";
    sessionName = yourName.value;
    randomizer();
}

startBut.addEventListener("click", submitForm);

heart.style.width = "80px";
heart.style.height = "75px";

//randomizer for hearts on screen
function randomizer(min, max) {
    hMin = 0;
    vMin = 100;
    hMax = parseInt(window.innerWidth) - parseInt(heart.style.width);
    vMax = parseInt(window.innerHeight) - parseInt(heart.style.height);

    var numLeft = Math.floor(Math.random() * (hMax - hMin) + hMin);
    var numTop = Math.floor(Math.random() * (vMax - vMin) + vMin);

    console.log("Left: " + numLeft);
    console.log("Top: " + numTop);

    heart.style.marginLeft = numLeft + "px";
    heart.style.marginTop = numTop + "px";

}
// How hearts move every second
var start = setInterval(randomizer, 1000);

function changeBack() {
  heart.src = "heart.png";
 }
 function changeImg(){
  heart.src = "brokenHeart.png";
  setTimeout(changeBack, 300);
 }
 

// How to keep track of score, every click on heart the score goes up 1
heart.addEventListener("click", function () {
    score++;
    scoreDiv.innerHTML = score;
    changeImg();
    
    
});


// Stop button, this shows the play again function
var stop = document.getElementById("stop");
var end = document.getElementById("end");
var playAgain = document.getElementById("playAgain");

stop.addEventListener("click", function () {
    console.log("stops the game");
    heart.style.display = "none";
    end.style.display = "flex";
    pushToDB();
    playAgain.style.display = "flex";
        playAgain.addEventListener("click", function () {
           location.reload(); 
        });

});

// PUSH TO DATABASE

function getLeaderboard() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = () => {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      document.getElementById("currentLeader").innerHTML = xmlhttp.responseText;
    }
  };
  xmlhttp.open("GET", "http://localhost:8888/game/select.php", true);
  xmlhttp.send();
}

function pushToDB() {
  var xmlhttp = new XMLHttpRequest();
  var request = "http://localhost:8888/game/save.php?uName=" + sessionName + ": " + "&uScore=" + score;
  xmlhttp.onreadystatechange = () => {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      getLeaderboard();
    }
  };
  xmlhttp.open("GET", request, true);
  xmlhttp.send();
}