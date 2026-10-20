let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");



let turnO = true;
let count = 0;//playerX,player0

// let arr = ["apple", "banana", "litchi"];

// //2D Array
// let arr2 = [["apple", "litchi",], ["potato", "mushroom"], ["pants", "shirts"]];
const WinPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetGame = () => {
    turnO = true;
    count = 0;
    enableBoxes();
    msgContainer.classList.add("hide");

};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {//playerO
            box.innerText = "O";
            turnO = false;
        } else {//player x
            box.innerText = "x";
            turnO = true;
        }
        box.disabled = true;
        count++;

        let iswinner=checkWinner();

        if(count===9 && !iswinner){
            gameDraw();
        }
    });
});
const gameDraw=()=>{
    msg.innerText= `Game was a Draw.`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};
const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};

const showWinner=(winner)=>{
    msg.innerText=`Congratulation,winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const checkWinner = () => {
    for (let pattern of WinPatterns) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;


        if(pos1val !="" && pos2val !="" && pos3val !=""){
            if(pos1val === pos2val && pos2val === pos3val){
             showWinner(pos1val);
             return true;
            }
        }
    }
};
newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click",resetGame);

