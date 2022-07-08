const start = document.getElementById("start");
const gameBoard = document.querySelector("#game-board");

const board = {
    width : 30,
    height : 30,
}

const plane ={
    width : 5,
    height : 5,
    x : Math.floor(board.width/2),
    y : Math.floor(board.height/2),
    display : "⁂",
    value : 1, // player value 1 
}

const SPACE = "ㆍ";
const FPS = "100";
// 좌표체계 및 접근을 위한 Arr 생성 (ES6)
const boardArr = new Array(board.height).fill(0).map(()=> new Array(board.width).fill(0));

// 기체의 변화에 따른 배열 초기화!
function setPlane(x, y){
    for(let i=0; i<board.height; i++){
        for(let j=0; j<board.width; j++){
            if (i <= y+Math.floor(plane.height/2) && i> y-Math.floor(plane.height/2) && j >= x-Math.floor(plane.width/2) && j <x+Math.floor(plane.width/2)){
	           boardArr[i][j] = 1;

            } else {
                boardArr[i][j] = 0;
            }
        }
    }
}
// Start Game!
function setBoard(){
    // className 설정으로 CSS 설정 부여 start hidden
    start.className = "hidden";
    // className 설정으로 CSS 설정 미부여 game-board display
    gameBoard.className = "";
    
    for(let i=0; i<board.height; i++){

        const line = document.createElement("p");
        line.id = i;
        if(i===0 || i===board.height-1){
            line.innerText="━".repeat(board.width);
        } else{
            line.innerText = `${SPACE}`.repeat(board.width);
        }
        gameBoard.appendChild(line);
    }
    setInterval(inGame, FPS);
}
// 변화에 따른 보드 초기화!
function loadBoard(){
    for(let i=0; i<board.height; i++){
        // board 내 line 생성
        const line = document.getElementById(`${i}`);
        let lineText = "";
        
        if (i===0 || i===board.height-1) {
            //line.innerText="━".repeat(board.width);
        } else {
            
            for(let j=0; j<board.width; j++){
                if (boardArr[i][j] === 0) {
                    lineText += SPACE;
                } else if (boardArr[i][j] === plane.value){
                    lineText += plane.display;
                }
            }
        	line.innerText = lineText;
        }
    }
}
// 게임실행
function inGame(){
    setPlane(plane.x, plane.y);
    loadBoard();
}
function planeMove(event){
    
    if (event.keyCode === 38) { //Up
        if (plane.y-Math.floor(plane.height/2) > 0 ){
            plane.y -= 1;
        }
    } else if (event.keyCode === 39) {// right
        if (plane.x+Math.floor(plane.width/2) < board.width){
            plane.x += 1;
        }
    } else if (event.keyCode === 40) {// down
        if (plane.y+Math.floor(plane.height/2) < board.height-2){
            plane.y += 1;
        }
    } else if (event.keyCode === 37) {// left
        if (plane.x-Math.floor(plane.width/2) > 0){
            plane.x -= 1;
        }
        
    } else if (event.keyCode === 32) {// space, attack
        console.log('attack!');
    }
}
start.addEventListener("click", setBoard);
document.addEventListener("keydown", planeMove);

