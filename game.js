const readline = require('readline');
const story = require('./story.json');
const gameState = require('./gameState.js');

class AdventureGame {
    constructor() {
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        this.currentSceneId = 'start';
    }

    // Display current scene and choices
    displayScene() {
        const scene = story.scenes[this.currentSceneId];
        
        console.log('\n' + '='.repeat(50));
        console.log(scene.text);
        console.log('='.repeat(50));
        
        if (scene.choices && scene.choices.length > 0) {
            console.log('\nYour choices:');
            scene.choices.forEach((choice, index) => {
                console.log(`${index + 1}. ${choice.text}`);
            });
            this.promptChoice();
        } else {
            // End of game
            console.log('\n--- THE END ---');
            gameState.saveGame(this.currentSceneId);
            this.rl.close();
        }
    }

    // Prompt user for choice
    promptChoice() {
        const scene = story.scenes[this.currentSceneId];
        
        this.rl.question('\nEnter your choice (1-' + scene.choices.length + '): ', (answer) => {
            const choiceIndex = parseInt(answer) - 1;
            
            if (choiceIndex >= 0 && choiceIndex < scene.choices.length) {
                const selectedChoice = scene.choices[choiceIndex];
                this.currentSceneId = selectedChoice.nextScene;
                gameState.saveGame(this.currentSceneId);
                this.displayScene();
            } else {
                console.log('Invalid choice! Please try again.');
                this.promptChoice();
            }
        });
    }

    // Start the game
    start() {
        console.log('🎮 Welcome to the Forest Adventure! 🎮');
        console.log('Make choices by entering numbers. Good luck!\n');
        
        // Try to load saved game
        const savedScene = gameState.loadGame();
        if (savedScene && story.scenes[savedScene]) {
            this.currentSceneId = savedScene;
            console.log('Loaded saved game...\n');
        }
        
        this.displayScene();
    }
}

// Start the game if this file is run directly
if (require.main === module) {
    const game = new AdventureGame();
    game.start();
}

module.exports = AdventureGame;