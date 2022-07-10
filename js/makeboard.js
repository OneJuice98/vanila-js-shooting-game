// html tag 객체
const startGame = document.getElementById("start");
// .appendChild method 사용으로 querySelector 사용
const gameBoard = document.querySelector("#game-board");

// board property
const board = {
    value : 0,
    width : 30,
    height : 30,
}

const SPACE_VALUE = "ㆍ"; // background
const FRAME_VALUE = ["━", "|"]; // frame
let isBoard = false // 보드 생성여부

// html에 board 그리기!
function setBoard(){
    // className 설정으로 CSS 설정 부여 start hidden
    start.className = "hidden";
    // className 설정으로 CSS 설정 미부여 game-board display
    gameBoard.className = "";
    
    const table = document.createElement("table");
    for(let i=0; i<board.height; i++){
        const line = document.createElement("tr");
        for(let j=0; j<board.width; j++){
            const block = document.createElement("td");
            // frame space 마다 다른 value
            if (i === 0 || i === board.height-1){ 
                block.innerText = `${FRAME_VALUE[0]}`;
            } else if (j === 0 || j === board.width-1){
                block.innerText = `${FRAME_VALUE[1]}`;  
            } else {
            	block.innerText = `${SPACE_VALUE}`;
            }

            line.appendChild(block);
        }
        table.appendChild(line);
    }
    gameBoard.appendChild(table);
    // 보드 생성여부 확인을 위한 return 값
    isBoard = true;
    return isBoard;
}

startGame.addEventListener('click', setBoard);