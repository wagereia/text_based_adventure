const readline = require('readline-sync');
const story = require('./story.json');

class AdventureGame {
  constructor() {
    this.currentSceneId = 'start';
    this.playerName = '';
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
    }
  }

  // Get player's choice
  getPlayerChoice() {
    const scene = story.scenes[this.currentSceneId];
    
    if (!scene.choices || scene.choices.length === 0) {
      console.log('\n🎉 The End! Thanks for playing!');
      return false;
    }

    while (true) {
      const input = readline.question(`\nEnter your choice (1-${scene.choices.length}): `);
      const choiceIndex = parseInt(input) - 1;
      
      if (choiceIndex >= 0 && choiceIndex < scene.choices.length) {
        this.currentSceneId = scene.choices[choiceIndex].nextScene;
        return true;
      } else {
        console.log(`Please enter a number between 1 and ${scene.choices.length}`);
      }
    }
  }

  // Get player's name at the start
  getPlayerName() {
    console.log('Welcome to the Adventure Game!');
    this.playerName = readline.question('What is your name, adventurer? ');
    console.log(`\nHello ${this.playerName}! Let's begin your adventure...`);
  }

  // Main game loop
  start() {
    this.getPlayerName();
    
    while (this.currentSceneId !== 'end') {
      this.displayScene();
      if (!this.getPlayerChoice()) {
        break;
      }
    }
    
    console.log('\nThanks for playing!');
  }
}

// Start the game
const game = new AdventureGame();
game.start();