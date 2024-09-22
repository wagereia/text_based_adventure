# Forest Adventure Game 🌲

A simple choose-your-own-adventure game that runs in the terminal using Node.js.

## How to Use

### Prerequisites
- Node.js installed on your computer (version 12 or higher)

### Installation & Setup

1. **Create a new folder** for the game:
   ```bash
   mkdir forest-adventure
   cd forest-adventure
   ```

2. **Create the game files**:
   - Copy the contents of `game.js` into a file named `game.js`
   - Copy the contents of `package.json` into a file named `package.json`

3. **Run the game**:
   ```bash
   node game.js
   ```
   Or if you prefer:
   ```bash
   npm start
   ```

### How to Play

1. **Read the story** that appears in the terminal
2. **Make choices** by typing the number corresponding to your desired action
3. **Press Enter** after typing your choice
4. **Continue making choices** until you reach an ending
5. **The game ends** when you reach a win or game over scenario

### Game Features

- **Multiple paths**: Different choices lead to different outcomes
- **8 different winning endings**
- **1 game over scenario**
- **Simple navigation**: Just type numbers to make choices
- **Clear story progression**: Each scene is clearly marked

### Example Gameplay
```
🌲 Welcome to the Forest Adventure! 🌲
Make choices by entering numbers to navigate through the story.

==================================================
You wake up in a mysterious forest. The path splits in two directions.
[1] Take the left path (dark and ominous)
[2] Take the right path (bright and cheerful)
==================================================

Enter your choice (number): 1
```

### Troubleshooting

- If you get "command not found" for `node`, ensure Node.js is installed
- If choices don't work, make sure you're typing only numbers (1, 2, 3, etc.)
- The game automatically ends when you reach a conclusion

Enjoy your adventure in the mysterious forest! 🎮