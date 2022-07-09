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
const FRAME_VALUE = "━"; // frame

// html에 board 그리기!
function setBoard(){
    // className 설정으로 CSS 설정 부여 start hidden
    start.className = "hidden";
    // className 설정으로 CSS 설정 미부여 game-board display
    gameBoard.className = "";
    
    /*
    // for loop로 한줄마다 repeat를 통해 그리기
    for(let i=0; i<board.height; i++){
        const line = document.createElement("p");
        // id 가 필요한가? <추가 확인필요> ---------------------------------------------------
        line.id = i;
        if (i===0 || i===board.height-1){
            line.innerText = FRAME_VALUE.repeat(board.width);
        } else {
            line.innerText = `${SPACE_VALUE}`.repeat(board.width);
        }
        gameBoard.appendChild(line);
    }
    */
    const table = document.createElement("table");
    for(let i=0; i<board.height; i++){
        const line = document.createElement("tr");
        for(let j=0; j<board.width; j++){
            const block = document.createElement("td");
            block.innerText = `${SPACE_VALUE}`;
            line.appendChild(block);
        }
        table.appendChild(line);
    }
    gameBoard.appendChild(table);
}

startGame.addEventListener('click', setBoard);