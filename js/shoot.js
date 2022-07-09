const bullet = {
    value : -1,
    display : "●",
}
// 잔상제거를 위한 함수! 작동원리는 display와 동일!

// bullet display!
function displayBullet(event){
    if (event.keyCode === 32){
        // 변수를 따로 빼는 이유는 tank의 좌표를 건들까봐
        const bulletX = tank.x;
        // 위로만 향하기에 얘만 let
        let bulletY = tank.y;
        const tr = document.querySelectorAll('tr');
        for(let i=bulletY; i>0; i--){
            const td = tr[i].querySelectorAll('td');
            td[bulletX].innerText = bullet.display;
            setTimeout(function(){
				const lastTd = tr[i+1].querySelectorAll('td');
            	lastTd[bulletX].innerText = SPACE_VALUE;
            
            }, 500);
    		
        }
    }
}    

document.addEventListener("keydown", displayBullet);