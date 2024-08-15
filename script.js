document.addEventListener("DOMContentLoaded", function () {
    const player = document.getElementById('player');
    const obstacle = document.getElementById('obstacle');
    const scoreDisplay = document.getElementById('score');

    let score = 0;
    let isJumping = false;
    let obstaclePosition = 100;
    const playerHeight = player.offsetHeight;
    const gravity = 0.9;

    function jump() {
        if (isJumping) return;
        isJumping = true;
        let jumpHeight = 20; // Adjust as necessary for jump height

        let upInterval = setInterval(() => {
            if (jumpHeight > 0) {
                player.style.bottom = `${parseInt(player.style.bottom || 0) + jumpHeight}px`;
                jumpHeight -= 1;
            } else {
                clearInterval(upInterval);
                let downInterval = setInterval(() => {
                    if (parseInt(player.style.bottom) > 0) {
                        player.style.bottom = `${parseInt(player.style.bottom) - jumpHeight * gravity}px`;
                        jumpHeight += 1;
                    } else {
                        clearInterval(downInterval);
                        isJumping = false;
                    }
                }, 20);
            }
        }, 20);
    }

    function moveObstacle() {
        obstaclePosition -= 1;
        obstacle.style.right = `${obstaclePosition}vw`;

        if (obstaclePosition <= -10) { // Resets the obstacle when it goes off-screen
            obstaclePosition = 100;
            score++;
            scoreDisplay.textContent = `Score: ${score}`;
        }

        // Check for collision
        const playerRect = player.getBoundingClientRect();
        const obstacleRect = obstacle.getBoundingClientRect();

        if (
            playerRect.left < obstacleRect.right &&
            playerRect.right > obstacleRect.left &&
            playerRect.bottom > obstacleRect.top
        ) {
            alert('Game Over');
            document.location.reload();
        }

        requestAnimationFrame(moveObstacle);
    }

    function handleKeyUp(event) {
        if (event.key === " " || event.key === "ArrowUp") {
            jump();
        }
    }

    function handleTouchStart() {
        jump();
    }

    document.addEventListener('keyup', handleKeyUp);
    document.addEventListener('touchstart', handleTouchStart);

    player.style.bottom = '0px';
    requestAnimationFrame(moveObstacle);
});
