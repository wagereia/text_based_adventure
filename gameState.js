const fs = require('fs');
const path = require('path');

const SAVE_FILE = 'game_save.json';

class GameState {
    // Save current game progress
    saveGame(currentSceneId) {
        const saveData = {
            currentScene: currentSceneId,
            timestamp: new Date().toISOString()
        };
        
        try {
            fs.writeFileSync(SAVE_FILE, JSON.stringify(saveData, null, 2));
        } catch (error) {
            console.log('Could not save game progress.');
        }
    }

    // Load saved game progress
    loadGame() {
        try {
            if (fs.existsSync(SAVE_FILE)) {
                const saveData = JSON.parse(fs.readFileSync(SAVE_FILE, 'utf8'));
                return saveData.currentScene;
            }
        } catch (error) {
            console.log('Could not load saved game.');
        }
        return null;
    }

    // Delete saved game
    deleteSave() {
        try {
            if (fs.existsSync(SAVE_FILE)) {
                fs.unlinkSync(SAVE_FILE);
                console.log('Saved game deleted.');
            }
        } catch (error) {
            console.log('Could not delete saved game.');
        }
    }
}

module.exports = new GameState();