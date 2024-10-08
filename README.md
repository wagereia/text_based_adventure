# Forest Adventure Game

A simple choose-your-own-adventure game that runs in the terminal.

## How to Use

### Prerequisites
- Node.js installed on your computer

### Installation & Setup
1. Create a new folder for the game
2. Save all the provided files in that folder
3. Open terminal/command prompt in that folder

### Running the Game

**Start the game:**
```bash
node game.js
```

**Or using npm script:**
```bash
npm start
```

**Start a new game (delete saved progress):**
```bash
npm run new-game
```

### How to Play
1. Read the story text displayed in the terminal
2. When presented with choices, enter the number corresponding to your choice
3. Press Enter to confirm your selection
4. The game will automatically save your progress
5. Continue making choices until you reach an ending

### Features
- **Auto-save**: Your progress is automatically saved
- **Multiple endings**: Discover different story outcomes
- **Simple controls**: Just type numbers to make choices
- **Continue where you left off**: Game loads your last position

### Game Files
- `game.js` - Main game logic and interface
- `story.json` - All story scenes and choices
- `gameState.js` - Save/load functionality
- `package.json` - Project configuration

### Customization
You can easily modify the story by editing `story.json`:
- Add new scenes with unique IDs
- Create new choices that link to different scenes
- Write your own story branches and endings

Enjoy your adventure in the mysterious forest! 🌲✨