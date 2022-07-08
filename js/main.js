const start = document.getElementById("start");
const board = document.querySelector("#game-board");

const boardProperty = {
    width : 30,
    height : 30,
}
const planeProperty = {
    width : 6, // 짝수여야함 ㅠㅠ 왜?? 고칠 방법은??
    height : 5,
    // initial position;
    x : Math.floor(boardProperty.width / 2),
    y : boardProperty.height - 1,
    value : 1,
}
// ES6 이상 2차원 배열 선언! 
const boardArray = new Array(boardProperty.height).fill(0).map(()=> new Array(boardProperty.width).fill(0));

// board 만들기 + 비행기 초기 위치로!
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
    const line = document.getElementById(`${planeProperty.y-1}`);
    const dotCount = Math.floor((boardProperty.width - planeProperty.width)/2);
    line.innerText = "|" + "ㆍ".repeat(dotCount) + "┼".repeat(planeProperty.width) + "ㆍ".repeat(dotCount) + "|";
    boardArray[planeProperty.x][planeProperty.y] = planeProperty.value;
}

function movePlane(x, y){
    const line = document.getElementById(`${y-1}`);
    const dot
}
start.addEventListener("click", makeBoard);

