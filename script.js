let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newgmebtn = document.querySelector("#new-gme");
let msgcntainer = document.querySelector(".msg-conatiner");
let msg = document.querySelector("#msg");

let playerX = true; //playerX, playerY

const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const resetGame = () => {
  playerX = true;
  enableBoxes();
  msgcntainer.classList.add("hide");
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    // console.log("box was clicked");

    if (playerX) {
      box.innerText = "X";
      playerX = false;
    } else {
      box.innerText = "O";
      playerX = true;
    }
    box.disabled = true;
    checkWinner();
    // if (checkDraw()) {
    //   gameDraw();
    // }

    
  });
});

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const showWinner = (winner) => {
  msgcntainer.classList.remove("hide");
  //   msg.innerText = `Congratulations, winner is ${winner}`;
  msg.innerText = `
  FUCK OFF BITCH! GET A LIFE 🖕`;
  disableBoxes();
};
const gameDraw = () => {
  msgcntainer.classList.remove("hide");
  msg.innerText = `It's a draw, start again !`;
  disableBoxes();
};

const checkDraw = () => {
  let count = 0;
  boxes.forEach((box) => {
    let text = box.innerText;
    if (text !== "") count++;
  });
  return count === 9;
};
const checkWinner = () => {
  for (let pattern of winPatterns) {
    let posVal1 = boxes[pattern[0]].innerText;
    let posVal2 = boxes[pattern[1]].innerText;
    let posVal3 = boxes[pattern[2]].innerText;

    if (posVal1 != "" && posVal2 != "" && posVal3 != "") {
      if (posVal1 === posVal2 && posVal2 === posVal3) {
        // console.log("winner");
        showWinner(posVal1);
      }
    }
  }
};

newgmebtn.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);
