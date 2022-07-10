const FPS_VALUE = 100;

// makeboard.js → setBoard 내에 isBoard 변수 존재
// player.js → displayTank 함수 존재 (removeTank 와 연결, 움직임은 tankMove, tankRange로 제어)
function game() {
    
    displayObj(tank);
    
    // 쫄 : enemy1 / 보스 : enemy2 
    // 코드가 맘에 안듦(2)
    if (enemy1.hp > 0){
        objMove(randomMove(), enemy1);
        displayObj(enemy1);
    } else {
        removeObj(enemy1);
    	if (enemy2.hp > 0){
            objMove(randomMove(), enemy2);
            displayObj(enemy2);
        } else {
            removeObj(enemy2);
        }
    }
        
        
    loadBoard();
}

startGame.addEventListener('click', function(){
    setBoard();
    setInterval(game, FPS_VALUE);
});
document.addEventListener('keydown', function(){
    objMove(event.keyCode, tank);
});


document.addEventListener("keydown", displayBullet);
