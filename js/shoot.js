const bullet = {
    value : -1,
    display : "●",
    speed : 100, // 속도 조절 가능!
    count : 3,
}

// bullet display!
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
            // 위로올라가는 느낌살리기 위한 closure
            setTimeout(function(){
                td[bulletX].innerText = bullet.display;
                if (i!==bulletY){
                	const lastTd = tr[i+1].querySelectorAll('td');
                	lastTd[bulletX].innerText = SPACE_VALUE;
                    // 끝에 도달하면 사라짐.
                    if (i === 0){
                        td[bulletX].innerText = FRAME_VALUE[0];
                    	bullet.count += 1
                	}
                }
            }, bullet.speed * count);
            count += 1;
        }
    }
}    


