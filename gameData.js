export const gameData = {
  scenes: {
    start: {
      text: `You wake up in a mysterious forest. The air is cool and misty. 
In front of you, there are two paths: one leading deeper into the dark woods, 
and another that seems to head toward a clearing with sunlight.`,
      choices: [
        { text: "Take the dark path into the woods", nextScene: "darkPath" },
        { text: "Head toward the sunny clearing", nextScene: "clearing" }
      ]
    },
    
    darkPath: {
      text: `You venture into the dark woods. The trees are dense and the light fades quickly.
After walking for a while, you come across an ancient-looking cabin with smoke coming from the chimney.`,
      choices: [
        { text: "Knock on the cabin door", nextScene: "cabin" },
        { text: "Continue past the cabin", nextScene: "continueDark" }
      ]
    },
    
    clearing: {
      text: `You reach the sunny clearing and find a beautiful meadow with colorful flowers.
In the distance, you see a sparkling river and what appears to be a small village.`,
      choices: [
        { text: "Follow the river", nextScene: "river" },
        { text: "Head toward the village", nextScene: "village" }
      ]
    },
    
    cabin: {
      text: `An old woman opens the door. She has kind eyes and offers you a warm meal.
"Welcome, traveler," she says. "You look lost. I can help you find your way home."`,
      choices: [
        { text: "Accept her help and enter the cabin", nextScene: "safeEnding" },
        { text: "Politely decline and continue your journey", nextScene: "continueDark" }
      ]
    },
    
    continueDark: {
      text: `You continue through the dark woods. The path becomes increasingly difficult to follow.
After hours of walking, you find yourself completely lost as night falls.`,
      choices: [
        { text: "Try to find shelter for the night", nextScene: "lostEnding" },
        { text: "Keep walking, hoping to find civilization", nextScene: "exhaustedEnding" }
      ]
    },
    
    river: {
      text: `You follow the river and discover it leads to a magnificent waterfall.
At the base of the waterfall, there's a hidden cave entrance partially obscured by vines.`,
      choices: [
        { text: "Enter the cave", nextScene: "cave" },
        { text: "Follow the river downstream", nextScene: "downstream" }
      ]
    },
    
    village: {
      text: `You arrive at a peaceful village where the villagers welcome you warmly.
They invite you to join their harvest festival happening tonight.`,
      choices: [
        { text: "Join the festival and stay in the village", nextScene: "villageEnding" },
        { text: "Thank them but continue your journey", nextScene: "journeyEnding" }
      ]
    },
    
    cave: {
      text: `Inside the cave, you discover ancient wall paintings and a treasure chest!
The paintings tell a story of a lost civilization that once thrived here.`,
      choices: [
        { text: "Open the treasure chest", nextScene: "treasureEnding" },
        { text: "Study the paintings and leave the chest untouched", nextScene: "wisdomEnding" }
      ]
    },
    
    downstream: {
      text: `Following the river downstream, you eventually reach a bustling port town.
Merchant ships are loading goods, and one captain offers you passage to distant lands.`,
      choices: [
        { text: "Accept the captain's offer and sail away", nextScene: "sailorEnding" },
        { text: "Stay in the port town and start a new life", nextScene: "portEnding" }
      ]
    },
    
    // Endings
    safeEnding: {
      text: `The old woman turns out to be a powerful sorceress who safely transports you home.
You wake up in your own bed, wondering if it was all a dream... or was it?`,
      choices: []
    },
    
    lostEnding: {
      text: `You spend a cold, frightening night in the woods. In the morning, you miraculously 
find a familiar path that leads you safely home, forever changed by your adventure.`,
      choices: []
    },
    
    exhaustedEnding: {
      text: `You push yourself too hard and collapse from exhaustion. Local hunters find you 
and bring you to safety. You recover but always wonder what other adventures awaited.`,
      choices: []
    },
    
    villageEnding: {
      text: `You become part of the village community, sharing stories of your journey.
You live a happy, peaceful life, always grateful for the day you found this special place.`,
      choices: []
    },
    
    journeyEnding: {
      text: `You continue your journey with supplies from the kind villagers. Years later, 
you become a famous explorer, always remembering this village as the start of your great adventures.`,
      choices: []
    },
    
    treasureEnding: {
      text: `The chest contains ancient gold and jewels! You become wealthy but more importantly,
you dedicate your life to preserving the knowledge of the lost civilization you discovered.`,
      choices: []
    },
    
    wisdomEnding: {
      text: `By studying the paintings, you learn ancient wisdom that changes your perspective on life.
You become a respected scholar, sharing the knowledge you discovered in the cave.`,
      choices: []
    },
    
    sailorEnding: {
      text: `You sail to exotic lands, having incredible adventures across the seas.
You become a legendary explorer, your name known in ports around the world.`,
      choices: []
    },
    
    portEnding: {
      text: `You settle in the port town, opening a shop that sells goods from around the world.
Travelers share their stories with you, and you always have a tale of your own to tell.`,
      choices: []
    }
  }
};