const tank = {
    value : 1, // player value 1 
    width : 4,
    height : 4,
    x : Math.floor(board.width/2), // 중간에서 시작!
    y : Math.floor(board.height/2),
    display : "⁂",
    hp : 1,
}

// tank 의 범위를 정의!
function tankRange(){
    const xRange = [tank.x-Math.floor(tank.width/2), tank.x+Math.floor(tank.width/2)];
    const yRange = [tank.y-Math.floor(tank.height/2), tank.y+Math.floor(tank.height/2)];
    // [0][0] tank Left / [0][1] tank Right / [1][0] tank Up / [1][1] tank Down
    return [xRange, yRange];
}

// 잔상제거를 위한 함수, 작동원리는 display 와 동일
function removeTank(){
    const range = tankRange();
    const tr = document.querySelectorAll('tr');
    for(let i=range[1][0]; i<range[1][1]; i++){
        const td = tr[i].querySelectorAll('td');
        for(let j=range[0][0]; j<range[0][1]; j++){
            td[j].innerText = SPACE_VALUE;
        }
    }

}
// tank display! 
function displayTank(){
    const range = tankRange();
    const tr = document.querySelectorAll('tr');
    for(let i=range[1][0]; i<range[1][1]; i++){
        const td = tr[i].querySelectorAll('td');
        for(let j=range[0][0]; j<range[0][1]; j++){
            td[j].innerText = tank.display;
        }
    }
    
}

// tank의 움직임!
function tankMove(event){
    const range = tankRange();
    removeTank(range);
    if (event.keyCode === 38) { //Up
        if (range[1][0] > 1 ){
            tank.y -= 1;
        }
    } else if (event.keyCode === 39) {// right
        if (range[0][1] < board.width-1){
            tank.x += 1;
        }
    } else if (event.keyCode === 40) {// down
        if (range[1][1] < board.height-1){
            tank.y += 1;
        }
    } else if (event.keyCode === 37) {// left
        if (range[0][0] > 1){
            tank.x -= 1;
        }
    }
}

document.addEventListener('keydown', tankMove);