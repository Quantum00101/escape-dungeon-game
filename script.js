// Initialize score
let score = 0;

// Select DOM elements
const player = document.getElementById('player');
const obstacle = document.getElementById('obstacle');
const scoreDisplay = document.getElementById('score');

// Function to increase the score
function increaseScore() {
    score += 10; // Increase score by 10 for each event
    scoreDisplay.textContent = `Score: ${score}`;
}

// Function to reset the score
function resetScore() {
    score = 0;
    scoreDisplay.textContent = `Score: ${score}`;
}

// Example game loop or event listener
function gameLoop() {
    // Example: Increase score every second
    increaseScore();

    // Example: Simulate a condition to stop the game (e.g., if player hits obstacle)
    // This is a placeholder for actual game logic
    if (score >= 100) { // For demonstration, stop after score reaches 100
        alert('You won!');
        return; // Exit game loop
    }

    // Call gameLoop again after a short delay
    setTimeout(gameLoop, 1000); // Call gameLoop every second
}

// Start the game
resetScore(); // Initialize score
gameLoop(); // Begin game loop
