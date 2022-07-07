const start = document.getElementById("start");
const board = document.querySelector("#game-board");

const boardProperty = {
    width : 30,
    height : 30,
}
const planeProperty = {
    width : 5,
    height : 5,
    // initial position;
    x : Math.floor(boardProperty.width / 2),
    y : boardProperty.height - 1,
    value : 1,
}
// ES6 이상 2차원 배열 선언! 
const boardArray = new Array(boardProperty.height).fill(0).map(()=> new Array(boardProperty.width).fill(0));
function makeBoard(){
    // className 설정으로 CSS 설정 부여 및 미부여 가능
    board.className = "";
    start.className = "hidden";
    
    for(let i=0; i < boardProperty.height; i++){
    	const line = document.createElement("p");
        line.id=i;
        if (i===0) {
            line.innerText= "━".repeat(boardProperty.width);
        } else if (i===boardProperty.height-1) {
            line.innerText= "━".repeat(boardProperty.width) ;
        } else {
   		// 문자열 곱하기! repeat 
    	line.innerText = "|" + "ㆍ".repeat(boardProperty.width) + "|";
        }
    	board.appendChild(line);
    }
    setPlane();
}

function setPlane(){
    boardArray[planeProperty.x][planeProperty.y] = 1;
}

start.addEventListener("click", makeBoard);

