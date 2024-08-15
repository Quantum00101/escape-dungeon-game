// Initialize score
let score = 5;

// Function to update the score display
function updateScoreDisplay() {
    const scoreElement = document.getElementById('score');
    scoreElement.textContent = `Score: ${score}`;
}

// Example function to increment the score
function increaseScore(amount) {
    score += amount;
    updateScoreDisplay();
}

// Example function that could be called when the player collects an item
function onItemCollected() {
    increaseScore(10); // Increase score by 10 (you can adjust this value)
}

// Example game logic

// Set up the game (replace this with your actual game setup code)
function setupGame() {
    // Example: set up event listeners or game logic that could trigger scoring

    // Example: simulate item collection every 5 seconds
    setInterval(onItemCollected, 5000);
}

// Game loop (replace with your actual game loop logic)
function gameLoop() {
    // Your main game logic goes here

    // Example: Update game state, handle collisions, etc.
    
    // Continue game loop
    requestAnimationFrame(gameLoop);
}

// Start the game
function startGame() {
    setupGame();
    gameLoop();
}

// Start the game when the page loads
document.addEventListener('DOMContentLoaded', () => {
    startGame();
});
