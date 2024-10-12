import readline from 'readline';
import { gameData } from './gameData.js';

class AdventureGame {
  constructor() {
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    this.currentScene = 'start';
  }

  // Display current scene and prompt for choice
  displayScene() {
    const scene = gameData.scenes[this.currentScene];
    
    console.log('\n' + '='.repeat(50));
    console.log(scene.text);
    console.log('='.repeat(50));
    
    if (scene.choices && scene.choices.length > 0) {
      console.log('\nYour choices:');
      scene.choices.forEach((choice, index) => {
        console.log(`${index + 1}. ${choice.text}`);
      });
      this.promptChoice(scene.choices);
    } else {
      // End of game
      console.log('\nThanks for playing!');
      this.rl.close();
    }
  }

  // Handle user input for choices
  promptChoice(choices) {
    this.rl.question('\nEnter your choice (1-' + choices.length + '): ', (answer) => {
      const choiceIndex = parseInt(answer) - 1;
      
      if (choiceIndex >= 0 && choiceIndex < choices.length) {
        this.currentScene = choices[choiceIndex].nextScene;
        this.displayScene();
      } else {
        console.log('Invalid choice! Please try again.');
        this.promptChoice(choices);
      }
    });
  }

  // Start the game
  start() {
    console.log('Welcome to the Adventure Game!');
    console.log('Make choices by entering numbers. Good luck!\n');
    this.displayScene();
  }
}

// Start the game
const game = new AdventureGame();
game.start();