var playerInputs = document.querySelectorAll(".player-inputs");
var rockImage = document.querySelector("#rock-image");
var paperImage = document.querySelector("#paper-image");
var scissorsImage = document.querySelector("#scissors-image");
var play = document.querySelector(".play");
var compRockImage = document.querySelector("#comp-rock-image");
var compPaperImage = document.querySelector("#comp-paper-image");
var compScissorsImage = document.querySelector("#comp-scissors-image");
var computerOptions = document.querySelectorAll(".computer-options input");
var winnerText = document.querySelector("#winner-text");
var playerName = document.querySelector("#player-name");
var pScore = document.querySelector("#player-score").value;
var cScore = document.querySelector("#comp-score").value;
var playerScore = Number(pScore);
var compScore = Number(cScore);
var reset = document.querySelector("#reset");
var win = document.getElementById("win-audio");
var draw = document.getElementById("draw-audio");
var lose = document.getElementById("lose-audio");

function playAudio() {
  win.play();
}

function drawAudio() {
  draw.play();
}

function loseAudio() {
  lose.play();
}

for (var playerInput of playerInputs) {
  playerInput.addEventListener("change", handlerValue);
}

function handlerValue(event) {
  var playerVal = event.target.value;
  localStorage.setItem("playerVal", JSON.stringify(playerVal));

  if (playerVal == 0) {
    rockImage.classList.remove("mainimage-unchecked");
    rockImage.classList.add("mainimage-checked");
    paperImage.classList.remove("mainimage-checked");
    paperImage.classList.add("mainimage-unchecked");
    scissorsImage.classList.remove("mainimage-checked");
    scissorsImage.classList.add("mainimage-unchecked");
  } else if (playerVal == 1) {
    rockImage.classList.remove("mainimage-checked");
    rockImage.classList.add("mainimage-unchecked");
    paperImage.classList.remove("mainimage-unchecked");
    paperImage.classList.add("mainimage-checked");
    scissorsImage.classList.remove("mainimage-checked");
    scissorsImage.classList.add("mainimage-unchecked");
  } else {
    rockImage.classList.remove("mainimage-checked");
    rockImage.classList.add("mainimage-unchecked");
    paperImage.classList.remove("mainimage-checked");
    paperImage.classList.add("mainimage-unchecked");
    scissorsImage.classList.remove("mainimage-unchecked");
    scissorsImage.classList.add("mainimage-checked");
  }
}

play.addEventListener("click", handlerComputerValue);
function handlerComputerValue(event) {
  var computerVal = Math.floor(Math.random() * 3);
  playerVal = JSON.parse(window.localStorage.getItem("playerVal"));

  if (computerVal == 0) {
    compRockImage.classList.remove("mainimage-unchecked");
    compRockImage.classList.add("mainimage-checked");
    compPaperImage.classList.remove("mainimage-checked");
    compPaperImage.classList.add("mainimage-unchecked");
    compScissorsImage.classList.remove("mainimage-checked");
    compScissorsImage.classList.add("mainimage-unchecked");
  } else if (computerVal == 1) {
    compRockImage.classList.remove("mainimage-checked");
    compRockImage.classList.add("mainimage-unchecked");
    compPaperImage.classList.remove("mainimage-unchecked");
    compPaperImage.classList.add("mainimage-checked");
    compScissorsImage.classList.remove("mainimage-checked");
    compScissorsImage.classList.add("mainimage-unchecked");
  } else {
    compRockImage.classList.remove("mainimage-checked");
    compRockImage.classList.add("mainimage-unchecked");
    compPaperImage.classList.remove("mainimage-checked");
    compPaperImage.classList.add("mainimage-unchecked");
    compScissorsImage.classList.remove("mainimage-unchecked");
    compScissorsImage.classList.add("mainimage-checked");
  }

  if (
    (playerVal == 0 && computerVal == 0) ||
    (playerVal == 1 && computerVal == 1) ||
    (playerVal == 2 && computerVal == 2)
  ) {
    winnerText.textContent = "GAME DRAW. TRY AGAIN !!!";
    drawAudio();
  } else if (
    (playerVal == 0 && computerVal == 1) ||
    (playerVal == 1 && computerVal == 2) ||
    (playerVal == 2 && computerVal == 0)
  ) {
    winnerText.textContent = "HA HA YOU LOOSE :))) !!!";
    document.querySelector("#comp-score").value = ++cScore;
    loseAudio();
  } else if (
    (playerVal == 0 && computerVal == 2) ||
    (playerVal == 1 && computerVal == 0) ||
    (playerVal == 2 && computerVal == 1)
  ) {
    winnerText.textContent = "CONGRATULATIONS. YOU WON!!!";
    document.querySelector("#player-score").value = ++pScore;
    playAudio();
  }
}
reset.addEventListener("click", resetHandlerValue);

function resetHandlerValue() {
  setTimeout("window.location.reload()", 1);
}
