# Adventure Game - README

## How to Use

### Prerequisites
- Node.js installed on your computer
- Basic terminal/command prompt knowledge

### Installation & Setup

1. **Create the game folder:**
   ```bash
   mkdir adventure-game
   cd adventure-game
   ```

2. **Create the files:**
   Copy the code from above into three separate files:
   - `package.json`
   - `game.js`
   - `story.json`

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Run the game:**
   ```bash
   npm start
   ```
   or
   ```bash
   node game.js
   ```

### How to Play

1. The game will ask for your name at the beginning
2. Read each scene description carefully
3. Choose your path by entering the number of your choice
4. Follow the story and see where your decisions lead you!
5. The game ends when you reach a scene with no more choices

### Customizing the Game

You can modify the `story.json` file to create your own adventures:
- Add new scenes by creating new objects in the "scenes" object
- Connect scenes using the "nextScene" property in choices
- Each scene needs a "text" (description) and "choices" array
- Empty choices array means it's an ending scene

### Example of Adding a New Scene

```json
"new_scene": {
  "text": "Your custom scene description here",
  "choices": [
    {
      "text": "Choice 1 description",
      "nextScene": "target_scene_id"
    },
    {
      "text": "Choice 2 description", 
      "nextScene": "another_scene_id"
    }
  ]
}
```

Enjoy your adventure! 🎮