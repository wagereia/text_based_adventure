const readline = require('readline');

class AdventureGame {
    constructor() {
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        this.currentScene = 'start';
        this.gameOver = false;
        this.scenes = {
            'start': {
                text: "You wake up in a mysterious forest. The path splits in two directions.\n[1] Take the left path (dark and ominous)\n[2] Take the right path (bright and cheerful)",
                choices: {
                    '1': 'dark_forest',
                    '2': 'sunny_meadow'
                }
            },
            'dark_forest': {
                text: "You enter the dark forest. A growl echoes nearby.\n[1] Investigate the sound\n[2] Hide behind a tree\n[3] Run back to the starting point",
                choices: {
                    '1': 'wolf_encounter',
                    '2': 'safe_hiding',
                    '3': 'start'
                }
            },
            'sunny_meadow': {
                text: "You find yourself in a beautiful meadow with colorful flowers.\n[1] Pick some flowers\n[2] Follow a butterfly\n[3] Return to the forest entrance",
                choices: {
                    '1': 'flower_picking',
                    '2': 'butterfly_chase',
                    '3': 'start'
                }
            },
            'wolf_encounter': {
                text: "A large wolf appears! It seems hungry.\n[1] Try to tame it with food\n[2] Climb a tree\n[3] Play dead",
                choices: {
                    '1': 'wolf_friend',
                    '2': 'tree_escape',
                    '3': 'game_over'
                }
            },
            'safe_hiding': {
                text: "You successfully hide until the danger passes. You notice a hidden cave.\n[1] Enter the cave\n[2] Continue on the path",
                choices: {
                    '1': 'treasure_cave',
                    '2': 'forest_exit'
                }
            },
            'flower_picking': {
                text: "As you pick flowers, you discover a hidden key!\n[1] Look for what the key opens\n[2] Keep the key and continue exploring",
                choices: {
                    '1': 'hidden_treasure',
                    '2': 'meadow_exploration'
                }
            },
            'butterfly_chase': {
                text: "The butterfly leads you to a magical pond.\n[1] Drink from the pond\n[2] Look at your reflection\n[3] Follow the butterfly further",
                choices: {
                    '1': 'magic_potion',
                    '2': 'reflection_revelation',
                    '3': 'enchanted_garden'
                }
            },
            'wolf_friend': {
                text: "The wolf becomes your loyal companion! Together you find a treasure chest.\n🎉 YOU WIN! The wolf helps you carry your treasure home.",
                choices: {}
            },
            'tree_escape': {
                text: "You safely wait in the tree until the wolf leaves. You spot a village in the distance.\n🏡 YOU ESCAPE! You make it safely to the village.",
                choices: {}
            },
            'treasure_cave': {
                text: "The cave is filled with gold and jewels!\n💰 YOU WIN! You're rich beyond your wildest dreams.",
                choices: {}
            },
            'forest_exit': {
                text: "You find your way out of the forest and back to civilization.\n🏠 YOU WIN! You return home safely.",
                choices: {}
            },
            'hidden_treasure': {
                text: "The key opens a chest buried under a large oak tree!\n💎 YOU WIN! You found the legendary forest treasure.",
                choices: {}
            },
            'meadow_exploration': {
                text: "You enjoy a peaceful day exploring the meadow and return home refreshed.\n🌞 YOU WIN! A perfect day of adventure.",
                choices: {}
            },
            'magic_potion': {
                text: "The pond water gives you magical powers! You can now talk to animals.\n✨ YOU WIN! You become the forest guardian.",
                choices: {}
            },
            'reflection_revelation': {
                text: "Your reflection shows your true destiny - you're the lost prince/princess!\n👑 YOU WIN! You reclaim your royal throne.",
                choices: {}
            },
            'enchanted_garden': {
                text: "The butterfly leads you to an enchanted garden where fairies grant you a wish.\n🌟 YOU WIN! Your greatest wish comes true.",
                choices: {}
            },
            'game_over': {
                text: "The wolf isn't fooled. Game Over! 🐺",
                choices: {}
            }
        };
    }

    displayScene() {
        const scene = this.scenes[this.currentScene];
        console.log('\n' + '='.repeat(50));
        console.log(scene.text);
        console.log('='.repeat(50));

        if (Object.keys(scene.choices).length === 0) {
            this.gameOver = true;
            this.rl.close();
            return;
        }

        this.getPlayerChoice();
    }

    getPlayerChoice() {
        this.rl.question('\nEnter your choice (number): ', (answer) => {
            const scene = this.scenes[this.currentScene];
            
            if (scene.choices[answer]) {
                this.currentScene = scene.choices[answer];
                this.displayScene();
            } else {
                console.log('Invalid choice! Please enter a valid number.');
                this.getPlayerChoice();
            }
        });
    }

    start() {
        console.log('🌲 Welcome to the Forest Adventure! 🌲');
        console.log('Make choices by entering numbers to navigate through the story.\n');
        this.displayScene();
    }
}

// Start the game if this file is run directly
if (require.main === module) {
    const game = new AdventureGame();
    game.start();
}

module.exports = AdventureGame;