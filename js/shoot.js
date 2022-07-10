const bullet = {
    value : -1,
    display : "●",
    speed : 100, // 속도 조절 가능!
    count : 3,
}

// bullet display! -> 이부분이 진짜 개맘에 안듦 ㅠㅠㅠ 맘에 안듦(1)
function displayBullet(event){
    if (event.keyCode === 32 && bullet.count > 0){
    	// bullet 수 조절 
        bullet.count -= 1;
        // 변수를 따로 빼는 이유는 tank의 좌표를 건들까봐
        const bulletX = tank.x;
        const bulletY = tank.y - Math.floor(tank.height)+1;
        const tr = document.querySelectorAll('tr');
        // closure 구현과 잔상제거를 위한 count!
        let count = 0;
        for(let i=bulletY; i>=0 ; i--){
            const td = tr[i].querySelectorAll('td');
            setTimeout(function(){
                td[bulletX].innerText = bullet.display;
                const lastPosition = tr[i+1].querySelectorAll('td');
                // 끝에 도달시!!
                if (i === 0){
                    td[bulletX].innerText = FRAME_VALUE[0];
                    bullet.count += 1;
                } 
                // 잔상 제거!
                if (i !== bulletY){
                    lastPosition[bulletX].innerText = SPACE_VALUE;
                    if (i !== 0 && tr[i-1].querySelectorAll('td')[bulletX].value >= enemy1.value){
                        td[bulletX].innerText = SPACE_VALUE;
                    } 
                }

            }, bullet.speed*count);
            // 피격시!
            if (i !== 0 && tr[i-1].querySelectorAll('td')[bulletX].value === enemy1.value){
                bullet.count += 1;
                // 다시 살아나길래 hp가 0보다 클때만 준다!
                if (enemy1.hp > 0){
                    enemy1.hp -= 1;
                }
                break; 
            }
            if (i !== 0 && tr[i-1].querySelectorAll('td')[bulletX].value === enemy2.value){
                bullet.count += 1;
                // 다시 살아나길래 hp가 0보다 클때만 준다!
                if (enemy2.hp > 0){
                    enemy2.hp -= 1;
                }
                break; 
            }
        	count += 1;
        }
    }
}    