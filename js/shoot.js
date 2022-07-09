const bullet = {
    value : -1,
    display : "●",
    speed : 500,
}
// 잔상제거를 위한 함수! 작동원리는 display와 동일!

// bullet display!
function displayBullet(event){
    if (event.keyCode === 32){
        // 변수를 따로 빼는 이유는 tank의 좌표를 건들까봐
        const bulletX = tank.x;
        // 위로만 향하기에 얘만 let
        let bulletY = tank.y - Math.floor(tank.height)+1;
        const tr = document.querySelectorAll('tr');
        let count = 0;
        for(let i=bulletY; i>0; i--){
            const td = tr[i].querySelectorAll('td');
            
            setTimeout(function(){
                td[bulletX].innerText = bullet.display;
				const lastTd = tr[i+1].querySelectorAll('td');
            	lastTd[bulletX].innerText = SPACE_VALUE;
            
            }, bullet.speed * count);
    		count += 1;
        }
    }
}    


document.addEventListener("keydown", displayBullet);