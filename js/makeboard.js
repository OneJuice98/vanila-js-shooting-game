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
            block.value = board.value;

            line.appendChild(block);
        }
        table.appendChild(line);
    }
    gameBoard.appendChild(table);
    // 보드 생성여부 확인을 위한 return 값
    isBoard = true;
    return isBoard;
}

function loadBoard(){
    for(let i=0; i<board.height; i++){
        // board 내 line 생성
        const line = document.querySelectorAll('tr');
        for(let j=0; j<board.width; j++){
            const block = line[i].querySelectorAll('td');
            if (i === 0 || i === board.height-1) {
                block[j].innerText = FRAME_VALUE[0];
            } else {
                if (block[j].value === tank.value){
                    block[j].innerText = tank.display;
                } else if (block[j].value === bullet.value){
                    block[j].innerText = bullet.display; 
                } else if (block[j].value === enemy1.value){
                    block[j].innerText = enemy1.display;
                } else if (block[j].value === enemy2.value){
                    block[j].innerText = enemy2.display;
                } else {
                    block[j].innerText = SPACE_VALUE;
                }
            }
        }
    }
}