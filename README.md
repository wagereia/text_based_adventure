# Adventure Game - How to Use

## Prerequisites
- Node.js installed on your computer

## Installation & Running the Game

1. **Save the files** in a new folder:
   - `package.json`
   - `game.js` 
   - `gameData.js`

2. **Open terminal/command prompt** and navigate to the folder containing the files

3. **Run the game** using:
   ```bash
   npm start
   ```
   or
   ```bash
   node game.js
   ```

## How to Play

- The game will present you with story scenes and choices
- Read the story text carefully
- When prompted, enter the number corresponding to your choice (1, 2, etc.)
- Press Enter to confirm your choice
- Your choices will lead to different story paths and endings
- The game ends when you reach one of the multiple possible endings

## Game Features

- Multiple story paths and endings
- Simple text-based interface
- No external dependencies required
- Easy to modify and expand by editing `gameData.js`

## Customizing the Game

You can easily create your own adventure by modifying the `gameData.js` file:
- Add new scenes by adding entries to the `scenes` object
- Create new choices with different `nextScene` values
- Write your own story text and endings

Enjoy your adventure!