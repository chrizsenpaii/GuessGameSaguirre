let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let score = 20;
let highScore = 0;

document.querySelector(".check").addEventListener("click", function () {
  let guess = Number(document.querySelector(".guess-field").value);
  if (!guess) {
    document.querySelector(".message").textContent = "It's not a number!";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "You won!";
    document.querySelector("body").classList.add("bg-green-500");
    document.querySelector(".number").textContent = secretNumber;
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too High!";
      score--;
    } else {
      document.querySelector(".message").textContent = "You lose!";
      document.querySelector(".score").textContent = 0;
    }

    document.querySelector(".score").textContent = score;
  } else if (guess < secretNumber) {
    document.querySelector(".message").textContent = "Too Low!";
    if (score > 1) {
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lose!";
      document.querySelector(".score").textContent = 0;
    }
  }
});

//try again
document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".guess-field").value = "";
  score = 20;
  document.querySelector(".score").textContent = score;
  document.querySelector("body").classList.add("bg-gray-950");
  document.querySelector(".number").textContent = "?";
  document.querySelector(".message").textContent = "Start guessing...";
});
